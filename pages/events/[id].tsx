import React from 'react'
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


     

type Props = {
  event?: any
}

export const getStaticProps = async (ctx: any ) => {
    try {
    const ref = doc(db, 'events', ctx.params.id)
    const response = await getDoc(ref);
    
    const event = response.data();


    return {
      props: {
        event
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



const eventSingle = ({ event }: Props) => {


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
         title={`Tadamsa Expo | ${event.eventTitle}`} 
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
        title={event.eventTitle}
        subtitle={event.eventSubtitle}
        backgroundImage={event.eventBannerImage}
      />

      <Container maxWidth="lg" sx={{ marginY: 10 }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} sx={{ position: 'relative'}}>
              <Image src={bevalg} alt="event image"  className={styles.image}/>
              <Box marginTop={4}>
                <Title
                    variant='h4' 
                    sx={{ '&:after': { backgroundColor: 'black'}}}
                    gutterBottom
                >
                    {event.eventSubtitle}
                </Title>
                <Typography
                    variant='body1'
                    gutterBottom

                >
                    {event.excerpt}
                </Typography>
                <Typography
                    variant='body1'
                    color='text.secondary'
                    gutterBottom

                >
                    {event.description}
                </Typography>
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
                        {event.sidebarExcerpt}
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
                    <Link href={event.website.link} passHref target='_blank'>
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
                               {event.contact.phone}
                            </Typography>
                        </ContactContainer>
                        <ContactContainer>
                            <WhatsAppIcon color='success'/> 
                            <Typography
                              variant='subtitle2'
                              color='text.secondary'
                            >
                                {event.contact.whatsapp}
                            </Typography>
                        </ContactContainer>
                        <ContactContainer>
                            <EmailIcon /> 
                            <Typography
                              variant='subtitle2'
                              color='text.secondary'
                            >
                                {event.contact.email}
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


    </>
  )
}

export default eventSingle;