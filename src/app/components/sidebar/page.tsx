'use client';

import React, { JSX, useEffect, useTransition } from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Typography,
  Backdrop,
  CircularProgress,
  Divider,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {
  drawer,
  dashboardIcon,
  graphIcon,
  historyIcon,
  hospitalIcon,
  organizationIcon,
  powerIcon,
  setting2Icon,
  settingsIcon,
  profileIcon,
  logo
} from '../../svg/index';
import Image from 'next/image';
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const navItems = [
  { text: 'Dashboard', icon: dashboardIcon, link: '/dashboard' },
  { text: 'Resources', icon: organizationIcon, link: '/resources' },
  { text: 'Schedules', icon: hospitalIcon, link: '/' },
  { text: 'History', icon: historyIcon, link: '/' },
  { text: 'Users', icon: profileIcon, link: '/users' },
  { text: 'Settings', icon: settingsIcon, link: '/' },
  { text: 'Stats', icon: graphIcon, link: '/' },
  { text: 'OtherSettings', icon: setting2Icon, link: '/' },
  { text: 'Logout', icon: powerIcon, link: '/' },
];

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Set initial drawer state only after mount
  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleNavigation = (path: string) => {
    startTransition(() => {
      router.push(path);
    });
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
          <Image src={drawer} alt="logo" width={24} height={24} />
        </IconButton>
        </DrawerHeader>
        <IconButton
                sx={{
                  px: 2.5,
                }}
              >
          <Image src={logo} alt="logo" width={24} height={24} />
        </IconButton>
        <Divider />
        <List>
          {navItems.map(({ text, icon, link }) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => handleNavigation(link)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Image src={icon} alt={text} width={24} height={24} />
                </ListItemIcon>
                {open && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Backdrop open={isPending} sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
