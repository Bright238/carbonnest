import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Tooltip, Space, Row, Col } from 'antd';
import { BasicTableRow, Pagination } from 'api/table.api';
import * as S from '@app/components/common/inputs/SearchInput/SearchInput.styles';
import { Parser } from 'json2csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface Household {
  household_id: string;
  caregiver_name: string;
  homeaddress: string;
  facility: string;
  province: string;
  ward: string;
  caseworker_name: string;
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 100,
};

export const EditableTable: React.FC = () => {
  const [households, setHouseholds] = useState<Household[]>([]);
  const [filteredHouseholds, setFilteredHouseholds] = useState<Household[]>([]);
  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [user, setUser] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchHouseholds = async () => {
      if (!user) return;
      try {
        setTableData((prev) => ({ ...prev, loading: true }));
        const response = await axios.get(`https://ecapplus.server.dqa.bluecodeltd.com/household/all-households`);
        setHouseholds(response.data.data);
      } catch (error) {
        console.error('Error fetching households data:', error);
      } finally {
        setTableData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchHouseholds();
  }, [user]);

  // Apply search filtering
  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = households.filter((household) => 
      (household.household_id?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (household.caregiver_name?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (household.homeaddress?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (household.ward?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (household.caseworker_name?.toLowerCase() || '').includes(lowerCaseQuery)
    );
    setFilteredHouseholds(filtered);
  }, [searchQuery, households]);
  

  useEffect(() => {
    const mappedData: BasicTableRow[] = filteredHouseholds.map((household, index) => ({
      key: index,
      name: household.caregiver_name,
      address: `
        Address: ${household.homeaddress || 'Not Applicable'}
        Facility: ${household.facility || 'Not Applicable'}
        Province: ${household.province || 'Not Applicable'}
        Ward: ${household.ward || 'Not Applicable'}
      `,
      household_id: household.household_id,
      caseworker_name: household.caseworker_name,
    }));

    setTableData({ data: mappedData, pagination: initialPagination, loading: false });
  }, [filteredHouseholds]);

  const exportToCSV = () => {
    const fields = ['household_id', 'caregiver_name', 'homeaddress', 'facility', 'province', 'ward', 'caseworker_name'];
    const parser = new Parser({ fields });
    const csv = parser.parse(households);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'households.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Household ID', 'Caregiver Name', 'Address', 'Facility', 'Province', 'Ward', 'Caseworker Name'];
    const tableRows: any[] = [];

    households.forEach((household) => {
      const rowData = [
        household.household_id,
        household.caregiver_name,
        household.homeaddress,
        household.facility,
        household.province,
        household.ward,
        household.caseworker_name,
      ];
      tableRows.push(rowData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save('households.pdf');
  };

  const handleView = (household_id: string) => {
    const selectedHousehold = households.find(household => household.household_id === household_id);
    navigate(`/profile/household-profile/${encodeURIComponent(household_id)}`, { state: { household: selectedHousehold } });
  };

  const columns = [
    {
      title: t('Household ID'),
      dataIndex: 'household_id',
      width: '20%',
    },
    {
      title: t('Caregiver Name'),
      dataIndex: 'name',
      width: '20%',
    },
    {
      title: t('Household Details'),
      dataIndex: 'address',
      width: '30%',
      render: (text: string) => <div style={{ whiteSpace: 'pre-line' }}>{text}</div>,
    },
    {
      title: t('Case Worker'),
      dataIndex: 'caseworker_name',
      width: '20%',
    },
    {
      title: t('Actions'),
      width: '10%',
      dataIndex: '',
      render: (text: string, record: BasicTableRow) => (
        <BaseSpace>
          <BaseButton type="primary" onClick={() => handleView(record.household_id)}>
            {t('View')}
          </BaseButton>
        </BaseSpace>
      ),
    },
  ];

  const searchTooltipContent = (
    <div>
      {t('You can search by Household ID, Caregiver Name, Caseworker Name, and other fields.')}
    </div>
  );

  return (
    <div style={{ margin: '20px' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Tooltip title={searchTooltipContent}>
          <Space>
            <S.SearchInput
              style={{ width: 400 }}
              placeholder={t('Search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Space>
        </Tooltip>
        <Row justify="end" style={{ marginBottom: 16 }}>
          <Col>
            <Space>
              <Button type="primary" onClick={exportToCSV}>
                {t('Export CSV')}
              </Button>
              <Button type="primary" onClick={exportToPDF}>
                {t('Export PDF')}
              </Button>
            </Space>
          </Col>
        </Row>
        <BaseTable
          bordered
          dataSource={tableData.data}
          columns={columns}
          pagination={tableData.pagination}
          onChange={(pagination) => {}}
          loading={tableData.loading}
          tableLayout="fixed"
        />
      </Space>
    </div>
  );
};
