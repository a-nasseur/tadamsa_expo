import React from 'react'
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { NextSeo } from 'next-seo'



import Footer from '../../src/components/Footer'
import Layout from '../../src/components/Layout';
import Banner from '../../src/components/Banner'

type Props = {}

const Events: NextPageWithLayout = (props: Props) => {
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
      backgroundImage='https://images.unsplash.com/photo-1544509538-ae815ae18e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    />

    
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