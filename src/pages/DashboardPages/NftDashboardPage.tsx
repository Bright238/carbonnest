import React, { useState } from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { Button, Typography, Modal } from 'antd'; // Import Modal here
import { useNavigate } from 'react-router-dom';
import { Balance } from '@app/components/nft-dashboard/Balance/Balance';
import { MapCard } from '@app/components/medical-dashboard/mapCard/MapCard';

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();
  const navigate = useNavigate();

  // Placeholder counts (replace these with real data fetching logic)
  const [farmersCount, setFarmersCount] = useState(100);
  const [projectsCount, setProjectsCount] = useState(20);
  const [carbonCreditsCount, setCarbonCreditsCount] = useState(5000);

  // Modal state
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGetStarted = () => {
    navigate('/auth/sign-up');
  };

  // Function to show modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle modal close
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const modalContent = (
    <div>
      <Typography.Title level={4}>Farmer Profiles</Typography.Title>
      <Typography.Paragraph>Manage detailed farmer profiles, track training, and certifications.</Typography.Paragraph>
      <Typography.Title level={4}>Data Collection</Typography.Title>
      <Typography.Paragraph>Easy mobile-friendly data collection with offline support.</Typography.Paragraph>
      <Typography.Title level={4}>Real-Time Reporting</Typography.Title>
      <Typography.Paragraph>
        Provide live updates on biochar projects and carbon removal activities.
      </Typography.Paragraph>
      <Typography.Title level={4}>Verification and Audits</Typography.Title>
      <Typography.Paragraph>Automated verification and audit tools for consistent quality checks.</Typography.Paragraph>
    </div>
  );

  const desktopLayout = (
    <div style={{ padding: '40px' }}>
      <BaseRow justify="center" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <BaseCol>
          <Typography.Title level={1}>Carbonnest</Typography.Title>

          <Typography.Paragraph>
            Simplifying Biochar Carbon Verification
            <br />
            Streamline data collection, monitoring, and reporting for carbon sink activities with our all-in-one biochar
            verification platform.
          </Typography.Paragraph>
          <Button
            type="primary"
            style={{ borderRadius: '50px', padding: '0 40px' }}
            size="large"
            onClick={handleGetStarted}
          >
           Create Account
          </Button>
        </BaseCol>
      </BaseRow>

      <BaseRow gutter={[80, 80]} style={{ marginTop: '40px' }}>
        <BaseCol xs={24} sm={12} md={8}>
          <Balance title="Farmers Registered" count={farmersCount} />
        </BaseCol>
        <BaseCol xs={24} sm={12} md={8}>
          <Balance title="Live Projects" count={projectsCount} />
        </BaseCol>
        <BaseCol xs={24} sm={12} md={8}>
          <Balance title="Carbon Credits Generated" count={carbonCreditsCount} />
        </BaseCol>
      </BaseRow>

      <BaseRow style={{ marginTop: '60px', textAlign: 'center' }}>
        <BaseCol>
          <Typography.Title level={3}>Key Features</Typography.Title>
        </BaseCol>
      </BaseRow>

      <BaseRow gutter={[60, 60]} style={{ marginTop: '40px' }}>
        <BaseCol xs={24} sm={12} md={6}>
          <Typography.Title level={4}>Farmer Profiles</Typography.Title>
          <Typography.Paragraph>
            Manage detailed farmer profiles, track training, and certifications.
          </Typography.Paragraph>
        </BaseCol>
        <BaseCol xs={24} sm={12} md={6}>
          <Typography.Title level={4}>Data Collection</Typography.Title>
          <Typography.Paragraph>Easy mobile-friendly data collection with offline support.</Typography.Paragraph>
        </BaseCol>
        <BaseCol xs={24} sm={12} md={6}>
          <Typography.Title level={4}>Real-Time Reporting</Typography.Title>
          <Typography.Paragraph>
            Provide live updates on biochar projects and carbon removal activities.
          </Typography.Paragraph>
        </BaseCol>
        <BaseCol xs={24} sm={12} md={6}>
          <Typography.Title level={4}>Verification and Audits</Typography.Title>
          <Typography.Paragraph>
            Automated verification and audit tools for consistent quality checks.
          </Typography.Paragraph>
        </BaseCol>
      </BaseRow>
      <MapCard />
      <References />
    </div>
  );

  const mobileAndTabletLayout = (
    <div style={{ padding: '20px' }}>
      <BaseRow justify="center" gutter={[20, 24]} style={{ textAlign: 'center' }}>
        <BaseCol xs={24}>
          <Typography.Title level={2}>Carbonnest</Typography.Title>
          <Typography.Paragraph>
            Streamline biochar project verification, reporting, and carbon credit tracking.
          </Typography.Paragraph>

          <div style={{ marginBottom: '20px' }}>
            {' '}
            {/* Add margin to create space */}
            <Button
              type="primary"
              style={{ borderRadius: '50px', padding: '0 40px' }}
              size="large"
              onClick={handleGetStarted}
            >
              Create Account
            </Button>
          </div>

          <Button type="primary" style={{ borderRadius: '50px', padding: '0 40px' }} size="large" onClick={showModal}>
            View Key Features
          </Button>
        </BaseCol>
      </BaseRow>

      <BaseRow gutter={[40, 40]} style={{ marginTop: '40px' }}>
        <BaseCol xs={24} sm={12}>
          <Balance title="Farmers Registered" count={farmersCount} />
        </BaseCol>
        <BaseCol xs={24} sm={12}>
          <Balance title="Live Projects" count={projectsCount} />
        </BaseCol>
        <BaseCol xs={24} sm={12}>
          <Balance title="Carbon Credits Generated" count={carbonCreditsCount} />
        </BaseCol>
      </BaseRow>

      <Modal title="Key Features" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {modalContent}
      </Modal>
    </div>
  );

  return (
    <>
      <PageTitle>Carbonnest</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
