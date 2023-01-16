import { Box, Button, Container, FormControl, FormGroup, Grid, TextField, Typography, styled } from '@mui/material';
import React from 'react';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';



type Props = {}

const Footer = (props: Props) => {

  // Styles
  const FooterContainer = styled(Box)(({ theme }) => ({
     padding: '40px 0px 40px 0px',
     marginTop: '80px',
     backgroundColor: '#000',
  }));   

  const FooterTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Osande',
    paddingBottom: '10px',
    width: 'fit-content',
    color: '#fff',
    '&:after': { 
      display: 'block', 
      marginTop: '5px', 
      height: '2px', 
      width: '40%', 
      backgroundColor: 'white',
      content: '""'
    }
  }));

  const ContactsContainer = styled(Box)(({ theme }) => ({

  }));

  const NewsletterTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: '#fff'
  }));

  const NewsletterForm = () => (
    <FormControl sx={{ marginTop: 2}}>
      <FormGroup row>
        <NewsletterTextField 
          placeholder='Email'

        />
        <Button variant='contained'>Envoyer</Button>
      </FormGroup>
    </FormControl>
  )

  const ContactItems = styled(Box)(({ theme }) => ({
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  }));

  


  return (
    <>
    
      <FooterContainer>
        <Container maxWidth='lg' >
          <Grid container columnSpacing={5} rowSpacing={5}>
            <Grid item xs={12} md={4} order={{ xs: 1, sm: 1, md: 1 }}>
              <Box>
                <FooterTitle 
                  variant='h6'
                  gutterBottom
                >
                  Notre mission
                </FooterTitle>
                <Typography
                  variant='body1'
                  color='#fff'
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Minus a at ipsa aperiam possimus omnis magnam vel, velit assumenda 
                  delectus aut facilis dolorem iste eaque excepturi animi error, 
                  dolore quod.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} order={{ xs: 3, sm: 3, md: 2 }}>
            <ContactsContainer>
                <FooterTitle
                  variant='h6'
                  gutterBottom
                >
                  Contacts
                </FooterTitle>
                <ContactItems>
                  <SmartphoneIcon color='inherit' />
                  <Typography
                    variant='subtitle2'
                  >
                    +213 (0) 666 223 444
                  </Typography>
                </ContactItems>
                <ContactItems>
                  <WhatsAppIcon color='inherit' />
                  <Typography
                    variant='subtitle2'
                  >
                    +213 (0) 666 223 444
                  </Typography>
                </ContactItems>
                <ContactItems>
                  <EmailIcon color='inherit' />
                  <Typography
                    variant='subtitle2'
                  >
                    contact@tadamsaexpo.com
                  </Typography>
                </ContactItems>
              </ContactsContainer>
            </Grid>
            <Grid item xs={12} md={4} order={{ xs: 2, sm: 2, md: 3 }}>
              <FooterTitle
                  variant='h6'
                  gutterBottom
                >
                  Newsletter
                </FooterTitle>
                <Typography
                  variant='body1'
                  color="#fff"
                
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                </Typography>
                <NewsletterForm />
            </Grid>
          </Grid>
        </Container>
      </FooterContainer>
      <Box>

      </Box>
      <Box sx={{ backgroundColor: 'primary.main', padding: '20px 0px 20px 0px', textAlign: 'center'}}>
        <Container maxWidth='lg'>
          <Typography
            variant='caption'
            color='#fff'
          >
            © 2023 TADAMSA EXPO . TOUT DROIT RÉSERVÉES | +213 (0) 555-222-333 | CONTACT@TADAMSAEXPO.COM
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Footer