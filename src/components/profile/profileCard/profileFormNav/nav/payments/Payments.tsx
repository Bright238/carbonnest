import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PaymentHistory } from './paymentHistory/PaymentHistory/PaymentHistory';
import { PaymentMethod } from './paymentMethod/PaymentMethod';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { useResponsive } from 'hooks/useResponsive';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { CarbonSequestered } from './paymentMethod/CarbonSequestered';
import { Dates } from '@app/constants/Dates';

export const Payments: React.FC = () => {
  const { isDesktop, isTablet } = useResponsive();  // Hook to check device type
  const { t } = useTranslation();

  // Dummy data for total earnings (Zambian Kwacha)
  const dummyTotalEarning = {
    total: 10587,
    prevTotal: 6000,
    timeline: [
      { date: '2023-10-01', zmw_value: 2000 },
      { date: '2023-10-02', zmw_value: 3000 },
      { date: '2023-10-03', zmw_value: 1000 },
    ],
  };

  const [totalEarning, setTotalEarning] = useState(dummyTotalEarning);

  useEffect(() => {
    setTotalEarning(dummyTotalEarning);  // Simulate data fetch
  }, []);

  const { totalEarningData, days } = useMemo(() => ({
    totalEarningData: {
      data: totalEarning.timeline.map((item) => item.zmw_value),
    },
    days: totalEarning.timeline.map((item) => Dates.getDate(item.date).format('L')),
  }), [totalEarning]);

  
  // Define the layout content with mobile responsiveness
  const content = useMemo(() => (
    <BaseRow gutter={[16, 30]}>
      <BaseCol span={24}>
        <BaseRow gutter={16} justify="space-between">
          {/* On desktop, display side-by-side (span={12}). On mobile/tablet, stack vertically (span={24}) */}
          <BaseCol span={isDesktop || isTablet ? 12 : 24}>
            <PaymentMethod />
          </BaseCol>
          <BaseCol span={isDesktop || isTablet ? 12 : 24}>
            <CarbonSequestered />
          </BaseCol>
        </BaseRow>
      </BaseCol>
      {/* Third row with PaymentHistory */}
      <BaseCol span={24}>
        <PaymentHistory />
      </BaseCol>
    </BaseRow>
  ), [isDesktop, isTablet, t, totalEarning, totalEarningData, days]);

  // Return the content, wrapping it in BaseCard for mobile/tablet views
  return isDesktop || isTablet ? content : <BaseCard>{content}</BaseCard>;
};
