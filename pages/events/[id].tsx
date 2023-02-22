import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Banner from '../../src/components/Banner';
import { NextSeo } from 'next-seo';
import { Avatar, Box, Container, Grid, IconButton, Typography, styled } from '@mui/material';
import Image from 'next/image';
import styles from '../../styles/event.module.css'
import { collection, getDocs, getDoc, doc} from "firebase/firestore"; 
import { NextPageContext } from 'next';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


import bevalg from '../../public/bevalg_single.png';
import { db } from '../../config/firebase';
import Link from 'next/link';
import Layout from '../../src/components/Layout';


     

type Props = {
  event?: any
}

export const getStaticProps = async (ctx: any ) => {
    try {
    
    // Fetching data from firebase
    const ref = doc(db, 'events', ctx.params.id)

    // Awaiting response
    const response = await getDoc(ref);
    
    // Handling timestamp
    const createdAt = response.data()?.createdAt.seconds * 1000;

    // setting up data object
    let event: any = response.data();

    event.createdAt = createdAt;
    
    

    return {
      props: {
        event,
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
    const response = await getDocs(collection(db, 'events'));

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



const EventSingle: NextPageWithLayout = ({ event }: Props) => {
  // Local states
  const [content, setContent] = useState<any>();

  // Handlers

  // Content handler
  const handleContent = async (content: any) => {
    const response = JSON.parse(content);
    setContent(response.content);
  
  };

  useEffect(() => {
    handleContent(event.content);
    console.log(content);
  }, [])




  const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'Osande',
    paddingBottom: '20px',
    '&:after': { 
      display: 'block', 
      marginTop: '10px', 
      height: '3px', 
      width: '40px', 
      backgroundColor: 'white',
      content: '""'
    }
  }));


  const SocialMediaContainer = styled(Box)(({ theme }) => ({
     display: 'flex',
     gap: '1rem',
  }));

  const IconButtons = styled(IconButton)(({ theme }) => ({
    fontSize: 32,
    color: '#000',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: '#fff'
    }
  }));

  const ContactContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '.8rem',
    alignItems: 'center',
    paddingBottom: '15px'

  }));

  return (
    <>
        <NextSeo
         title={`Tadamsa Expo | ${event.title ? event.title : 'Comming soon'}`} 
         description={event.eventSubtitle}
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
        title={event.title}
        subtitle={event.subtitle}
        backgroundImage={event.eventBannerImage}
      />


      {
        event && event.published &&
        <Container maxWidth="lg" sx={{ marginY: 10 }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} sx={{ position: 'relative'}}>
              {/* <Image src={event.eventImage} alt="event image" className={styles.image}/> */}
              <Box marginTop={4}>
                <Title
                    variant='h4' 
                    sx={{ '&:after': { backgroundColor: 'black'}}}
                    gutterBottom
                >
                    {event.subtitle}
                </Title>
                <Typography
                    variant='body1'
                    color='text.secondary'
                    gutterBottom

                >
                    {event.excerpt}
                </Typography>
               

                <Box sx={{ paddingY: 4}}>
                {
                  content && 
                  content.map((elem: any) => (
                    elem.type == 'heading' ? 
                    <Typography
                      variant='h3'
                      fontWeight={700}
                    >
                      {elem.content[0].text}
                    </Typography>
                    :
                    elem.type == 'paragraph' ?
                    elem.content?.map((elem: any) => 
                      elem.marks ?
                      elem.marks?.map((mark: any) => (
                        <Typography
                          variant='body1'
                          paddingBottom={1}
                          fontWeight={mark.type == 'bold' ? 700 : ''}
                          fontStyle={mark.type == 'italic' ? 'italic': ''}

                        >
                          {elem.text}
                        </Typography>
                      ))
                      :
                      <Typography
                        variant='body1'
                        color='text.secondary'
                        paddingBottom={1}
                      >
                         {elem.text}
                      </Typography>
                    )
                    :
                    elem.type == 'bulletList' ? 
                    <Box component='ul'>
                      {
                        elem.content?.map((elem: any) => (
                          elem.content?.map((elem: any) => (
                            elem.content?.map((elem: any) => (
                              <Box component='li'>
                                {elem.text}
                              </Box>
                            ))
                          ))
                        ))
                      }
                    </Box>
                    :
                    elem.type == 'blockquote' ? 
                    elem.content?.map((elem: any) => (
                      elem.content?.map(((elem: any) => (
                        <Typography
                          variant='body1'
                          fontStyle='italic'
                          paddingLeft={4}
                          marginLeft={4}
                          marginTop={3}
                          sx={{ borderLeft: '4px solid gray'}}
                        >
                          {elem.text}
                        </Typography>
                      )))
                    ))
                    :
                    null
                  ))
                }
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box component='div'>
                    <Title 
                        variant='h5' 
                        sx={{ '&:after': { backgroundColor: '#000'}}}
                        gutterBottom
                    >
                        {event.sidebarTitle}
                    </Title>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={300}
                    >
                        {event.sideBarExcerpt}
                    </Typography>   

                 
                </Box>

                <Grid container spacing={2} sx={{ marginTop: 4 }}>
                    <Grid item xs={4} md={4} >
                        <Image src={bevalg} alt="bevalg" className={styles.instagram} /> 
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Image src={bevalg} alt="bevalg" className={styles.instagram} /> 
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Image src={bevalg} alt="bevalg" className={styles.instagram} /> 
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Image src={bevalg} alt="bevalg" className={styles.instagram} /> 
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Image src={bevalg} alt="bevalg" className={styles.instagram} /> 
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Image src={bevalg} alt="bevalg" className={styles.instagram} /> 
                    </Grid>
                  
                </Grid>

                <Box marginTop={4}>
                <Title 
                        variant='h5' 
                        sx={{ '&:after': { backgroundColor: '#000'}}}
                        paddingTop={3}
                    >
                        Siteweb officiel
                    </Title>
                    <Link href={event.website.link ? event.website.link : "#"} passHref target='_blank'>
                        <Typography
                            variant='body1'
                            fontFamily="Osande"
                            color='text.secondary'
                            sx={{
                                transition: 'color .4s ease',
                                textDecoration: 'underline',
                                '&:hover': {
                                    color: 'primary.main'
                                }
                            }}

                        >
                            {event.website.title}
                        </Typography>
                    </Link>
                    <Box>
                        <Title
                            variant='h5' 
                            sx={{ '&:after': { backgroundColor: 'black'}}}
                            paddingTop={6}
                            gutterBottom
                        >

                            Entrer en contact
                        </Title>
                        <ContactContainer>
                            <SmartphoneIcon /> 
                            <Typography
                              variant='subtitle2'
                              color='text.secondary'
                            >
                               {event.contacts.phoneNumber}
                            </Typography>
                        </ContactContainer>
                        <ContactContainer>
                            <WhatsAppIcon color='success'/> 
                            <Typography
                              variant='subtitle2'
                              color='text.secondary'
                            >
                                {event.contacts.whatsApp}
                            </Typography>
                        </ContactContainer>
                        <ContactContainer>
                            <EmailIcon /> 
                            <Typography
                              variant='subtitle2'
                              color='text.secondary'
                            >
                                {event.contacts.email}
                            </Typography>
                        </ContactContainer>
                    </Box>
                    <Title
                        variant='h5' 
                        sx={{ '&:after': { backgroundColor: '#000'}}}
                        gutterBottom
                        paddingTop={3}
                    >
                        Suivez nous
                    </Title>
                    <SocialMediaContainer>
                        <Link href={event.socialLinks.facebook} passHref target="_blank">
                            <IconButtons sx={{ color: '#4267B2'}}>
                                <FacebookIcon  fontSize='medium' color='inherit'/>
                            </IconButtons>
                        </Link>
                        <Link href={event.socialLinks.twitter} passHref target="_blank">
                            <IconButtons sx={{ color: '#00acee'}}>
                                <TwitterIcon  fontSize='medium'/>
                            </IconButtons>
                        </Link>
                        <Link href={event.socialLinks.linkedin} passHref target="_blank">
                            <IconButtons sx={{ color: '#0e76a8' }}>
                                <LinkedInIcon  fontSize='medium'/>
                            </IconButtons>
                        </Link>
                        <Link href={event.socialLinks.instagram} passHref target="_blank">
                            <IconButtons sx={{ color: '#bc2a8d' }}>
                                <InstagramIcon  fontSize='medium'/>
                            </IconButtons>
                        </Link>
                    </SocialMediaContainer>
                </Box>
            </Grid>
        </Grid>
      </Container>
      }
      {
        event && !event.published &&

        <Container maxWidth='xl' sx={{ padding: 4}}>
          <Typography
            variant='h3'

          >
            Information bientôt disponible
          </Typography>  
        </Container>
      }

     


    </>
  )
}


EventSingle.getLayout = function getLayout(singleEvent: ReactElement){
  return (
    <Layout>
      {singleEvent}
    </Layout>
  )
}

export default EventSingle;