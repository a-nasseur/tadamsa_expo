import { Box, Container, Grid, TextField, Typography, styled } from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import NewsletterForm from './NewsletterForm';



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
                  Notre objectif est d’apporter de nouvelles perspectives, des idées novatrices et une exécution impeccable à chaque projet que nous entreprenons et d’être une partie importante du progrès de la nouvelle économie émergente de l’Algérie.                </Typography>
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
                    +213 (0) 561 62 2022
                  </Typography>
                </ContactItems>
                <ContactItems>
                  <WhatsAppIcon color='inherit' />
                  <Typography
                    variant='subtitle2'
                  >
                    +213 (0) 561 61 2022
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
                  Restez au courant de nos activités via notre newsletter. 
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
            © 2023 TADAMSA EXPO . TOUT DROIT RÉSERVÉES | +213 (0) 561 62 2022 | CONTACT@TADAMSAEXPO.COM
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Footer