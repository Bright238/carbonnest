import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import axios from 'axios';
import {
  Button,
  Space,
  Tooltip,
  Spin,
  message,
  Modal,
  Form,
  Input,
  Select,
  Popconfirm,
  Divider,
  Tabs,
  notification,
} from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import * as S from '@app/components/common/inputs/SearchInput/SearchInput.styles';
import TabPane from 'antd/lib/tabs/TabPane';
import { notificationController } from '@app/controllers/notificationController';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  location: string;
  title: string;
  description?: string; // Add this if you need to check user roles or descriptions
  last_access: string;
  last_page: string;
  email: string;
  role: string;
}

const roleId = '6cb62a51-f2d3-4618-b63a-e5678a3c2fc1'; // Specific role ID

// Define the valid province names as a union type
type Province = 'All' | 'Central Province' | 'Southern Province' | 'Western Province';

const provinceOptions = [
  { value: 'All', label: 'All' },
  { value: 'Central Province', label: 'Central Province' },
  { value: 'Southern Province', label: 'Southern Province' },
  { value: 'Western Province', label: 'Western Province' },
];

// Define districts in each province
const districtOptions: Record<Province, string[]> = {
  All: ['All'],
  'Central Province': [
    'Serenje',
    'Kapiri Mposhi',
    'Mkushi',
    'Mumbwa',
    'Chibombo',
    'Chisamba',
    'Ngabwe',
    'Shibuyunji',
    'Chitambo',
  ],
  'Southern Province': [
    'Monze',
    'Mazabuka',
    'Kazungula',
    'Choma',
    'Gwembe',
    'Kalomo',
    'Livingstone',
    'Namwala',
    'Siavonga',
    'Zimba',
    'Sesheke',
    'Mwandi',
  ],
  'Western Province': [
    'Mongu',
    'Limulunga',
    'Kalabo',
    'Sesheke',
    'Barotse',
    'Nkeyema',
    'Shangombo',
    'Liunga',
    'Senanga',
    'Kaoma',
  ],
};

const roleOptions = [
  { value: 'Administrator', label: 'Administrator' },
  { value: 'System User', label: 'System User' },
];

