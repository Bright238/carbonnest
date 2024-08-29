import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Tooltip, Space, Row, Col } from 'antd';
import { BasicTableRow, Pagination } from 'api/table.api';
import * as S from '@app/components/common/inputs/SearchInput/SearchInput.styles';
import { Parser } from 'json2csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface Vca {
  uid: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  caregiver_name: string;
  caregiver_phone: string;
  caregiver_hiv_status: string;
  caregiver_birth_date: string;
  household_id: string;
  homeaddress: string | null;
  facility: string;
  province: string;
  district: string;
  ward: string;
  screening_location: string;
  date_enrolled: string;
  date_created: string;
  date_last_vl: string | null;
  date_next_vl: string | null;
  vca_gender: string;
  is_hiv_positive: string;
  vl_suppressed: string;
}

interface User {
  location: string;
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 100,
};

export const TreeTable: React.FC = () => {
  const [vcas, setVcas] = useState<Vca[]>([]);
  const [filteredVcas, setFilteredVcas] = useState<Vca[]>([]);
  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
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
    const fetchData = async () => {
      if (!user) return;

      try {
        setTableData((prev) => ({ ...prev, loading: true }));
        const response = await axios.get(
          `https://ecapplus.server.dqa.bluecodeltd.com/child/vcas-assessed-register`
        );
        setVcas(response.data.data);
        console.log('vcas',response.data.data);
        localStorage.setItem('vcas', JSON.stringify(response.data.data));
      } catch (error) {
        console.error('Error fetching VCAs data:', error);
      } finally {
        setTableData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, [user]);

   // Apply search filtering
   useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = vcas.filter((vca) => 
      (vca.uid?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (vca.firstname?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (vca.lastname?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (vca.homeaddress?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (vca.ward?.toLowerCase() || '').includes(lowerCaseQuery) ||
      (vca.vca_gender?.toLowerCase() || '').includes(lowerCaseQuery) 
    );
    setFilteredVcas(filtered);
  }, [searchQuery, vcas]);
  

  useEffect(() => {
    const mappedData = filteredVcas.map((vca, index) => ({
      key: index,
      unique_id: vca.uid,
      name: `${vca.firstname} ${vca.lastname}`,
      gender: vca.vca_gender,
      age: vca.birthdate,
      address: (
        <div>
          <div>Address: {vca.homeaddress || 'Unknown'}</div>
          <div>Facility: {vca.facility || 'Unknown'}</div>
          <div>Province: {vca.province || 'Unknown'}</div>
          <div>District: {vca.district || 'Unknown'}</div>
          <div>Ward: {vca.ward || 'Unknown'}</div>
        </div>
      )
    }));
  
    setTableData({ data: mappedData, pagination: initialPagination, loading: false });
  }, [filteredVcas]);  
  
 

  const exportToCSV = () => {
    const fields = ['uid', 'firstname', 'lastname', 'vca_gender', 'homeaddress', 'province', 'district', 'ward' ];
    const parser = new Parser({ fields });
    const csv = parser.parse(vcas);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'vcas.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Unique ID', ' First Name', 'Last Name', 'Gender', 'Address', 'Province', 'District', 'Ward'];
    const tableRows: any[] = [];

    vcas.forEach((vca) => {
      const rowData = [
        vca.uid,
        vca.firstname,
        vca.lastname,
        vca.vca_gender,
        vca.homeaddress,
        vca.province,
        vca.district,
        vca.ward,
      ];
      tableRows.push(rowData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save('vca.pdf');
  };

  const handleView = (uid: string) => {
    console.log("selected uid", uid);
    const selectedVca = vcas.find((vca) => vca.uid === uid);
    console.log("selected vca", selectedVca);
    navigate(`/profile/vca-profile/${encodeURIComponent(uid)}`, { state: { vca: selectedVca } });
  };


  const columns = [
    {
      title: t('Unique ID'),
      dataIndex: 'unique_id',
      width: '20%',
    },
    {
      title: t('Full Name'),
      dataIndex: 'name',
      width: '20%',
    },
    {
      title: t('Gender'),
      dataIndex: 'gender',
      width: '15%',
    },
    {
      title: t('Household Details'),
      dataIndex: 'address',
      width: '35%',
    },
    {
      title: t('Actions'),
      width: '15%',
      dataIndex: '',
      render: (text: string, record: BasicTableRow) => (
        <BaseSpace>
          <BaseButton type="primary" onClick={() => handleView(record.unique_id)}>
            {t('View')}
          </BaseButton>
        </BaseSpace>
      ),
    },
  ];

  const searchTooltipContent = (
    <div>
      {t('You can search by Unique ID, Name, Gender, Ward, and other fields.')}
    </div>
  );

  return (
    <div style={{ margin: '20px', textTransform: 'capitalize' }}>
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
