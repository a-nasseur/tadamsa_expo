import React from 'react';
import { NextSeo } from 'next-seo';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import Image from 'next/image';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';



import OfficeWork from '../public/office_work.jpeg';
import OfficeWork2 from '../public/office_work_2.jpeg';
import Banner from '../src/components/Banner';
import BEVALG from '../public/bevalg.png';
import ArticleCard from '../src/components/ArticleCard';

import logo1 from '../public/logos/windows.png';
import logo2 from '../public/logos/apple.png';
import logo3 from '../public/logos/asp.png';
import logo4 from '../public/logos/nvidia.png';
import Link from 'next/link';
import EventCard from '../src/components/EventCard';
import Footer from '../src/components/Footer';


const articles = [
  { 
    id: '8ep4mnkC4eGJ978buSdg',
    title: 'Les congrès et les salons repartent très fort en présentiel',
    image: 'https://images.unsplash.com/photo-1525402456151-11e51fa1b2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1698&q=80',
    alt: 'Hall d"exhibition',
    date: '03 Janvier 2022',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat consequuntur maiores sapiente, eum repudiandae ab earum eius recusandae, autem nihil eligendi ea! Nemo quod sapiente, animi fugiat suscipit mollitia?'
  },
  { 
    id: 'e5FnrdC5STs2z2DOn4wF',
    title: 'GL Events: de nouveaux appels d’offres remportés',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Conference',
    date: '03 Janvier 2022',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat consequuntur maiores sapiente, eum repudiandae ab earum eius recusandae, autem nihil eligendi ea! Nemo quod sapiente, animi fugiat suscipit mollitia?'
  },
  { 
    id: 3,
    title: 'Le retour de l’événementiel plombé par les pénuries',
    image: 'https://images.unsplash.com/photo-1601903060992-09a591e36f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80',
    alt: 'Penurie',
    date: '03 Janvier 2022',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat consequuntur maiores sapiente, eum repudiandae ab earum eius recusandae, autem nihil eligendi ea! Nemo quod sapiente, animi fugiat suscipit mollitia?'
  },
]


