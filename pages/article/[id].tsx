import React from 'react';
import { NextSeo } from 'next-seo';
import Banner from '../../src/components/Banner';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {}


// export const getStaticProps = async (context: NextPageContext) => {

//     return {
//         props: {
//             context: context.params
//         }
//     }
// }

const article = ({  }: Props) => {
  

  return (
    <>
        <NextSeo 
            title="Tadamsa Expo | Article"
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
            title='Article Title' 
            subtitle='Article author and date of publication' 
            backgroundImage='https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
        />


        <Container maxWidth='lg' sx={{ marginTop: 6, textJustify: 'auto' }}>
            <Typography
              variant='h2'
              fontFamily="Osande"
            >
              Le titre de l'article
            </Typography>
            <Typography
              variant='body1'

            >
              03 Janvier 2023
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              paddingY={4}
            >
              
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt odio, beatae blanditiis repudiandae odit minus numquam veritatis voluptatum fuga repellendus minima incidunt laboriosam repellat, placeat magni reprehenderit quae, vel neque.
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              gutterBottom


            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt odio, 
              beatae blanditiis repudiandae odit minus numquam veritatis voluptatum 
              fuga repellendus minima incidunt laboriosam repellat, placeat magni 
              reprehenderit quae, vel neque.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur 
              officiis magni totam eum labore incidunt at pariatur veniam expedita vitae 
              quae quidem corrupti, autem optio harum ad, nam minus? Et.
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'


            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt odio, 
              beatae blanditiis repudiandae odit minus numquam veritatis voluptatum 
              fuga repellendus minima incidunt laboriosam repellat, placeat magni 
              reprehenderit quae, vel neque.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur 
              officiis magni totam eum labore incidunt at pariatur veniam expedita vitae 
              quae quidem corrupti, autem optio harum ad, nam minus? Et.
            </Typography>
        </Container>
    </>
  )
}

export default article;