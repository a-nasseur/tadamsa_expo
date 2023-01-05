import React from 'react';
import { NextSeo } from 'next-seo';
import Banner from '../../src/components/Banner';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { collection, getDocs, getDoc, doc} from "firebase/firestore"; 
import { NextPageContext } from 'next';

     
import { db } from '../../config/firebase';

type Props = {
  post?: any
}

export const getStaticProps = async (ctx: any ) => {
    try {
    const ref = doc(db, 'posts', ctx.params.id)
    const response = await getDoc(ref);
    
    const post = response.data();


    return {
      props: {
        post
      }
    }
   
    // console.log("list of posts from firestore: ", querySnapshot);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export const getStaticPaths = async (ctx: NextPageContext) => {

 try {
    // Requesting all posts
    const response = await getDocs(collection(db, 'posts'));

    // declaring the ids array
    let paths: any = [];

    // extracting the ids
    response.forEach(doc => {
      paths.push({params: {id: doc.id.toString()}});
    })



    return {
      paths,
      fallback: false,
    }
  
 } catch (error) {
  console.log(error);
 }
 
   

}




const article = ({ post }: Props) => {


  return (
    <>
        <NextSeo 
            title={`Tadamsa Expo | ${post.title}`} 
            description={post.excerpt}
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
            title={post.title}
            subtitle={new Date(post.date).toDateString()}
            backgroundImage={post.image}
        />


        <Container maxWidth='md' sx={{ marginTop: 6, textJustify: 'auto' }}>
            <Typography
              variant='h2'
              fontFamily="Osande"
            >
              {post.title}
            </Typography>
            <Typography
              variant='h6'
              fontFamily="Osande"

            >
             {new Date(post.date).toDateString()}
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              paddingY={4}
            >
              {post.excerpt}
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              gutterBottom


            >
              {post.content}
            </Typography>
      
        </Container>
    </>
  )
}

export default article;