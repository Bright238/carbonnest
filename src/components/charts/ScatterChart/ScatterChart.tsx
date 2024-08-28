import React from 'react';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseChart } from 'components/common/charts/BaseChart';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';

const data = [
  [170.0, 59.0],
  [159.1, 47.6],
  [166.0, 69.8],
  [176.2, 66.8],
  [160.2, 75.2],
  [172.5, 55.2],
  [170.9, 54.2],
  [172.9, 62.5],
  [153.4, 42.0],
  [160.0, 50.0],
  [147.2, 49.8],
  [168.2, 49.2],
  [175.0, 73.2],
  [157.0, 47.8],
  [167.6, 68.8],
  [159.5, 50.6],
  [175.0, 82.5],
  [166.8, 57.2],
  [176.5, 87.8],
  [170.2, 72.8],
  [174.0, 54.5],
  [173.0, 59.8],
  [179.9, 67.3],
  [170.5, 67.8],
  [160.0, 47.0],
];

const markLineOpt = {
  animation: false,
  lineStyle: {
    width: 0,
  },
  data: [
    [
      {
        coord: [0, 3],
        symbol: 'none',
      },
      {
        coord: [20, 13],
        symbol: 'none',
      },
    ],
  ],
};

const defaultOption = {
  grid: {
    top: 10,
    right: 30,
    bottom: 0,
    left: 15,
    containLabel: true,
  },
  tooltip: {
    showDelay: 0,
    // eslint-disable-next-line
    formatter: (params: any) =>
      params.value.length > 1 ? `${params.value[0]}cm ${params.value[1]}kg ` : `${params.name}: ${params.value} 'kg `,
    axisPointer: {
      show: true,
      type: 'cross',
      lineStyle: {
        type: 'dashed',
        width: 1,
      },
    },
  },
  xAxis: {
    gridIndex: 0,
    min: 140,
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value} kg',
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    gridIndex: 0,
    min: 40,
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value} cm',
    },
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      type: 'scatter',
      xAxisIndex: 0,
      yAxisIndex: 0,
      data: data,
      markLine: markLineOpt,
    },
  ],
};

export const ScatterChart: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ position: 'relative' }}>
    <BaseCard padding="0 0 30rem" title={t('Total score')}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <Typography style={{ fontWeight: 'bold', fontSize: '32px' }}>97.50%</Typography>
          <Typography style={{ fontWeight: 'bold' }}>Date of Assessment</Typography>
          <Typography style={{ fontWeight: 'bold' }}>12/06/2024</Typography>
        </div>
      </BaseCard>
      </div>
  );
};
