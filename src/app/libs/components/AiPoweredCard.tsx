'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack
} from '@mui/material';
import Image from 'next/image';
import CustomButton from '../button';

interface OptimizationCardProps {
  icon: any;
  title: string;
  description: string;
  onApply: () => void;
  onDetails: () => void;
  iconBgColor?: string;
}

const AiPoweredCard: React.FC<OptimizationCardProps> = ({
  icon,
  title,
  description,
  onApply,
  onDetails
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        minHeight: 220,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 2,
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Image src={icon} alt="image-icon" width={60} height={60} />
        <Typography fontWeight={600} color="text.primary">{title}</Typography>
      </Box>

      <CardContent sx={{ pl: 0 }}>
        <Typography fontSize={14} color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <Stack direction="row" spacing={2} mt="auto">
        <CustomButton
          variant="outlined"
          label="Details"
          size="small"
          sx={{ backgroundColor: '#fff', color: '#7F56D9', border: '1px solid #7F56D9' }}
          onClick={onDetails}
        />
        <CustomButton
          variant="contained"
          label="Apply"
          size="small"
          sx={{ backgroundColor: '#7F56D9', color: '#fff' }}
          onClick={onApply}
        />
      </Stack>
    </Card>
  );
};

export default AiPoweredCard;
