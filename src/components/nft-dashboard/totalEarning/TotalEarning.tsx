import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { NFTCard } from '@app/components/nft-dashboard/common/NFTCard/NFTCard';
import { TotalEarningChart } from '@app/components/nft-dashboard/totalEarning/TotalEarningChart/TotalEarningChart';
import { Dates } from '@app/constants/Dates';
import { formatNumberWithCommas, getCurrencyPrice, getDifference } from '@app/utils/utils';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import * as S from './TotalEarning.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const TotalEarning: React.FC = () => {
  const { t } = useTranslation();

  // Dummy total earnings data in Zambian Kwacha (ZMW)
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

  return (
    <>
      <BaseRow wrap={false} justify="space-between">
        <BaseCol>
          <S.ValueText $color={isIncreased ? 'success' : 'error'}>
            {isIncreased ? <CaretUpOutlined /> : <CaretDownOutlined />}{' '}
            {totalEarning && getDifference(totalEarning.total, totalEarning.prevTotal)}
          </S.ValueText>
        </BaseCol>
      </BaseRow>

      <BaseCol span={24}>
        <BaseCol>
          <S.Text>
            {getCurrencyPrice(formatNumberWithCommas(totalEarning.total), CurrencyTypeEnum.ZMW, true)}
          </S.Text>
        </BaseCol>

        <BaseCol flex={1}>
          <TotalEarningChart xAxisData={days} earningData={totalEarningData} />
        </BaseCol>

      </BaseCol>
    </>

  );
};
