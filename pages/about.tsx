import { useEffect } from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import { Box, Card, Container, Grid, Typography, styled } from '@mui/material';
import Image from 'next/image';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { getDocs, collection, orderBy, limit, query  } from 'firebase/firestore';



import OfficeWork from '../public/office_work.jpeg';
import OfficeWork2 from '../public/office_work_2.jpeg';
import Banner from '../src/components/Banner';
import ArticleCard from '../src/components/ArticleCard';
import { db } from '../config/firebase';
import BEVALG from '../public/bevalg.png'


import logo1 from '../public/logos/Agroligne.svg';
import logo2 from '../public/logos/Filaha.svg';
import logo3 from '../public/logos/apab.svg';
import logo4 from '../public/logos/cba.svg';
import logo5 from '../public/logos/entv.svg';
import logo6 from '../public/logos/lactuel.svg';
import logo7 from '../public/logos/ita.svg';
import logo8 from '../public/logos/tadamsa.svg';
import logo9 from '../public/logos/caci.svg';
import EventCard from '../src/components/EventCard';
import Footer from '../src/components/Footer';
import Layout from '../src/components/Layout';


export const getStaticProps = async (ctx: any ) => {
  try {
    // Fetching data from firebase
    const ref = collection(db, 'events');

    const q = query(ref, orderBy("createdAt", 'desc'), limit(3));

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

      // Fetching data from firebase
      const postsRef = collection(db, 'events');

      // Query
      const postsQ = query(ref, orderBy("createdAt", 'desc'), limit(3));
   
      // Awaiting response
      const postsResponse = await getDocs(q);

      let postsData: any[] = [];


      // Adding data to a mutable array
      postsResponse.forEach(doc => {
        const docId = doc.id
        const newDoc = {
          id: docId,
          ...doc.data()
        }
        postsData.push(newDoc);
      });

      // handeling date and time and content 
      const articles = postsData.map(elem => {
        elem.createdAt = new Date(elem.createdAt.seconds * 1000).toDateString();
        elem.content ? elem.content = JSON.parse(elem.content) : null ;
        return elem
      });


    return {
      props: {
        events,
        articles,
      }
    }
 
  // console.log("list of posts from firestore: ", querySnapshot);
} catch (e) {
  console.error("Error adding document: ", e);
}
}



// const articles = [
//   { 
//     id: '8ep4mnkC4eGJ978buSdg',
//     title: 'Les congr??s et les salons repartent tr??s fort en pr??sentiel',
//     image: 'https://images.unsplash.com/photo-1525402456151-11e51fa1b2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1698&q=80',
//     alt: 'Hall d"exhibition',
//     date: '03 Janvier 2022',
//     excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat consequuntur maiores sapiente, eum repudiandae ab earum eius recusandae, autem nihil eligendi ea! Nemo quod sapiente, animi fugiat suscipit mollitia?'
//   },
//   { 
//     id: 'e5FnrdC5STs2z2DOn4wF',
//     title: 'GL Events: de nouveaux appels d???offres remport??s',
//     image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
//     alt: 'Conference',
//     date: '03 Janvier 2022',
//     excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat consequuntur maiores sapiente, eum repudiandae ab earum eius recusandae, autem nihil eligendi ea! Nemo quod sapiente, animi fugiat suscipit mollitia?'
//   },
//   { 
//     id: 3,
//     title: 'Le retour de l?????v??nementiel plomb?? par les p??nuries',
//     image: 'https://images.unsplash.com/photo-1601903060992-09a591e36f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80',
//     alt: 'Penurie',
//     date: '03 Janvier 2022',
//     excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat consequuntur maiores sapiente, eum repudiandae ab earum eius recusandae, autem nihil eligendi ea! Nemo quod sapiente, animi fugiat suscipit mollitia?'
//   },
// ]