const events = [
  { 
    id: 'MtbDacjSV4vsHKD10eOr',
    image: 'https://images.unsplash.com/photo-1640914482949-b0e34060a615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  { 
    id: 2,
    image: 'https://images.unsplash.com/photo-1567264401194-806d5f4b4d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80',
  },
  { 
    id: 3,
    image: 'https://images.unsplash.com/photo-1568857180654-362dbc045ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
 
]

const logos = [
  {
    id: 1,
    logo: logo1
  },
  {
    id: 2,
    logo: logo2
  },
  {
    id: 3,
    logo: logo3
  },
  {
    id: 4,
    logo: logo4
  },
  {
    id: 5,
    logo: logo4
  },
  {
    id: 6,
    logo: logo3
  },
  {
    id: 7,
    logo: logo2
  },
  {
    id: 8,
    logo: logo1
  },
]


type Props = {}

const about = (props: Props) => {
  

  // Styles
  const RigthGrid = styled(Grid)(({ theme }) => ({
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#E42313',
    color: 'white',
    padding: 60,
    overflow: 'hidden'
  }));

  const LeftGrid = styled(Grid)(({ theme }) => ({
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#000',
    color: 'white',
    padding: 60,
    overflow: 'hidden'
  }));


  const ImageGrid = styled(Grid)(({ theme }) => ({
    // '@keyframes scaleUp': {
    //   from: { transform: 'scale(1.0)'},
    //   to: { transform: 'scale(1.2)'}
    // },
    // '&:hover': {
    //   animation: 'scaleUp linear .3s forwards'
    // },
    position: 'relative',
    overflow: 'hidden',
    height: '480px',
    [theme.breakpoints.down('sm')]: {
      height: '350px'
    }
  }));

  const AboutTitle = styled(Typography)(({ theme }) => ({
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

  const Point = styled('span')(({ theme }) => ({
    height: 10,
    width: 10,
    backgroundColor: 'red',
    borderRadius: '50%',

  }));


  return (
    <>
    <NextSeo 
         title="Tadamsa Expo | Qui sommes nous"
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
      title="L'histoire derrière notre success" 
      subtitle='Qui sommes nous ?'
      backgroundImage='https://images.unsplash.com/photo-1670272505497-d532f0b50702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    />

  

      <Container maxWidth='lg' sx={{ marginTop: 14}}>
        <AboutTitle variant='h3' sx={{ '&:after': {backgroundColor: 'black'}}}>
          À propos de nous 
        </AboutTitle>

        <Grid container spacing={4} marginTop={7}>
          <Grid item xs={12} md={4}>
              <Box
                sx={{ display: 'flex', gap: 2}}
              >
                <EmojiObjectsIcon  
                  sx={(theme) => {
                      return {
                        fontSize: 82, 
                        color: '#E42313',
                        [theme.breakpoints.down('sm')]:{
                          fontSize: 60
                        }

                      } 
                    }}
                  />
                <Box>
                  <Typography variant='h5' fontFamily="Osande" gutterBottom>
                      Expolorez des idées
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam odit voluptatem ea earum, similique, magni temporibus deleniti quasi dolore vero suscipit officia? Ratione dolorum ea in aliquid dolores ullam nobis!
                  </Typography>
                </Box>
              </Box>
          </Grid>
          <Grid item xs={12} md={4}>
              <Box
                sx={{ display: 'flex', gap: 2}}
              >
                <AccountTreeIcon   
                sx={(theme) => {
                      return {
                        fontSize: 82, 
                        color: '#E42313',
                        [theme.breakpoints.down('sm')]:{
                          fontSize: 60
                        }

                      } 
                    }}/>
                <Box>
                  <Typography variant='h5' fontFamily="Osande" gutterBottom>
                      Plannifier & Investir
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam odit voluptatem ea earum, similique, magni temporibus deleniti quasi dolore vero suscipit officia? Ratione dolorum ea in aliquid dolores ullam nobis!
                  </Typography>
                </Box>
              </Box>
          </Grid>
          <Grid item xs={12} md={4}>
              <Box
                sx={{ display: 'flex', gap: 2}}
              >
                <TrendingUpIcon   
                  sx={(theme) => {
                      return {
                        fontSize: 82, 
                        color: '#E42313',
                        [theme.breakpoints.down('sm')]:{
                          fontSize: 60
                        }

                      } 
                    }}/>
                <Box>
                  <Typography variant='h5' fontFamily="Osande" gutterBottom>
                      Réaliser & Célébrer
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam odit voluptatem ea earum, similique, magni temporibus deleniti quasi dolore vero suscipit officia? Ratione dolorum ea in aliquid dolores ullam nobis!
                  </Typography>
                </Box>
              </Box>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 10}}>
          <Typography variant='h4' fontFamily='Osande' gutterBottom>
              Une ambition sans précédent
          </Typography>
          <Typography variant='body1' color="text.secondary" gutterBottom>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum unde dolore quo minus quia temporibus error, quis voluptas laudantium odio quae earum ea ratione illo molestias explicabo quisquam libero ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque perspiciatis nihil laboriosam fugiat quia blanditiis iste eius. Veritatis explicabo fuga natus perspiciatis earum quas, corrupti voluptatem reiciendis quae facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptates quod saepe illo atque, porro necessitatibus eius aperiam nesciunt voluptas quae, modi unde reiciendis possimus eum facilis explicabo. Soluta, dolor!
          </Typography>
        </Box>
      </Container>
      
    <Grid container marginTop={14} overflow="hidden"> 
      <ImageGrid item xs={12} md={6}>
         <Image src={OfficeWork} fill alt="Tadamsa expo office work"/>
      </ImageGrid>
      <RigthGrid item xs={12} md={6} >
        <Box>
          <AboutTitle variant='h3' fontFamily='Osande' gutterBottom > 
              Tadamsa Expo
          </AboutTitle>
          <Typography variant='body1'  gutterBottom paddingBottom='15px'> 
              Decouvrez notre entreprise de création d'événements en Algérie, spécialisée dans l'organisation d'événements destinés à contribuer au développement économique de notre pays.
          </Typography>     
          <Typography variant='body2' fontWeight={300}> 
              Notre entreprise a été créée il y a [X] ans et s'est rapidement imposée sur le marché des événements grâce à notre expertise et notre engagement à offrir des expériences mémorables pour nos clients. Nous sommes fiers de notre position de leader sur le marché algérien et de notre capacité à organiser une grande variété d'événements, allant des salons professionnels aux festivals en passant par les concerts, les expositions et les événements sportifs.          
          </Typography>     
        </Box>
      </RigthGrid>
    </Grid>

    <Grid container>
      <LeftGrid item xs={12} md={6} order={{xs: 2, sm: 2 , md: 1}} >
        <Box>
          <AboutTitle variant='h3' fontFamily='Osande' gutterBottom> 
              Notre Objectif 
          </AboutTitle>
          <Typography variant='body1'  gutterBottom paddingBottom='15px'> 
              Notre objectif principal est de contribuer activement au développement économique de l'Algérie en organisant des événements qui génèrent des revenus pour les entreprises locales et qui attirent des visiteurs de l'extérieur de la région.
          </Typography>     
          <Typography variant='body2' fontWeight={300}> 
              Nous travaillons en étroite collaboration avec les entreprises algériennes pour offrir des opportunités de croissance et de développement, tout en attirant des visiteurs qui dépensent de l'argent dans le pays et en créant des emplois pour les habitants de la région.          </Typography>     
        </Box>
      </LeftGrid>
      <ImageGrid item xs={12} md={6} order={{xs: 1, sm: 1, md: 2}}>
         <Image src={OfficeWork2} fill alt="Tadamsa expo office work" />
      </ImageGrid>
    </Grid>



    <Container maxWidth='lg' sx={{ marginTop: 14 }}>
      <AboutTitle
        variant='h3'
        sx={{ '&:after': {backgroundColor: 'black'}}}
        
      >
        Actualité événementiel
      </AboutTitle>
      <Grid container spacing={4} marginTop={3}>
        {
          articles.map(elem => (
          <Grid item xs={12} md={4} key={elem.id}>
            <ArticleCard  
              id={elem.id.toString()}
              title={elem.title}
              image={elem.image}
              alt={elem.alt}
              date={elem.date}
              excerpt={elem.excerpt}
            />
          </Grid>
          ))
        }
      </Grid>
    </Container>


     {/* <Box sx={{ marginTop: '100px'}} >
      <Grid container sx={{ backgroundColor: '#000'}}>
        <ImageGrid xs={12} md={6}>
          <Image src={BEVALG} fill alt="picture"  />
        </ImageGrid>
        <LeftGrid xs={12} md={6}>
          <Box>
            <AboutTitle variant='h3' fontFamily='Osande' gutterBottom> 
              Évènement Vedette
            </AboutTitle>
            <Typography variant='body1'  gutterBottom paddingBottom='15px'> 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quod eius praesentium, architecto, tempora dolores rerum dolorem nobis molestias repudiandae corporis doloremque! Quia cupiditate sint, quibusdam impedit eaque ab voluptate?
            </Typography>     
            <Typography variant='body2' fontWeight={300}> 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolore fugit eligendi, excepturi nostrum illum ducimus eius, dolores, dignissimos sit corrupti repudiandae neque aperiam facere aspernatur reiciendis vero nisi perspiciatis.
            </Typography>
          </Box>
        </LeftGrid>
      </Grid>
    </Box> */}


    <Box sx={{paddingY: 6 , marginTop: 14, backgroundColor: '#000', color: 'white'}}>
      <Container maxWidth='lg'>
        <AboutTitle
          variant='h3'
          
        >
          Nos Partenaires
        </AboutTitle>
        <Typography
          variant='body1'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui fuga, 
          nisi animi accusamus quia, veritatis sunt esse tempora quaerat necessitatibus, 
          architecto quod nostrum tempore culpa voluptas sequi? Officia, sed?
        </Typography>
        <Grid container spacing={6} marginTop={6}>
          {
            logos.map(elem => (
              <Grid item xs={6} md={3} key={elem.id} sx={{ position: 'relative'}}>
                <Image src={elem.logo} alt="logo"  width={128} height={128} />
              </Grid>
            ))
          }
        </Grid>        
      </Container>
    </Box>

    <Container maxWidth='lg' sx={{ marginTop: 14 }}>
      <AboutTitle variant='h3' sx={{ '&:after': { backgroundColor: '#000' }}}>
        Création innovative
      </AboutTitle>
      <Typography
          variant='body1'
          color='text.secondary'
        >
          Les innovations créatives sont le moteur du progrès et de l’avancement dans tous 
          les domaines. Ce sont les idées, les solutions et les inventions qui repoussent les 
          limites, remettent en question le statu quo et inspirent le changement.
        </Typography>
      <Grid container spacing={4} marginTop={6}>
        {
          events.map((elem, index) => (
          <Grid item xs={12} md={4} key={elem.id}>
              <EventCard 
                image={elem.image}
                id={elem.id}
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

export default about