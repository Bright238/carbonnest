import React from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import { TrendingCollections } from '@app/components/nft-dashboard/trending-collections/TrendingCollections';
import { RecentActivity } from '@app/components/nft-dashboard/recentActivity/RecentActivity';
import { Carousel } from 'antd'; // Import Carousel from Ant Design
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { TotalCarbonSequestered } from '@app/components/nft-dashboard/Balance/TotalCarbonSequestered';
import { TotalEarning } from '@app/components/nft-dashboard/totalEarning/TotalEarning';

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  const tips = [
    "Biochar can improve soil health and increase agricultural productivity.",
    "Using biochar in compost can enhance nutrient retention.",
    "Incorporate biochar into your land management practices to sequester carbon effectively.",
    "Research local regulations on biochar use to maximize its benefits in your area.",
    "Consider partnering with agricultural organizations to promote biochar adoption."
  ];

  const renderUserTipsCarousel = () => (
    <S.ScrollWrapper id="user-tips">
      <h3>User Tips for Biochar</h3>
      <Carousel autoplay>
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
        {renderUserTipsCarousel()}
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
      <BaseCol span={24}>
      </BaseCol>
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