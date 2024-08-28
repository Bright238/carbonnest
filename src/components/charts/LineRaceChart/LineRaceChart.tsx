import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseChart } from '@app/components/common/charts/BaseChart';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { themeObject } from '@app/styles/themes/themeVariables';

export const LineRaceChart: React.FC = () => {
  const { t } = useTranslation();
  const theme = useAppSelector((state) => state.theme.theme);

  // Hardcoded data for January to August
  const data = [
    { month: 'January', caregiverServices: 100, vcaServices: 120, householdServices: 150, referrals: 200, casePlans: 250 },
    { month: 'February', caregiverServices: 150, vcaServices: 180, householdServices: 200, referrals: 250, casePlans: 300 },
    { month: 'March', caregiverServices: 200, vcaServices: 220, householdServices: 250, referrals: 300, casePlans: 350 },
    { month: 'April', caregiverServices: 250, vcaServices: 270, householdServices: 300, referrals: 350, casePlans: 400 },
    { month: 'May', caregiverServices: 300, vcaServices: 320, householdServices: 350, referrals: 400, casePlans: 450 },
    { month: 'June', caregiverServices: 350, vcaServices: 370, householdServices: 400, referrals: 450, casePlans: 500 },
    { month: 'July', caregiverServices: 400, vcaServices: 420, householdServices: 450, referrals: 500, casePlans: 550 },
    { month: 'August', caregiverServices: 450, vcaServices: 470, householdServices: 500, referrals: 550, casePlans: 600 },
  ];

  // List of services with their keys matching the data properties
  const services = ['caregiverServices', 'vcaServices', 'householdServices', 'referrals', 'casePlans'];

  const series = services.map((service) => ({
    type: 'bar',
    name: t(`${service}`), // Use translation for service names
    data: data.map((entry) => ({
      value: [entry.month, entry[service]],
      name: entry.month,
    })),
    showSymbol: false,
    // Remove smooth to make lines straight
    endLabel: {
      show: true,
      formatter: (params) => `${params.value[1]}`, // Display the value at the end of the line
      color: themeObject[theme].textMain,
    },
    labelLayout: {
      moveOverlap: 'shiftY',
    },
    emphasis: {
      focus: 'series',
    },
    encode: {
      x: 'Month',
      y: 'Value',
      label: ['Service', 'Value'],
      itemName: 'Month',
      tooltip: ['Value'],
    },
  }));

  const option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: data,
      },
    ],
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: data.map((entry) => entry.month),
      axisLabel: {
        rotate: 45,
        color: themeObject[theme].textMain,
        fontSize: 12,
      },
    },
    yAxis: {
      axisLabel: {
        color: themeObject[theme].textMain,
        fontSize: 12,
      },
    },
    grid: {
      left: 50,
      right: 50,
      top: 20,
      bottom: 30,
    },
    series: series,
  };

  return (
    <BaseCard padding="0 0 1.875rem" title={t('Services provided into months')}>
      <BaseChart option={option} height="24rem" />
    </BaseCard>
  );
};
