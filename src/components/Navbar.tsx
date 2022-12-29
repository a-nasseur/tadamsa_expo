import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react';


import logo_black from '../../public/logos/logo_black.svg';
import Link from 'next/link';

type Props = {}



const Navbar = (props: Props) => {

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
      color: 'white'
  }));

  const CustomListContainer = styled('ul')(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }

  }));

  const ListItem = styled(Typography)(({ theme }) => ({
    marginRight: '20px',
    textDecoration: 'none',
    transition: 'all .5s ease',
    padding: 7,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 2
    }

  }));



  return (
    <AppBar color='transparent' elevation={0}>
      <CustomToolbar>
        <Link href='/' passHref>
          <Image src={logo_black} priority alt="Tadamsa expo logo" width={width} height={height}/>
        </Link>
        <CustomListContainer>
          {menuItems.map(elem => (
            <React.Fragment key={elem.id}>
              <Link href={elem.link} passHref>
                <ListItem variant='h6'>
                  {elem.title}
                </ListItem>
              </Link>
            </React.Fragment>
          ))

          }
        </CustomListContainer>
      </CustomToolbar>
    </AppBar>
  )
}

export default Navbar