import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, styled, Toolbar, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo_black from '../../public/logos/logo_black.svg';
import Link from 'next/link';



type Props = {}



const Navbar = (props: Props) => {
  // Local states
  const [open, setOpen] = React.useState<boolean>(false);


  // Scroll add Appbar background color function
  const handleScroll = React.useCallback(() => {
    // Stroring the offsetY change variable
    const y: number = window.scrollY;

    // Getting the appbar element
    const appbar: any = document.getElementById('appbar');

    // Getting the banner element
    const bannerHeight: any = document.getElementById('banner')?.clientHeight;

    // Conditionnaly adding background depending on the banner's height
    y >= bannerHeight ? appbar.style.backgroundColor = '#000' :  appbar.style.backgroundColor = 'transparent'
    
  }, [])



  React.useEffect(() => { 
    // adding the event listener after the window object after SSR completed
    if(typeof window !== 'undefined'){
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
    
  },[]);

  

  // Navbar menu items
  const menuItems = [
    {
      id: 1,
      link: '/',
      title: 'Acceuil'
    },
    {
      id: 2,
      link: '/about',
      title: 'Qui sommes nous'
    },
    {
      id: 3,
      link: '/events',
      title: 'Évènements'
    },
    {
      id: 4,
      link: '/contact',
      title: 'contacts'
    },
  ]


  // Logo resizing
  const width: number = 200;
  const height: number = width / 2;

  // Styles
  const CustomToolbar = styled(Toolbar)(({ theme }) => ({
      height: '100px',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
  }));

  const CustomListContainer = styled('ul')(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }

  }));

  const MenuItem = styled(Typography)(({ theme }) => ({
    marginRight: '20px',
    textDecoration: 'none',
    transition: 'all .5s ease',
    padding: 7,
    fontFamily: 'Osande',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 2
    }

  }));

  const DrawerIconContainer = styled(IconButton)(({ theme }) => ({
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }));

  const DrawerContentContainer = styled(Box)(({ theme }) => ({
      minWidth: 250,
      height: '100vh',
      backgroundColor: '#000',

  }));

  const DrawerTitle = styled(Typography)(({ theme }) => ({
      color: 'white',
      fontFamily: "Osande",
      '&:after': { 
        display: 'block', 
        marginTop: '10px', 
        height: '2px', 
        width: '20px', 
        backgroundColor: 'white',
        content: '""'
      }

  }));



  return (
    <>
      <AppBar color='transparent' elevation={0} id="appbar" sx={{ transition: 'background-color .2s ease'}}>
        <CustomToolbar>
          <Link href='/' passHref as="/">
            <Image 
              priority
              src={logo_black} 
              alt="Tadamsa expo logo" 
              width={width} 
              height={height}
              blurDataURL={logo_black}
            />
          </Link>
          <CustomListContainer>
            {menuItems.map(elem => (
              <React.Fragment key={elem.id}>
                <Link href={elem.link} passHref>
                  <MenuItem variant='h6'>
                    {elem.title}
                  </MenuItem>
                </Link>
              </React.Fragment>
            ))
            }
          </CustomListContainer>
          <DrawerIconContainer
            disableFocusRipple
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize='large' color='inherit' />
          </DrawerIconContainer>
        </CustomToolbar>
      </AppBar>

      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <DrawerContentContainer role='presentation'>
          <Toolbar sx={{ padding: 3, justifyContent: 'space-between'}}>
            <Typography
              variant='h4'
              color='white'
             
            >
              Menu
            </Typography>
            <DrawerIconContainer
              disableFocusRipple
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize='large' />
            </DrawerIconContainer>
          </Toolbar>
          <List sx={{ padding: 1, marginTop: 4}}>
          {
            menuItems.map(elem => (
              <React.Fragment key={elem.id} >
                <ListItem>
                  <Link href={elem.link} passHref>
                      <DrawerTitle 
                        variant='h5'
                        onClick={() => setOpen(false)}
                      >
                        {elem.title}
                      </DrawerTitle>
                  </Link>
                </ListItem>
              </React.Fragment>
              ))
          }
          </List>
        </DrawerContentContainer>
        

      </Drawer>
    
    </>


  )
}

export default Navbar