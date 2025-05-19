import React from 'react';
import { Button, ButtonProps, Chip } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const CustomChip: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: '#ccf0eb',
        fontWeight: 600,
        color: '#00B69B',
        borderRadius: '8px',
        height: 32,
      }}
    />
  );
};

export default CustomChip;
