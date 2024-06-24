import React, { useState, useEffect } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import axios from 'axios';
import { Button, Space, Tooltip, Spin, message, Modal, Form, Input, Popconfirm } from 'antd';
import { SearchOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { SearchInput } from '@app/components/common/inputs/SearchInput/SearchInput.styles';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  location: string;
  title: string;
  last_access: string;
  last_page: string;
  email: string;
  status: string;
  description: string;
}

export const UserManagementTreeTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [deletedUsers, setDeletedUsers] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });

      setUsers(response.data.data); 
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const createUser = async (newUser: any) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users`, newUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });

      console.log('User created:', response.data);

      setUsers(prevUsers => [...prevUsers, response.data]);
      message.success('User created successfully');
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error creating user:', error);
      message.error('Failed to create user');
    }
  };

  const editUser = async (userId: string, updatedUser: Partial<User>) => {
    try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });

      console.log('User updated:', response.data);

      setUsers(users.map(user => user.id === userId ? { ...user, ...updatedUser } : user));
      message.success('User updated successfully');
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error updating user:', error);
      message.error('Failed to update user');
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });

      console.log('User deleted successfully');

      setUsers(users.filter(user => user.id !== userId));
      setDeletedUsers([...deletedUsers, userId]);
      message.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      message.error('Failed to delete user');
    }
  };

  const deleteMultipleUsers = async (userIds: string[]) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/users`, {
        data: userIds,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });

      console.log('Users deleted successfully');

      setUsers(users.filter(user => !userIds.includes(user.id)));
      setDeletedUsers([...deletedUsers, ...userIds]);
      message.success('Users deleted successfully');
    } catch (error) {
      console.error('Error deleting users:', error);
      message.error('Failed to delete users');
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
      fetchUsers(); // Refresh user list after successful operation
    } catch (error) {
      console.error('Failed to create or update user:', error);
    }
  };

  const handleCancel = () => {
    form.resetFields(); // Reset form fields on cancel
    setIsModalVisible(false);
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
    },
    {
      title: 'Department',
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
      title: 'Status',
      dataIndex: 'status',
      width: '25%',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: User) => (
        <Space>
          <Tooltip title="Edit">
            <Button type="primary" onClick={() => showEditModal(record)}>Edit</Button>
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
      <Space style={{ marginBottom: 16, width: "100%" }}>
        <SearchInput
          placeholder="Search for a user"
          prefix={<SearchOutlined />}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showModal}
        >
          Add User
        </Button>
      </Space>
      <Spin spinning={loading}>
        <BaseTable
          bordered
          dataSource={users.filter(user =>
            (user.first_name && user.first_name.toLowerCase().includes(searchText.toLowerCase())) ||
            (user.last_name && user.last_name.toLowerCase().includes(searchText.toLowerCase())) ||
            (user.location && user.location.toLowerCase().includes(searchText.toLowerCase())) ||
            (user.email && user.email.toLowerCase().includes(searchText.toLowerCase())) ||
            (user.description && user.description.toLowerCase().includes(searchText.toLowerCase()))
          )}
          columns={columns}
          rowClassName="editable-row"
          pagination={false}
          scroll={{ x: 800 }}
        />
      </Spin>
      <Modal
        title={editingUser ? 'Update User' : 'Add New User'}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            {editingUser ? 'Update' : 'Add'}
          </Button>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          name="addUserForm"
        >
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
            label="Email Address"
            rules={[{ required: true, message: 'Please input the email address!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="title"
            label="Province"
            rules={[{ required: true, message: 'Please enter the province!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="District"
            rules={[{ required: true, message: 'Please enter the district!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Department"
            rules={[{ required: true, message: 'Please enter the department!' }]}
          >
            <Input />
          </Form.Item>
          {editingUser ? (
            <>
              <Form.Item
                name="last_access"
                label="Last Accessed PMP"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="last_page"
                label="Last Page"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="status"
                label="Status"
              >
                <Input />
              </Form.Item>
            </>
          ) : null}
        </Form>
      </Modal>
    </>
  );
};
