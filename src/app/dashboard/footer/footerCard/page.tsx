'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import { ReactNode } from 'react';

type DashboardCardProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

const DashboardFooterCard = ({ icon, label, onClick }: DashboardCardProps) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: '12px', 
        boxShadow: 'none',
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Box sx={{ mb: 2, fontSize: 40 }}>{icon}</Box>
        <Typography variant="subtitle1" fontWeight={500}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardFooterCard;
