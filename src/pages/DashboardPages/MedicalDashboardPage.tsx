import React, { useState } from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import { TrendingCollections } from '@app/components/nft-dashboard/trending-collections/TrendingCollections';
import { RecentActivity } from '@app/components/nft-dashboard/recentActivity/RecentActivity';
import { Carousel, Select } from 'antd'; // Import Select from Ant Design
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSDGs, setSelectedSDGs] = useState<string[]>([]);

  const tips = [
    'What is Biochar? Biochar is a stable form of charcoal created through pyrolysis, acting as a long-term carbon sink in soil.',
    'Biochar improves soil health and boosts agricultural productivity.',
    'Adding biochar to compost enhances nutrient retention.',
    'Incorporate biochar into land management for effective carbon sequestration.',
    'Research local regulations to maximize biochar benefits.',
    'Partner with agricultural organizations to promote biochar adoption.',
  ];  

  // Categories and UN SDGs affecting Zambia
  const categories = [
    'Biochar',
    'Forestry',
    'Industrial Processing',
    'Renewable Energy',
  ];

  const sdgs = [
    'No poverty',
    'Zero hunger',
    'Good health and well-being',
    'Quality education',
    'Affordable and clean energy',
    'Industry, innovation, and infrastructure',
    'Sustainable cities and communities',
    'Responsible consumption and production',
    'Climate action',
  ];

  const handleCategoryChange = (value: string[]) => {
    setSelectedCategories(value);
  };

  const handleSDGChange = (value: string[]) => {
    setSelectedSDGs(value);
  };

  const renderUserTipsCarousel = () => (
    <S.ScrollWrapper id="user-tips">
      <h3>User Tips for Biochar</h3>
      <Carousel autoplay autoplaySpeed={7000}>
        {tips.map((tip, index) => (
          <div key={index} style={{ padding: '20px', textAlign: 'center' }}>
            <p>{tip}</p>
          </div>
        ))}
      </Carousel>
    </S.ScrollWrapper>
  );  

  const desktopLayout = (
    <BaseRow>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
        <BaseRow gutter={[60, 60]}>
          <BaseCol span={24}>
            <br />
            <br />
            <TrendingCollections />
          </BaseCol>
          <BaseCol span={24}>
            <RecentActivity />
          </BaseCol>
        </BaseRow>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        {/* Render Tips */}
        {renderUserTipsCarousel()}

        {/* Filters Title */}
        <h4 style={{ margin: '20px 0', fontWeight: 'bold' }}>Filters</h4>

        {/* Dropdown Filters */}
        <div style={{ margin: '20px 0' }}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Select Categories"
            value={selectedCategories}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </div>

        <div style={{ margin: '20px 0' }}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Select UN SDGs"
            value={selectedSDGs}
            onChange={handleSDGChange}
          >
            {sdgs.map((sdg) => (
              <Select.Option key={sdg} value={sdg}>
                {sdg}
              </Select.Option>
            ))}
          </Select>
        </div>
      </S.RightSideCol>
    </BaseRow>
  );

  const mobileAndTabletLayout = (
    <BaseRow gutter={[20, 24]}>
      <BaseCol span={24}>
        <br />
        <br />
        <TrendingCollections />
      </BaseCol>
      <BaseCol span={24}>
        <RecentActivity />
      </BaseCol>
      <BaseCol span={24}></BaseCol>
    </BaseRow>
  );

  return (
    <>
      <PageTitle>Carbonnest</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
