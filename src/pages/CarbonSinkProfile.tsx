import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from './DashboardPage.styles';
import { TotalCarbonSequestered } from '@app/components/nft-dashboard/Balance/TotalCarbonSequestered';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { TotalEarning } from '@app/components/nft-dashboard/totalEarning/TotalEarning';
import { Typography } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import { PaymentHistory } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/PaymentHistory/PaymentHistory';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import TreeTable from '@app/components/tables/TreeTable/TreeTable';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';

const CarbonSinkProfile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <BaseCard>
        <PageTitle>{t('My Carbon Sink Profile')}</PageTitle>
        <BaseRow gutter={[60, 60]} style={{ marginTop: '20px' }}>
          {' '}
          <BaseForm.Title>{t('My Carbon Sink Profile')}</BaseForm.Title>
          <BaseCol xs={24} md={24}>
            <TotalCarbonSequestered />
          </BaseCol>
          <BaseCol xs={24} md={24}>
            <TotalEarning />
          </BaseCol>
        </BaseRow>
      </BaseCard>
    </>
  );
};

export default CarbonSinkProfile;
