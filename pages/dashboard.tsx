import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { Box, Container, Typography, styled } from '@mui/material';
import { NextSeo } from 'next-seo';
import { Oval } from 'react-loader-spinner';

import { auth } from '../config/firebase';

type Props = {}

const dashboard = (props: Props) => {
  // local states
  const [loading, setLoading] = React.useState<boolean>(true);

  // initializing router
  const router = useRouter();

  // redirection handling function
  const handleRedirect = () => {
    setTimeout(() =>  {
      router.push('/login');
    }, 5000);  
  }

  // Styles
  const DashboardContainer = styled(Container)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100vh'
  }));


  const RedirectionContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#000',
    height: '50vh',
    width: '100%',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 16
  }));


  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setLoading(false) : setLoading(true);
    });


  }, []);

  return (
    <>
       <NextSeo
            title="Tadamsa Expo | Dashboard"
            description="Console d'adminstration"
            canonical="https://tadamsaexpo.com"
            openGraph={{
            url: 'https://www.tadamsaexpo.com',
            title: 'Tadamsa Expo',
            description: "Ready for tommorow's Algeria",
            images: [
                {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
                type: 'image/jpeg',
                },
                {
                url: 'https://www.example.ie/og-image-02.jpg',
                width: 900,
                height: 800,
                alt: 'Og Image Alt Second',
                type: 'image/jpeg',
                },
                { url: 'https://www.example.ie/og-image-03.jpg' },
                { url: 'https://www.example.ie/og-image-04.jpg' },
            ],
            siteName: 'SiteName',
            }}
            twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
            }}
       
      />

      <DashboardContainer maxWidth='lg'>
          <RedirectionContainer>
             {
                !loading &&
            
                <Typography
                  variant='h3'

                >
                  Dashboard
                </Typography>
          
              }

              {
                loading &&
                <Box>
                  <Typography
                    variant='h3'
                    fontFamily="Osande"
                    fontWeight={700}

                  >
                    Vous devez etre connecter pour acceder a ce contenu 
                  </Typography>
                  <Typography
                    variant='h6'
                  >
                   vous aller etre rediriger vers la page de connection
                  </Typography>

                </Box>
              }
          </RedirectionContainer>
        </DashboardContainer>
 
    </>
  )
}

export default dashboard