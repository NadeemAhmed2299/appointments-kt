// components/CaseBarChart.tsx
'use client';

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

interface CaseData {
  category: string;
  cases: number;
  [key: string]: string | number;
}

interface CaseBarChartProps {
  data: CaseData[];
  barColor: string
}

export default function CaseBarChart({ data, barColor }: CaseBarChartProps) {
  return (
    <BarChart
      dataset={data}
      borderRadius={20}
      xAxis={[
        {
          dataKey: 'category',
          scaleType: 'band',
          tickLabelPlacement: 'middle',
        },
      ]}
      series={[
        {
          dataKey: 'cases',
          label: 'Cases',
          color: barColor,
          valueFormatter: (v) => `${v} cases`,
        },
      ]}
      yAxis={[{ max: 30 }]}
      height={300}
      sx={{
        '.MuiChartsBar-root': {
          rx: 10,
        },
        '.MuiChartsLegend-root': {
          display: 'none',
        },
      }}
    />
  );
}
