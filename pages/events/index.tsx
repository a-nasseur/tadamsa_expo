import React from 'react'
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { NextSeo } from 'next-seo';
import { getDocs, collection, orderBy, query  } from 'firebase/firestore';




import Footer from '../../src/components/Footer'
import Layout from '../../src/components/Layout';
import Banner from '../../src/components/Banner'
import { Container, Grid, Typography, styled } from '@mui/material';
import EventCard from '../../src/components/EventCard';
import { db } from '../../config/firebase';

type Props = {
  events?: any
}



export const getStaticProps = async (ctx: any ) => {
  try {
  
  // Fetching data from firebase
  const ref = collection(db, 'events')

  const q = query(ref, orderBy("createdAt", 'desc'));


  // Awaiting response
  const response = await getDocs(q);
  
  let data: any[] = [];

  // Adding data to a mutable array
  response.forEach(doc => {
    const docId = doc.id
    const newDoc = {
      id: docId,
      ...doc.data()
    }
    data.push(newDoc);
  });

  // handeling date and time and content 
  const events = data.map(elem => {
    elem.createdAt = new Date(elem.createdAt.seconds * 1000).toDateString();
    elem.content ? elem.content = JSON.parse(elem.content) : null ;
    return elem
  });


  return {
    props: {
      events,
    }
  }
 
  // console.log("list of posts from firestore: ", querySnapshot);
} catch (e) {
  console.error("Error adding document: ", e);
}
}

const Events: NextPageWithLayout = ({ events }: Props) => {
  // styles
  const Title = styled(Typography)(({ theme }) => ({
    '&keyframes slideIn': {
      from: {opacity: 0, transform: 'translateX(-200px)'},
      to: {opacity: 1, transform: 'translateX(0)'}
    },
    fontFamily: 'Osande',
    paddingBottom: '20px',
    '&:after': { 
      display: 'block', 
      marginTop: '10px', 
      height: '4px', 
      width: '120px', 
      backgroundColor: 'white',
      content: '""'
    }
  }));


  return (
    <>
      <NextSeo 
         title="Tadamsa Expo | Évènements"
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
      title="Explorez nos évènements"  
      subtitle='Construisez avec nous'
      backgroundImage='https://res.cloudinary.com/dxiep6zjl/image/upload/v1676473032/expo_articles/safex_peoizz.webp'
    />

  <Container maxWidth="lg" sx={{ marginY: 6 }}>
    <Title variant='h3' sx={{ '&:after': {backgroundColor: 'black'}}}>Nos Évènements</Title>
    <Grid container spacing={4} marginTop={6}>  
    {
      events.map((elem: any) => (
        <Grid item xs={12} md={4} key={elem.id}>
          <EventCard 
            thumbnail={elem.thumbnail}
            id={elem.id}
            published={elem.published}
          />
        </Grid>
      ))
    }
    </Grid>
  </Container>

    
    <Footer />
    
    </>
  )
}

Events.getLayout = function getLayout(events: ReactElement){
  return (
    <Layout>
      {events}
    </Layout>
  )
}

export default Events