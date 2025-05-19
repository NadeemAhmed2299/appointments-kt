'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface InfoCardProps {
  title: string;
  value: string;
  color?: string;
  borderColor?: string
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, color="primary.main", borderColor }) => {
  return (
    <Card sx={{ border:`1px solid ${borderColor}`, boxShadow: 'none'}}>
      <CardContent>
        <Typography variant="h5" color={color} fontWeight="700" sx={{ textAlign: 'center'}}>{title}</Typography>
        <Typography variant="h2" color={color} fontWeight="700" sx={{ textAlign: 'center'}}>{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;