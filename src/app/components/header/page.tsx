'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  alpha,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CustomChip from '@/app/libs/Chip';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[200], 0.9),
  marginRight: theme.spacing(2),
  width: '100%',
  maxWidth: 300,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  paddingRight: theme.spacing(2),
  height: 40,
}));

export default function HeaderAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Box
        p={0}
        sx={{
          '@media (min-width:768px)': {
            px: '2em',
          },
        }}
      >
        <AppBar position="static" elevation={0} color="inherit" >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {isMobile ? (
              <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Search sx={{ backgroundColor: '#fff', border: '1px solid #D0D5DD' }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            )}

            <Box display="flex" alignItems="center" gap={2}>
              {!isMobile && (
                <>
                  <IconButton>
                    <NotificationsNoneIcon />
                  </IconButton>

                  <CustomChip label='Facility' />
                </>
              )}

              <Box display="flex" alignItems="center" onClick={handleMenuOpen} sx={{ cursor: 'pointer' }}>
                <Avatar sx={{ width: 36, height: 36, marginRight: 1 }} />
                {!isMobile && (
                  <Box textAlign="left">
                    <Typography fontSize={14} fontWeight={500}>John Martin</Typography>
                    <Typography fontSize={12} color="text.secondary">System Admin</Typography>
                  </Box>
                )}
                <ExpandMoreIcon fontSize="small" />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              <ListItem>
                <Search sx={{ width: '100%' }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
                </Search>
              </ListItem>
              <ListItem>
                <ListItemText primary="Notifications" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Facility" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
