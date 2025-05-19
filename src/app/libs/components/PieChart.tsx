'use client';

import * as React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

interface AbsenceReason {
  label: string;
  value: number;
  color: string;
  autoResolved: string;
}

interface AbsenceReasonsChartProps {
  absenceReasons: AbsenceReason[];
  valueFormatter: (item: { value: number }) => string;
}

export default function AbsenceReasonsChart({
  absenceReasons,
  valueFormatter,
}: AbsenceReasonsChartProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start',
        flexWrap: 'wrap',
        '@media (min-width:1600px)': {
          flexWrap: 'nowrap',
        },
      }}
    >
      <PieChart
        width={180}
        height={180}
        series={[
          {
            data: absenceReasons.map((item) => ({
              ...item,
              id: item.label,
              color: item.color,
            })),
            innerRadius: 30,
            outerRadius: 80,
            arcLabelMinAngle: 10,
            valueFormatter,
          },
        ]}
        hideLegend={true}
      />
      <Stack>
        <Box>
          {absenceReasons.map((item) => (
            <Stack
              key={item.label}
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: item.color,
                }}
              />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {item.label} ({item.value})
                </Typography>
                <Typography variant="body2">
                  Auto-resolved: {item.autoResolved}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
