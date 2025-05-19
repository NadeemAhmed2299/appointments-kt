// components/BasicLineChart.tsx

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

interface BasicLineChartProps {
  xLabels: string[];
  dataPoints: number[];
}

const BasicLineChart: React.FC<BasicLineChartProps> = ({ xLabels, dataPoints }) => {
  return (
    <LineChart
  xAxis={[{ scaleType: 'point', data: xLabels }]} // <-- Fix added here
  series={[
    {
      data: dataPoints,
      color: "#7F56D9",
    },
  ]}
  height={300}
  sx={{
    '& .MuiChartsLineElement-root': { strokeWidth: 2 },
    '& .MuiChartsMarkElement-root': { r: 4, fill: '#7F56D9' },
  }}
/>

  );
};

export default BasicLineChart;