export const UserManagementTreeTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [form] = Form.useForm();
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [districtList, setDistrictList] = useState<string[]>([]);

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setCurrentUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    fetchUsersByRole(); // Fetch users with the specific role when component mounts
  }, []);

  const fetchUsersByRole = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/roles/${roleId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      const userIds = response.data.data.users;

      if (userIds.length > 0) {
        const usersResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        const filteredUsers = usersResponse.data.data.filter((user: User) => userIds.includes(user.id));
        setUsers(filteredUsers);
      } else {
        setUsers([]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users by role:', error);
      setLoading(false);
    }
  };

  const hasPermission = () => currentUser?.description === 'Administrator';

  const createUser = async (newUser: any) => {
    if (!hasPermission()) {
      notificationController.error({
        message: 'You do not have permission to create users. Contact IT support for help.',
      });
      return;
    }

    try {
      if (newUser.location && Array.isArray(newUser.location)) {
        newUser.location = newUser.location.join(', ');
      }

      const userWithRole = {
        ...newUser,
        role: roleId,
      };

      await axios.post(`${process.env.REACT_APP_BASE_URL}/users`, userWithRole, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      await fetchUsersByRole();
      message.success('User created successfully');
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error creating user:', error);
      message.error('Failed to create user.');
    }
  };

  const editUser = async (userId: string, updatedUser: Partial<User>) => {
    if (!hasPermission()) {
      notificationController.error({
        message: 'You do not have permission to edit users. Contact IT support for help.',
      });
      return;
    }

    try {
      if (updatedUser.location && Array.isArray(updatedUser.location)) {
        updatedUser.location = updatedUser.location.join(', ');
      }

      await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      setUsers(users.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user)));
      message.success('User updated successfully');
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error editing user:', error);
      message.error('Failed to edit user.');
    }
  };

  const deleteUser = async (userId: string) => {
    if (!hasPermission()) {
      notificationController.error({
        message: 'You do not have permission to delete users. Contact IT support for help.',
      });
      return;
    }

    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      setUsers(users.filter((user) => user.id !== userId));
      message.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      message.error('Failed to delete user.');
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const showModal = () => {
    setIsModalVisible(true);
    setEditingUser(null);
    form.resetFields(); // Reset form fields when opening modal
  };

  const showEditModal = (user: User) => {
    setIsModalVisible(true);
    setEditingUser(user);
    form.setFieldsValue(user); // Populate form fields with user data
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (editingUser) {
        await editUser(editingUser.id, values);
      } else {
        await createUser(values);
      }
      form.resetFields();
      fetchUsersByRole(); // Refresh user list after successful operation
    } catch (error) {
      console.error('Failed to create or update user:', error); // Log the error
    }
  };

  const handleCancel = () => {
    form.resetFields(); // Reset form fields on cancel
    setIsModalVisible(false);
  };

  // Handle province selection
  const handleProvinceChange = (province: Province) => {
    setSelectedProvince(province);
    setDistrictList(districtOptions[province] || []);
    form.setFieldsValue({ location: [] }); // Reset district selection when province changes
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      width: '25%',
    },
    {
      title: 'Province',
      dataIndex: 'title',
      width: '25%',
    },
    {
      title: 'District',
      dataIndex: 'location',
      width: '25%',
      render: (location: string | string[]) => {
        // Display the location cleanly, already formatted as a string (comma-separated)
        return location;
      },
    },
    {
      title: 'Role',
      dataIndex: 'description',
      width: '25%',
    },

    {
      title: 'Last Accessed PMP',
      dataIndex: 'last_access',
      width: '25%',
    },
    {
      title: 'Last Page',
      dataIndex: 'last_page',
      width: '25%',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: User) => (
        <Space>
          <Tooltip title="Edit">
            <Button type="primary" onClick={() => showEditModal(record)}>
              Edit
            </Button>
          </Tooltip>
          <Popconfirm
            title="Are you sure delete this user?"
            onConfirm={() => deleteUser(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete">
              <Button type="ghost" danger icon={<DeleteOutlined />} />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="User Management" key="1">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Button
              onClick={showModal}
              style={{ fontSize: '16px', cursor: 'pointer' }}
              title="Add New User"
              type="primary"
              icon={<PlusOutlined />}
            >
              Add New User
            </Button>
            <Space>
              <S.SearchInput
                placeholder="Search for a user"
                onChange={(e) => handleSearch(e.target.value)}
                value={searchText}
              />
            </Space>
          </div>
          <Divider />
          <Spin spinning={loading}>
            <BaseTable
              bordered
              dataSource={users.filter(
                (user) =>
                  (user.first_name && user.first_name.toLowerCase().includes(searchText.toLowerCase())) ||
                  (user.last_name && user.last_name.toLowerCase().includes(searchText.toLowerCase())) ||
                  (user.location && user.location.toLowerCase().includes(searchText.toLowerCase())) ||
                  (user.email && user.email.toLowerCase().includes(searchText.toLowerCase())),
              )}
              columns={columns}
              rowClassName="editable-row"
              pagination={false}
              scroll={{ x: 800 }}
            />
          </Spin>
        </TabPane>
      </Tabs>

      <Modal
        title={editingUser ? 'Edit User' : 'Add New User'}
        open={isModalVisible}
        onOk={handleOk}
        width={600}
        onCancel={handleCancel}
        okText={editingUser ? 'Update' : 'Create'}
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical" name="user_form">
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[{ required: true, message: 'Please input the first name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[{ required: true, message: 'Please input the last name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input the email!' },
              { type: 'email', message: 'The input is not valid E-mail!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="User Role"
            rules={[{ required: true, message: 'Please select a user role!' }]}
          >
            <Select options={roleOptions} placeholder="Select a user role" />
          </Form.Item>
          <Form.Item name="title" label="Province" rules={[{ required: true, message: 'Please select the province!' }]}>
            <Select options={provinceOptions} onChange={handleProvinceChange} placeholder="Select a province" />
          </Form.Item>
          <Form.Item
            name="location"
            label="Districts"
            rules={[{ required: true, message: 'Please select at least one district!' }]}
          >
            <Select
              mode="multiple"
              options={districtList.map((district) => ({ label: district, value: district }))}
              placeholder="Select districts"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: 'Please input the password!' },
              { min: 6, message: 'Password must be at least 6 characters!' },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm_password"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
