'use client';

import { Grid } from '@mui/material';
import DashboardFooterCard from './footerCard/page';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import {manageResources, manageServices, manageUsers} from "../../svg/index";

export default function DashboardFooter() {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{ py: 4, px: 0 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardFooterCard
          icon={manageResources}
          label="Manage Resources"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardFooterCard
          icon={manageServices}
          label="Manage Services"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardFooterCard
          icon={manageUsers}
          label="Manage Users"
        />
      </Grid>
    </Grid>
  );
}
