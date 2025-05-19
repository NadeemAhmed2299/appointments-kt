'use client';

import { Grid } from '@mui/material';
import DashboardFooterCard from './footerCard/page';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';

export default function DashboardFooter() {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{ py: 4, px: 0 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardFooterCard
          icon={<MedicalServicesIcon fontSize="inherit" />}
          label="Manage Resources"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardFooterCard
          icon={<AdminPanelSettingsIcon fontSize="inherit" />}
          label="Manage Services"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardFooterCard
          icon={<PersonIcon fontSize="inherit" />}
          label="Manage Users"
        />
      </Grid>
    </Grid>
  );
}
