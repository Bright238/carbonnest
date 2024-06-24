import React, { useEffect, useState } from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import { Balance } from '@app/components/nft-dashboard/Balance/Balance';
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { VisitorsPieChart } from '@app/components/charts/VisitorsPieChart';
import Typography from 'antd/lib/typography/Typography';
import { Spin } from 'antd';
import axios from 'axios';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  location: string;
}

const MedicalDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  const [user, setUser] = useState<User | null>(null);
  const [vcasCount, setVCAsCount] = useState(0);
  const [householdCount, setHouseholdCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [districtLoading, setDistrictLoading] = useState(true);

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
        setDistrictLoading(true);
        const response = await axios.get(
          `https://server.achieve-dqa.bluecodeltd.com/household/households-count/${user.location}`
        );
        setHouseholdCount(response.data.count);
      } catch (error) {
        console.error('Error fetching household count data:', error);
      } finally {
        setDistrictLoading(false); 
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://server.achieve-dqa.bluecodeltd.com/child/vcas-count/${user && user.location}`
        );
        setVCAsCount(response.data.count);
      } catch (error) {
        console.error('Error fetching VCAs data:', error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://server.achieve-dqa.bluecodeltd.com/household/members-count/${user && user.location}`
        );
        setMembersCount(response.data.count);
      } catch (error) {
        console.error('Error fetching household members data:', error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const desktopLayout = (
    <BaseRow justify="center" style={{marginTop: "3%"}}>
      <S.LeftSideCol xxl={16} id="desktop-content">
        <BaseRow gutter={[60, 60]}>
          <BaseCol span={6}>
            <br />
            <br />
            <Typography style={{ fontSize: "35px", textAlign: "center", fontWeight: "bold" }}>
              {districtLoading ? <Spin size="small" /> : `${user?.location}`} District
            </Typography>
          </BaseCol>
          <BaseCol span={6}>
            <div id="balance">
              <Balance title="Households" count={householdCount} />
            </div>
          </BaseCol>
          <BaseCol span={6}>
            <div id="balance">
              <Balance title="VCAs" count={vcasCount} />
            </div>
          </BaseCol>
          <BaseCol span={6}>
            <div id="balance">
              <Balance title="Household Members" count={membersCount} />
            </div>
          </BaseCol>
          <BaseCol span={24}>
            <VisitorsPieChart />
          </BaseCol>
        </BaseRow>
        <References />
      </S.LeftSideCol>
    </BaseRow>
  );

  const mobileAndTabletLayout = (
    <BaseRow gutter={[20, 24]}>
      <BaseRow gutter={[60, 60]}>
        <BaseCol xs={24} sm={12} md={8} lg={6} xl={6}>
          <br />
          <Typography style={{ fontSize: "35px", textAlign: "center", fontWeight: "bold" }}>
            {districtLoading ? <Spin size="small" /> : `${user?.location}`} District
          </Typography>
        </BaseCol>
        <BaseCol xs={24} sm={12} md={8} lg={6} xl={6}>
          <div id="balance">
            <Balance title="Households" count={householdCount} />
          </div>
        </BaseCol>
        <BaseCol xs={24} sm={12} md={8} lg={6} xl={6}>
          <div id="balance">
            <Balance title="VCAs" count={vcasCount} />
          </div>
        </BaseCol>
        <BaseCol xs={24} sm={12} md={8} lg={6} xl={6}>
          <div id="balance">
            <Balance title="Household Members" count={membersCount} />
          </div>
        </BaseCol>
        <BaseCol span={24}>
          <VisitorsPieChart />
        </BaseCol>
      </BaseRow>
    </BaseRow>
  );

  return (
    <>
      <PageTitle>ACHIEVE PMP</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
