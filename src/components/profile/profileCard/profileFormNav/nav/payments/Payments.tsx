import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { PaymentHistory } from './paymentHistory/PaymentHistory/PaymentHistory';
import { PaymentMethod } from './paymentMethod/PaymentMethod';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { useResponsive } from 'hooks/useResponsive';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { CarbonSequestered } from './paymentMethod/CarbonSequestered';
import { TotalEarningChart } from '@app/components/nft-dashboard/totalEarning/TotalEarningChart/TotalEarningChart';
import { Dates } from '@app/constants/Dates';
import { formatNumberWithCommas, getCurrencyPrice, getDifference } from '@app/utils/utils';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import * as S from './TotalEarning.styles';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';

export const Payments: React.FC = () => {
  const { isTablet } = useResponsive();
  const { t } = useTranslation();

  // Dummy data for total earnings in Zambian Kwacha (ZMW)
  const dummyTotalEarning = {
    total: 10587, // total earnings in ZMW
    prevTotal: 6000, // previous total for comparison in ZMW
    timeline: [
      { date: '2023-10-01', zmw_value: 2000 },
      { date: '2023-10-02', zmw_value: 3000 },
      { date: '2023-10-03', zmw_value: 1000 },
    ],
  };

  const [totalEarning, setTotalEarning] = useState(dummyTotalEarning);

  useEffect(() => {
    // Simulate API fetch with dummy data
    setTotalEarning(dummyTotalEarning);
  }, []);

  const { totalEarningData, days } = useMemo(
    () => ({
      totalEarningData: {
        data: totalEarning.timeline.map((item) => item.zmw_value),
      },
      days: totalEarning.timeline.map((item) => Dates.getDate(item.date).format('L')),
    }),
    [totalEarning],
  );

  const isIncreased = Number(totalEarning?.total) > Number(totalEarning?.prevTotal);

  const content = useMemo(
    () => (
      <BaseRow gutter={[16, 30]}>
        {' '}
        {/* Second row with TotalEarning */}
        {/* <BaseCol span={24}>
          <BaseCard>
            <BaseRow wrap={false} justify="space-between">
            <BaseForm.Title>{t('Total Earnings')}</BaseForm.Title>
              <BaseCol>
                <S.ValueText $color={isIncreased ? 'success' : 'error'}>
                  {isIncreased ? <CaretUpOutlined /> : <CaretDownOutlined />}{' '}
                  {totalEarning && getDifference(totalEarning.total, totalEarning.prevTotal)}
                </S.ValueText>
              </BaseCol>
            </BaseRow>
            <BaseCol span={24}>
              <BaseRow wrap={false} justify="space-between" gutter={[20, 20]}>
                <BaseCol>
                  <S.Text>
                    {getCurrencyPrice(formatNumberWithCommas(totalEarning.total), CurrencyTypeEnum.ZMW, true)}
                  </S.Text>
                </BaseCol>
                <BaseCol flex={1}>
                  <TotalEarningChart xAxisData={days} earningData={totalEarningData} />
                </BaseCol>
              </BaseRow>
            </BaseCol>
          </BaseCard>
        </BaseCol> */}
        {/* First row with PaymentMethod and CarbonSequestered */}
        <BaseCol span={24}>
          <BaseRow gutter={16} justify="space-between">
            <BaseCol span={12}>
              <PaymentMethod />
            </BaseCol>
            <BaseCol span={12}>
              <CarbonSequestered />
            </BaseCol>
          </BaseRow>
        </BaseCol>
        {/* Third row with PaymentHistory */}
        <BaseCol span={24}>
          <PaymentHistory />
        </BaseCol>
      </BaseRow>
    ),
    [t, totalEarning, totalEarningData, days, isIncreased],
  );

  return isTablet ? <BaseCard>{content}</BaseCard> : content;
};
