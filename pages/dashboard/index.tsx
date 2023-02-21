import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { Box, Container, Typography, styled } from '@mui/material';
import { NextSeo } from 'next-seo';
import { Oval } from 'react-loader-spinner';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';
import { getDocs, collection } from 'firebase/firestore';

import Layout from '../../src/components/dashboard/Layout';
import { auth, db } from '../../config/firebase';

type Props = {}

const Dashboard: NextPageWithLayout = (props: Props) => {
  // local states
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<any>();

  // initializing router
  const router = useRouter();

  // redirection handling function
  const handleRedirect = () => {
    setTimeout(() =>  {
      router.push('/login');
    }, 
    5000
  );  
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
        if(user){
          console.log(user.uid);
          setLoading(false);
      } else {
        router.replace('/login')
      }
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
            <>
              <Typography
                variant='h3'

              >
                Dashboard
              </Typography>
            </>
              }

              {
                loading &&

                <Oval 
                  height={42}
                  width={42}
                  color='#fff'
                  secondaryColor='#fff'
                /> 

              }
          </RedirectionContainer>
        </DashboardContainer>
 
    </>
  )
}


Dashboard.getLayout = function getLayout(dashboard: ReactElement){
  return (
    <Layout>
      {dashboard}
    </Layout>
  )
}

export default Dashboard;