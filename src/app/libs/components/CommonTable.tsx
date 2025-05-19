// components/CommonTable.tsx
'use client';

import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

export interface Column {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'center';
}

interface CommonTableProps<T> {
  columns: Column[];
  rows: T[];
  headColor: string
}

const CommonTable = <T extends Record<string, any>>({
  columns,
  rows,
  headColor
}: CommonTableProps<T>) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: `${headColor}` }}>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align || 'left'}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
