'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  up: boolean;
  highlight: boolean,
  borderLeftColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, up, borderLeftColor, highlight }) => {
  return (
    <Card sx={{ borderRadius: '12px', borderLeft: borderLeftColor ? `3px solid ${borderLeftColor}` : undefined, boxShadow: 'none' }}>
      <CardContent>
        <Typography variant="h5" color="secondary.main">{title}</Typography>
        <Typography variant="h2" color="primary.main" fontWeight="700">{value}</Typography>
        <Box display="flex" alignItems="center" mt={0.5}>
          {up ? (
            <ArrowUpwardIcon fontSize="small" color="success" />
          ) : (
            <ArrowDownwardIcon fontSize="small" color="error" />
          )}
          <Typography
            variant="caption"
            color={up ? 'success.main' : 'error.main'}
            ml={0.5}
          >
            {change}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricCard;