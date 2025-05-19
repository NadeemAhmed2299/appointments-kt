"use client"

import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import MetricCard from '../libs/components/MetricCard';

import {
  cube, people, graph
} from '../svg/index';
import CustomButton from '../libs/button';
import SatisfactoryCard from '../libs/components/SatisfactoryCard';
import AiPoweredCard from '../libs/components/AiPoweredCard';
import AbsenceReasonsChart from '../libs/components/PieChart';
import CaseBarChart from '../libs/components/BarChart';
import InfoCard from '../libs/components/InfoCard';
import CommonTable, { Column } from '../libs/components/CommonTable';
import BasicLineChart from '../libs/components/LineGraph';

const metrics = [
  { title: 'Total Appointments', value: '1,256', change: '+4.2%', up: true },
  { title: 'Automation Rate', value: '94.3%', change: '+7.5%', up: true },
  { title: 'Capacity Utilization', value: '83.7%', change: '+2.1%', up: true },
  { title: 'No show Rate', value: '7.3%', change: '-0.5%', up: false },
  { title: 'Staff Time Saved', value: '72.5 hrs', change: '+12.3%', up: true },
  { title: 'Patient Satisfaction', value: '4.7/5', change: '+0.3%', up: true },
];

const WaitListManagement = [
  { title: 'Current', value: '37' },
  { title: 'Avg. Wait', value: '3.2 d' },
  { title: 'Conversion', value: '82%' }
];

const LoadStats = [
  { title: 'Avg. Load', value: '12.3' },
  { title: 'Utilization', value: '91%' },
  { title: 'Issues', value: '3' }
];

const caseDataset = [
  { category: 'Complex medical', cases: 26 },
  { category: 'Multi-provider', cases: 19 },
  { category: 'Insurance', cases: 15 },
  { category: 'Equipment', cases: 10 },
  { category: 'Other', cases: 2 },
];

const satisfactionRatings = [
  { label: 'Provider Satisfaction', value: '3.85', change: '0.35' },
  { label: 'Nurse Satisfaction', value: '4.15', change: '0.45' },
  { label: 'Admin Satisfaction', value: '4.25', change: '0.31' },
  { label: 'Avg Wait Time', value: '12 min', change: '3 min', danger: true },
];

const satisfactionRatingsGreen = [
  { label: 'App Engagement', value: '76%', change: '(4%)' },
  { label: 'Digital Check-in', value: '83%', change: '(7%)' },
]

const cardData = [
  {
    icon: people,
    title: 'Provider Workload Optimization',
    description:
      'Dr. Roberts is consistently overbooked (95% capacity). Redistribute 3 appointments per day to Dr. Patel to balance workload and improve satisfaction.',
    onApply: () => console.log('Apply Provider Optimization'),
    onDetails: () => console.log('Details Provider Optimization'),
  },
  {
    icon: cube,
    title: 'No-Show Rate Reduction',
    description:
      'Patients with afternoon appointments have a 12% no-show rate. Implement targeted reminder system with transportation options for these patients.',
    onApply: () => console.log('Apply No-Show Reduction'),
    onDetails: () => console.log('Details No-Show Reduction'),
  },
  {
    icon: graph,
    title: 'Waitlist Optimization',
    description:
      '3 predicted cancellations tomorrow for chemotherapy appointments. Contact waitlisted patients with 89% probability of acceptance (patients identified).',
    onApply: () => console.log('Apply Waitlist Optimization'),
    onDetails: () => console.log('Details Waitlist Optimization'),
  },
];

const absenceReasons = [
  {
    label: 'Personal conflicts',
    value: 98,
    color: '#8280FF',
    autoResolved: '93.9%',
  },
  {
    label: 'Transportation',
    value: 42,
    color: '#7F56D9',
    autoResolved: '90.5%',
  },
  {
    label: 'Treatment effects',
    value: 31,
    color: '#4AD991',
    autoResolved: '87.1%',
  },
  {
    label: 'Other',
    value: 16,
    color: '#FECB50',
    autoResolved: '56.3%',
  },
];

const waitListColumns: Column[] = [
  { id: 'treatment', label: 'Treatment' },
  { id: 'count', label: 'Count' },
  { id: 'nextAvailable', label: 'Next Available' },
];

const waitListTreatmentData = [
  { treatment: 'Chemotherapy', count: '18', nextAvailable: 'April 26' },
  { treatment: 'Radiation', count: '09', nextAvailable: 'April 28' },
];

const schedulingColumns: Column[] = [
  { id: 'provider', label: 'Provider' },
  { id: 'load', label: 'Load' },
  {
    id: 'status',
    label: 'Status',
  },
];

const providerData = [
  { provider: 'Dr. Roberts', load: '95%', status: 'Overbooked' },
  { provider: 'Dr. Chen', load: '87%', status: 'Optimal' },
];

const xLabelsEfficiencyTrends = [
  'Nov (73%)',
  'Dec (76%)',
  'Jan (79%)',
  'Feb (83%)',
  'Mar (88%)',
  'Apr (92%)',
  'May (94%)',
];

const dataPointsEfficiencyTrends = [5, 20, 35, 55, 70, 83, 87];

const valueFormatter = (item: { value: number }) => `${item.value}`;

const laborCostData = [
  { label: 'Labor Cost Savings', value: '$3,260/mo', change: '' },
  { label: 'Increased Capacity', value: '+8.5%', change: '' }
];

const annualProjectionData = [
  {
    label: 'Annual Projection',
    value: '$39,120 staff savings',
    change: '$142,000 additional revenue',
  },
];

function page() {
  return (
    <>
      {/* heading section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          alignItems: {
            xs: 'flex-start',
            sm: 'center'
          },
          gap: 1.5
        }}
      >
        <Typography variant="h1">Dashboard</Typography>
        <CustomButton
          variant="outlined"
          label="Add Widget"
          size="small"
          sx={{ backgroundColor: '#fff', color: '#7F56D9', border: '1px solid #7F56D9' }}
        />
      </Box>

      {/* Metrics Cards */}
      <Grid container spacing={2} mb={2}>
        {metrics.map((metric, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 2, md: 6 }} key={index}>
            <MetricCard
              title={metric.title}
              value={metric.value}
              change={metric.change}
              up={metric.up}
              highlight={index === 0}
            />
          </Grid>
        ))}
      </Grid>

      {/* Graph and Satisfaction Section */}
      <Grid container spacing={2} mb={2} sx={{ width: '100%' }}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none' }} >
            <CardContent>
              <Typography variant="h3" color='primary.main' fontWeight={700} mb={3}>Manual Interventions (72 total)</Typography>
              <CaseBarChart data={caseDataset} barColor="#7F56D9" />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none' }} >
            <CardContent>
              <Typography variant="h3" color='primary.main' fontWeight={700} mb={3}>Satisfaction Ratings</Typography>
              <SatisfactoryCard satisfactionRatings={satisfactionRatings} gridValue={3} bgColor='#7F56D91A' />
              <SatisfactoryCard satisfactionRatings={satisfactionRatingsGreen} gridValue={6} bgColor='#00b69b1a' greenContent={true} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ai-powered recommnedation */}
      <Grid container spacing={2} mb={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none' }} >
            <CardContent>
              <Typography variant="h3" color='primary.main' fontWeight={700} mb={3}>Al-Powered Recommendations</Typography>
              <Grid container spacing={3}>
                {cardData.map((card, index) => (
                  <Grid key={index} size={{ xs: 12, md: 4 }}>
                    <AiPoweredCard
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      onApply={card.onApply}
                      onDetails={card.onDetails}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* patient info */}
      <Grid container spacing={2} mb={2} sx={{ width: '100%' }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h3" color='primary.main' fontWeight={700} mb={3}>Patient-Initiated Changes</Typography>
              <AbsenceReasonsChart absenceReasons={absenceReasons} valueFormatter={valueFormatter} />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h3" color='primary.main' fontWeight={700} mb={3}>Waitlist Management</Typography>
              <Grid container spacing={2} sx={{ paddingBottom: '20px' }}>
                {WaitListManagement.map((listVal, index) => {
                  return (
                    <Grid size={{ xs: 12, md: 12, lg: 4 }} key={index}>
                      <InfoCard
                        title={listVal.title}
                        value={listVal.value}
                        color={Number(listVal.value) < 5 ? 'error.main' : 'primary.main'}
                        borderColor={Number(listVal.value) < 5 ? 'error.main' : '#D5D5D5'}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <CommonTable columns={waitListColumns} rows={waitListTreatmentData} headColor="#F1F4F9" />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h3" color='primary.main' fontWeight={700} mb={3}>Provider Scheduling</Typography>
              <Grid container spacing={2} sx={{ paddingBottom: '20px' }}>
                {LoadStats.map((listVal, index) => {
                  return (
                    <Grid size={{ xs: 12, md: 12, lg: 4 }} key={index}>
                      <InfoCard
                        title={listVal.title}
                        value={listVal.value}
                        color={Number(listVal.value) < 5 ? 'error.main' : 'primary.main'}
                        borderColor={Number(listVal.value) < 5 ? '#FF0000' : '#D5D5D5'}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <CommonTable columns={schedulingColumns} rows={providerData} headColor="#F1F4F9" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* automated trend and satisfactory rating */}
      <Grid container spacing={2} mb={2} sx={{ width: '100%' }}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none' }} >
            <CardContent>
              <BasicLineChart xLabels={xLabelsEfficiencyTrends} dataPoints={dataPointsEfficiencyTrends} />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none' }} >
            <CardContent>
              <Typography variant="h3" color='primary.main' fontWeight={700} mb={3}>Satisfaction Ratings</Typography>
              <SatisfactoryCard
                satisfactionRatings={laborCostData}
                gridValue={6}
                bgColor="#f4edfa"
                headingFontSize={12}
                subHeadingFontSize={14}
              />
              <SatisfactoryCard
                satisfactionRatings={annualProjectionData}
                gridValue={12}
                bgColor="#e6f6f4"
                greenContent= {true}
                headingFontSize={20}
                subHeadingFontSize={18}
                isAnnualProjectionData = {true}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </>
  )
}

export default page
