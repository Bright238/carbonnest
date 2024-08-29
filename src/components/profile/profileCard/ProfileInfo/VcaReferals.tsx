import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Skeleton, Typography, Alert, Table, Button } from 'antd';
import axios from 'axios';
import styled from 'styled-components';
import Papa from 'papaparse';
import { jsPDF } from 'jspdf';  // Import jsPDF
import 'jspdf-autotable';  // Import jsPDF autoTable

const { Title } = Typography;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const ExportWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const columns = [
  {
    title: 'Referral Date',
    dataIndex: 'referred_date',
    key: 'referred_date',
    render: (text: string | null) => text ? text : 'Not Applicable',
  },
  {
    title: 'Case Worker',
    dataIndex: 'caseworker_name',
    key: 'caseworker_name',
    render: (text: string | null) => text ? text : 'Not Applicable',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text: string | null) => text ? text : 'Not Applicable',
  },
  {
    title: 'Receiving Organisation',
    dataIndex: 'receiving_organization',
    key: 'receiving_organization',
    render: (text: string | null) => text ? text : 'Not Applicable',
  },
  {
    title: 'Safe Services',
    dataIndex: 'safe_services',
    key: 'safe_services',
    render: (text: string | null) => text ? text : 'Not Applicable',
  },
  {
    title: 'School Services',
    dataIndex: 'schooled_services',
    key: 'schooled_services',
    render: (text: string | null) => text ? text : 'Not Applicable',
  },
  {
    title: 'Stable Services',
    dataIndex: 'stable_services',
    key: 'stable_services',
    render: (text: string | null) => text ? text : 'Not Applicable',
  },
];

const cleanData = (data: any[]) => {
  return data.map((record) => {
    const cleanedRecord = { ...record };

    Object.keys(cleanedRecord).forEach((key) => {
      if (cleanedRecord[key] === null || cleanedRecord[key] === undefined) {
        cleanedRecord[key] = 'Not Applicable';
      }
    });

    return cleanedRecord;
  });
};

export const VcaReferals: React.FC = () => {
  const location = useLocation();
  const vcaId = location.state?.vca.uid;

  const [isLoading, setLoading] = useState(false);
  const [serviceRecords, setServiceRecords] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (vcaId) {
      setLoading(true);
      axios
        .get(`https://ecapplus.server.dqa.bluecodeltd.com/child/all-referrals/527853143`)
        .then((response) => {
          const data = cleanData(response.data.data);
          setServiceRecords(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [vcaId]);

  const exportCSV = () => {
    const csv = Papa.unparse(serviceRecords);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'vca-referrals.csv');
    link.click();
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Vca Referrals', 14, 10);
    doc.autoTable({
      head: [columns.map(col => col.title)],
      body: serviceRecords.map(record => columns.map(col => record[col.dataIndex])),
    });
    doc.save('vca-referrals.pdf');
  };

  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Skeleton active />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Alert
          message="We encountered an error fetching service records. Refresh the page to see if the issue persists."
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <Wrapper>
      <Title>Vca Referrals</Title>
      <ExportWrapper>
        <Button onClick={exportCSV} type="primary" style={{ marginRight: 8 }}>
          Export CSV
        </Button>
        <Button onClick={exportPDF} type="primary">
          Export PDF
        </Button>
      </ExportWrapper>
      <Table
        columns={columns}
        dataSource={serviceRecords}
        pagination={false}
        scroll={{ x: 'max-content' }}
        rowKey="referred_date"
      />
    </Wrapper>
  );
};
