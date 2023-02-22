import React, { useState } from 'react'
import Banner from '../src/components/Banner';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo'
import { Alert, Box, Button, Container, FormControl, FormGroup, Grid, IconButton, TextField, Typography, styled } from '@mui/material'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import * as Yup from 'yup';


import Footer from '../src/components/Footer';
import Layout from '../src/components/Layout';
import { GridCloseIcon } from '@mui/x-data-grid';
import { Oval } from 'react-loader-spinner';




type Props = {}

const Contact: NextPageWithLayout = (props: Props) => {
  const [alert, setAlert] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();


   // Validation schema 
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required().label('Nom et prénom'),
    email: Yup.string().required().email().label('Email'),
    company: Yup.string().required().label('Entreprise'),
    phone: Yup.string().required().min(10).max(10).label('Numéro de téléphone'),
    message: Yup.string().required().label('Message'),
  });



  const ContactContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '.8rem',
    alignItems: 'center',
    paddingBottom: '15px'

  }));



  const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'Osande',
    paddingBottom: '20px',
    '&:after': { 
      display: 'block', 
      marginTop: '6px', 
      height: '3px', 
      width: '20%', 
      backgroundColor: 'white',
      content: '""'
    }
  }));

  // Handlers
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form: any = document.getElementById('contact-form')
    
    // update loading state 
    setLoading(true);

    // Validating input
    const body = {
      fullName,
      email,
      company,
      phone,
      message,
    }

    const valid = await validationSchema.isValid(body);


    if(valid){
      try {
        const response: any = await fetch('http://localhost:3000/api/contact/contact-form', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(body)
        });
  
       const data = await response.json();

       console.log(data.data.message)

       if(data.success){
        setAlert(data.data.message);
        form.reset();
       }

       setError(data.data.message)
  
        setLoading(false)
        
      } catch (error: any) {
        console.log(error.data.message);
        setError(error.message)
      }
    }

    setLoading(false)


  }
  

  return (
    <>
      <NextSeo 
         title="Tadamsa Expo | Contacts"
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
      title="Contactez nous" 
      subtitle='pour toute vos questions' 
      backgroundImage='https://images.unsplash.com/photo-1560264357-8d9202250f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    />

    <Container maxWidth='lg' sx={{ marginY: 6}}>
      <Grid container columnSpacing={3} rowSpacing={6}>     
        <Grid item xs={12} md={6}>
          <Title
            variant='h4'
            fontFamily="Osande"
            sx={{ '&:after': { backgroundColor: '#000' }}}

          >
            Nous serions ravie de vous assister
          </Title>
          <form id='contact-form'> 
            <FormControl variant='outlined' fullWidth disabled>
              <FormGroup>
                <TextField 
                  placeholder="Nom prénom"
                  type="text"
                  name="fullName"
                  sx={{ paddingBottom: 3}}
                  onChange={(e: any) => setFullName(e.target.value)}
                />

                <TextField 
                  placeholder="Email"
                  type="text"
                  name="email"
                  sx={{ paddingBottom: 3}}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <TextField 
                  placeholder="Compangnie"
                  type="text"
                  name="company"
                  sx={{ paddingBottom: 3}}
                  onChange={(e: any) => setCompany(e.target.value)}
                />
                <TextField 
                  placeholder="Téléphone"
                  type="text"
                  name="phone"
                  sx={{ paddingBottom: 3}}
                  onChange={(e: any) => setPhone(e.target.value)}
                />
                <TextField 
                  placeholder="Votre message"
                  type="text"
                  name="message"
                  multiline
                  rows={8}
                  onChange={(e: any) => setMessage(e.target.value)}
                />
              </FormGroup>
            </FormControl>
            <Box sx={{ textAlign: 'center'}}>
              <Button 
                variant='contained' 
                size='large'
                sx={{ marginTop: 2 }}
                onClick={handleSubmit}
              >
                  {
                    loading ?
                    <Oval 
                      height={22}
                      width={22}
                      color='#fff'
                      secondaryColor='#fff'
                    
                    />

                    :

                    'Envoyer'

                  }
              </Button>
            </Box>
            {
            alert && 
            <Alert
            sx={{ marginTop: 2 }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert('');
                }}
              >
                <GridCloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {alert}
          </Alert>
        }
        {
            error && 
            <Alert
            sx={{ marginTop: 2 }}
            severity='error'
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setError('');
                }}
              >
                <GridCloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
           {error}
          </Alert>
          } 
          </form>
        </Grid>
        <Grid item xs={12} md={6}> 
          <Box>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.8617008948127!2d3.055753715031198!3d36.7738850768808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb34c89871b13%3A0x342079db72785748!2sTADAMSA%20expo!5e0!3m2!1sfr!2sdz!4v1673266132507!5m2!1sfr!2sdz" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </Box>
          <Box sx={{ marginTop: 6 }}>  
            <Title 
              variant='h6' 
              sx={{ '&:after': { backgroundColor: '#000', width: '5%'}}} 
            >
              Adresse
            </Title>
            <Typography
                variant='subtitle1'
                color='text.secondary'
              >
                06 Rue ADMANE Arezki, Alger Ctre 16000
              </Typography> 
          </Box> 
          <Box sx={{ marginTop: 3 }}>
            <Title 
              variant='h6' 
              sx={{ '&:after': { backgroundColor: '#000', width: '5%'}}} 
            >
              Contacts
            </Title>
            <ContactContainer>
              <SmartphoneIcon />
              <Typography
                variant='subtitle2'
                color='text.secondary'
              >
                +213 (0) 561 62 2022
              </Typography>  
            </ContactContainer>  
            <ContactContainer>
              <WhatsAppIcon color='success' />
              <Typography
                variant='subtitle2'
                color='text.secondary'
              >
                +213 (0) 561 61 2022
              </Typography>  
            </ContactContainer>  
            <ContactContainer>
              <EmailIcon />
              <Typography
                variant='subtitle2'
                color='text.secondary'
              >
                contact@tadamsaexpo.com
              </Typography>  
            </ContactContainer>
          </Box> 
        </Grid>
      </Grid>
    </Container>
    <Footer />
    </>
  )
}

Contact.getLayout = function getLayout(contact: ReactElement){
  return (
    <Layout>
      {contact}
    </Layout>
  )
}

export default Contact;