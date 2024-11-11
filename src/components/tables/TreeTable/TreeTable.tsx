import React, { useState, useRef } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { Input, InputRef, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Define your transaction type
interface Transaction {
  transaction_id: string;
  seller_name: string;
  buyer_name: string;
  credits_amount: number;
  price_per_credit: number;
  total_value: number;
  transaction_date: string;
}

const dummyTransactions: Transaction[] = [
  {
    transaction_id: 'TXN001',
    seller_name: 'Bright Mafungautsi',
    buyer_name: 'Bob Smith',
    credits_amount: 100,
    price_per_credit: 0.5,
    total_value: 50,
    transaction_date: '2024-10-31',
  },
  // Other dummy transactions
];

const initialPagination = {
  current: 1,
  pageSize: 100,
};

// Styled component for mobile responsiveness
const ResponsiveTableWrapper = styled.div`
  overflow-x: auto;
  @media (max-width: 768px) {
    .ant-table-cell {
      font-size: 0.85rem; // Adjust font size for smaller screens
    }
    .ant-table-thead > tr > th {
      white-space: nowrap;
    }
  }
`;

export const TreeTable: React.FC = () => {
  const { t } = useTranslation();
  const [tableData, setTableData] = useState<{
    data: Transaction[];
    pagination: typeof initialPagination;
    loading: boolean;
  }>({
    data: dummyTransactions,
    pagination: initialPagination,
    loading: false,
  });

  const [searchText, setSearchText] = useState<string>('');
  const [searchedColumn, setSearchedColumn] = useState<string>('');
  const searchInput = useRef<InputRef>(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Define mobile view

  const handleSearch = (selectedKeys: string[], confirm: () => void, dataIndex: string) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
    setSearchedColumn('');
  };

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    onFilter: (value: string, record: Transaction) =>
      record[dataIndex as keyof Transaction].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: t('Transaction ID'),
      dataIndex: 'transaction_id',
      ...getColumnSearchProps('transaction_id'),
    },
    {
      title: t('Seller Name'),
      dataIndex: 'seller_name',
      ...getColumnSearchProps('seller_name'),
    },
    {
      title: t('Buyer Name'),
      dataIndex: 'buyer_name',
      ...getColumnSearchProps('buyer_name'),
    },
    {
      title: t('Credits Amount'),
      dataIndex: 'credits_amount',
      ...getColumnSearchProps('credits_amount'),
    },
    {
      title: t('Price per Credit'),
      dataIndex: 'price_per_credit',
      ...getColumnSearchProps('price_per_credit'),
    },
    {
      title: t('Total Value'),
      dataIndex: 'total_value',
      ...getColumnSearchProps('total_value'),
    },
    {
      title: t('Transaction Date'),
      dataIndex: 'transaction_date',
      ...getColumnSearchProps('transaction_date'),
    },
    {
      title: t('Actions'),
      dataIndex: '',
      render: (_: any, record: Transaction) => (
        <BaseButton
          type="ghost"
          onClick={() => navigate(`/transaction/${record.transaction_id}`)}
        >
          {t('Print')}
        </BaseButton>
      ),
    },
  ];

  return (
    <ResponsiveTableWrapper>
      <BaseTable
        columns={columns}
        dataSource={tableData.data}
        pagination={tableData.pagination}
        loading={tableData.loading}
        scroll={{ x: isMobile ? 900 : undefined }} // Enable horizontal scroll on mobile
      />
    </ResponsiveTableWrapper>
  );
};

export default TreeTable;