// const events = [
//   { 
//     id: 'MtbDacjSV4vsHKD10eOr',
//     image: 'https://res.cloudinary.com/dxiep6zjl/image/upload/v1676465099/expo_articles/event_o9ewln.png',
//   },
//   { 
//     id: '57K1amSx2vDw85Yd2kJJ',
//     image: 'https://res.cloudinary.com/dxiep6zjl/image/upload/v1676465508/expo_articles/event2_pvuref.png',
//   },
//   { 
//     id: 3,
//     image: 'https://res.cloudinary.com/dxiep6zjl/image/upload/v1676465640/expo_articles/event3_feqw8j.png',
//   },
 
// ]

const logos = [
  {
    id: 9,
    logo: logo9
  },
  {
    id: 5,
    logo: logo7
  },
  {
    id: 1,
    logo: logo2
  },
  {
    id: 3,
    logo: logo3
  },
  {
    id: 6,
    logo: logo4
  },
  {
    id: 2,
    logo: logo1
  },
  {
    id: 8,
    logo: logo5
  },
  {
    id: 4,
    logo: logo6
  },
  {
    id: 7,
    logo: logo8 
  },
]


type Props = {
  events?: any
  articles?: any
}

const About: NextPageWithLayout = ({ events, articles }: Props) => {


  
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
         description="Organisateur d'??v??nements sous la baniere des valeurs Tadamsa"
         canonical="https://tadamsaexpo.com"
         openGraph={{
           url: 'https://www.tadamsaexpo.com',
           title: 'Tadamsa Expo',
           description: " Ready for tommorow's Algeria",
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
      title="L'histoire derri??re notre success" 
      subtitle='Qui sommes nous ?'
      backgroundImage='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80'
    />

  

      <Container maxWidth='lg' sx={{ marginTop: 14}}>
        <AboutTitle variant='h3' sx={{ '&:after': {backgroundColor: 'black'}}}>
          ?? propos de nous 
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
                      Expolorez des id??es
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                  nous sommes toujours ?? la recherche d???id??es novatrices et cr??atives pour faire ressortir nos ??v??nements. Notre ??quipe d???experts est constamment ?? la recherche des derni??res tendances de l???industrie, ?? l???exploration de nouvelles technologies et ?? la r??flexion sur de nouvelles fa??ons de mobiliser nos clients et leurs clients.                  </Typography>
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
                  <Typography variant='body2' color='text.secondary'>nous comprenons qu???une planification et une organisation ad??quates sont essentielles ?? la r??ussite de tout projet. Notre ??quipe est d??termin??e ?? travailler en ??troite collaboration avec nos clients pour comprendre leurs besoins et leurs objectifs particuliers, et nous ??laborons un plan de projet complet.  </Typography>
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
                      R??aliser & C??l??brer
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                  nous sommes fiers de notre capacit?? de concr??tiser nos id??es. nous travaillons sans rel??che pour nous assurer que chaque d??tail est parfait.Notre ??quipe est compos??e de professionnels qualifi??s qui sont des experts dans leurs domaines respectifs, et nous travaillons ensemble de mani??re transparente pour donner vie aux visions de nos clients.                  </Typography>
                </Box>
              </Box>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 10}}>
          <Typography variant='h4' fontFamily='Osande' gutterBottom>
              Une ambition sans pr??c??dent
          </Typography>
          <Typography variant='body1' color="text.secondary" gutterBottom>
          Tadamsa Expo est une entreprise dynamique et innovante bas??e en Alg??rie, ax??e sur la contribution ?? la croissance et au d??veloppement de l?????conomie du pays. En tant qu???acteur de premier plan dans l???industrie commerciale, nous nous sp??cialisons dans l???organisation et la gestion de foires commerciales, d???expositions et de conf??rences pour des clients locaux et internationaux.</Typography>
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
              Decouvrez notre entreprise de cr??ation d'??v??nements en Alg??rie, sp??cialis??e dans l'organisation d'??v??nements destin??s ?? contribuer au d??veloppement ??conomique de notre pays.
          </Typography>     
          <Typography variant='body2' > 
              Notre entreprise a ??t?? cr????e en 2021 et s'est rapidement impos??e sur le march?? des ??v??nements gr??ce ?? notre expertise et notre engagement ?? offrir des exp??riences m??morables pour nos clients. Nous sommes fiers de notre position de leader sur le march?? alg??rien et de notre capacit?? ?? organiser une grande vari??t?? d'??v??nements, allant des salons professionnels aux festivals en passant par les concerts, les expositions et les ??v??nements sportifs.          
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
              Notre objectif principal est de contribuer activement au d??veloppement ??conomique de l'Alg??rie en organisant des ??v??nements qui g??n??rent des revenus pour les entreprises locales et qui attirent des visiteurs de l'ext??rieur de la r??gion.
          </Typography>     
          <Typography variant='body2' > 
          Chez Tadamsa Expo, nous nous engageons ?? promouvoir la croissance ??conomique et le d??veloppement en Alg??rie en fournissant une plate-forme pour les entreprises locales et internationales d???interagir et de collaborer. Notre objectif est d?????tre une partie importante du progr??s de la nouvelle ??conomie ??mergente de l???Alg??rie, en favorisant l???entrepreneuriat, l???innovation et l???investissement dans le pays.       </Typography>     
        </Box>
      </LeftGrid>
      <ImageGrid item xs={12} md={6} order={{xs: 1, sm: 1, md: 2}}>
         <Image src={OfficeWork2} fill alt="Tadamsa expo office work" />
      </ImageGrid>
    </Grid>


    <Container maxWidth='lg' sx={{ marginTop: 14 }}>
      <AboutTitle variant='h3' sx={{ '&:after': { backgroundColor: '#000' }}}>
        Cr??ation & innovation
      </AboutTitle>
      <Typography
          variant='body1'
          color='text.secondary'
        >
          Les innovations cr??atives sont le moteur du progr??s et de l???avancement dans tous 
          les domaines. Ce sont les id??es, les solutions et les inventions qui repoussent les 
          limites, remettent en question le statu quo et inspirent le changement. retrouvez les ??v??nements organiser sous la banni??re de Tadamsa expo
        </Typography>
      <Grid container spacing={4} marginTop={6}>
        {
          events.map((elem: any, index: any) => (
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

   


     {/* <Box sx={{ marginTop: '100px'}} >
      <Grid container sx={{ backgroundColor: '#000'}}>
        <ImageGrid xs={12} md={6}>
          <Image src={BEVALG} fill alt="picture"  />
        </ImageGrid>
        <LeftGrid xs={12} md={6}>
          <Box>
            <AboutTitle variant='h3' fontFamily='Osande' gutterBottom> 
              ??v??nement Vedette
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
          Nos partenaires jouent un r??le essentiel dans notre r??ussite, et nous appr??cions leur soutien, leur expertise et leur contribution. Dans cette section, nous tenons ?? remercier nos pr??cieux partenaires pour leur soutien continu et leur collaboration. en les mettant en avant
        </Typography>
        <Grid container marginTop={6}>
          {
            logos.map(elem => (
              <Grid item xs={12} md={3} key={elem.id} sx={{ position: 'relative', textAlign: 'center'}}>
                <Image src={elem.logo} alt="logo" />
              </Grid>
            ))
          }
        </Grid>        
      </Container>
    </Box>

    {/* <Container maxWidth='lg' sx={{ marginTop: 14 }}>
      <AboutTitle
        variant='h3'
        sx={{ '&:after': {backgroundColor: 'black'}}}
        
      >
        Actualit?? ??v??nementiel
      </AboutTitle>
      <Grid container spacing={4} marginTop={3}>
        {
          articles.map((elem: any) => (
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
    </Container> */}

    
    <Footer />


    </>
  )
}


// Page Layout
About.getLayout = function getLayout(about: ReactElement) {
  return (
    <Layout>
      {about}
    </Layout> 
  )
}

export default About;