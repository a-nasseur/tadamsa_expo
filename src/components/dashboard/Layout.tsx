import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

import Logo from '../../../public/logos/logo_black.svg';
import Link from 'next/link';

import { auth } from '../../../config/firebase';

const sideBarMenu = [
  {
    id: 1,
    title: 'Console',
    link: '/dashboard',
    icon: <DashboardIcon color='inherit' />
  },
  {
    id: 2,
    title: 'Générale',
    link: '/dashboard/general',
    icon: <FeedIcon color='inherit' />
  },
  {
    id: 3,
    title: 'Articles',
    link: '/dashboard/articles',
    icon: <NewspaperIcon color='inherit' />
  },
  {
    id: 4,
    title: 'Évènement',
    link: '/dashboard/events',
    icon: <EventIcon color='inherit' />
  },
]

const sideBarSettingsMenu = [
  {
    id: 1,
    title: 'Paramètres',
    link: '/dashboard/settings',
    icon: <SettingsIcon color='inherit' />
  },
  {
    id: 2,
    title: 'Profile',
    link: '/dashboard/profile',
    icon: <ManageAccountsIcon color='inherit' />
  },
]


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactNode
}

export default function Layout(props: Props) {
  // initializing router
  const router = useRouter();


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    signOut(auth).then(() => {
      console.log('signed out')
    }).catch((error) => {
      console.log(error)
    });
  }

  const drawer = (
    <div>
      <Toolbar>
        <Image src={Logo} alt="Logo" />
      </Toolbar>
      <Divider color='#fff'/>
      <List>
        {sideBarMenu.map((elem: any) => (
          <ListItem key={elem.id} disablePadding>
            <Link href={elem.link} passHref>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff'}}>
                  {elem.icon}
                </ListItemIcon>
                <ListItemText primary={elem.title} sx={{ color: '#fff'}} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider color='#fff'/>
      <List>
        {sideBarSettingsMenu.map((elem: any) => (
          <ListItem key={elem.id} disablePadding>
            <Link href={elem.link} passHref >
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff'}}>
                  {elem.icon}
                </ListItemIcon>
                <ListItemText primary={elem.title} sx={{ color: '#fff'}} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
         <ListItem disablePadding>
            <ListItemButton onClick={() => logout()}>
              <ListItemIcon sx={{ color: '#fff'}} >
                  <LogoutIcon color='inherit' />
              </ListItemIcon>
              <ListItemText primary='Se Déconnecter' sx={{ color: '#fff'}} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
                Console d'adminstration
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }  }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none', },
            '& .MuiDrawer-paper': {backgroundColor:'#000', boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {backgroundColor: "#000", boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
        <Toolbar />
            { props.children }    
        </Box>
    </Box>
  );
}