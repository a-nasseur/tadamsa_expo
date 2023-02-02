import { NextSeo } from 'next-seo';
import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box } from '@mui/material';



import { auth } from '../config/firebase';
import Banner from '../src/components/Banner';
import LoginForm from '../src/components/LoginForm';
import { Oval } from 'react-loader-spinner';





type Props = {}

const login = (props: Props) => {
  // local states
  const [loading, setLoading] = React.useState<boolean>(true);

  // initializing router
  const router = useRouter();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        user ? router.replace('/dashboard') : setLoading(false);
    });

  }, [onAuthStateChanged]);


  const handleLogin = async (email: string, password: string) => {
    try {
      console.log(email, password)
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user  = response.user;
      console.log(user);
      
    } catch (error) {
      const errorCode = error
      console.log(error)
    }
  }

  
  return (
    <>
         <NextSeo
            title="Tadamsa Expo | Login"
            description="Organisateur d'événements sous la baniere des valeurs Tadamsa"
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

        <Banner 
            backgroundImage='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' 
            title="Console d'administration"
            children={
              !loading ? 
                <LoginForm onClick={handleLogin}/> 
              : 
                <Box mt={4}>
                  <Oval 
                    color='#fff' 
                    height={42} 
                    width={42}
                    secondaryColor='#fff'
                  />
                </Box>
            }
        />

            
    </>


  )
}

export default login;