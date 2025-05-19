'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';

type DashboardCardProps = {
  icon: string;
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
        <Box sx={{ mb: 2, fontSize: 40 }}>
          <Image src={icon} alt="footer Icon" />
        </Box>
        <Typography variant="subtitle1" fontWeight={500}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardFooterCard;
