import React, { useEffect, useState } from 'react'
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { NextSeo } from 'next-seo'



import Footer from '../../src/components/Footer'
import Layout from '../../src/components/Layout';
import Banner from '../../src/components/Banner'
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import ArticleCardPrimary from '../../src/components/ArticleCardPrimary';

type Props = {}

const Articles: NextPageWithLayout = (props: Props) => {
  const [featuredArticles, setFeaturedArticles] = useState<any>();
  const [remainingArticles, setRemainingArticles] = useState<any>();


  // Styles
  const SectionContainer = styled(Container)(({ theme }) => ({
    marginTop: 100,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    }
  }));

  const SectionTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Osande',
    paddingBottom: '20px',
    marginBottom: 60,
    '&:after': { 
      display: 'block', 
      marginTop: '10px', 
      height: '4px', 
      width: '120px', 
      backgroundColor: 'white',
      content: '""'
    }
  }));



  const articles = [
    {
      id: 1,
      title: "Les start ups s'organisent",
      subTitle: 'Une incroyable atmosphere autour des evenememnt tech',
      featured: false,
      backgroundImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 2,
      title: "Organisation des manifestations musicales",
      subTitle: "Le minsitere de l'art et de la culture, nouvelle legislations",
      featured: true,
      backgroundImage: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 3,
      title: "Forum des industriels de la boissons",
      subTitle: "Les retombers de l'economie de la consommations sur le producteur",
      featured: false,
      backgroundImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 4,
      title: "Relever la technologie",
      subTitle: 'Un evenement sous la banniere de tadamsa expo',
      featured: false,
      backgroundImage: 'https://images.unsplash.com/photo-1617777934845-a818fd6e1bcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80'
    },
    {
      id: 5,
      title: "Dinner dans un chateau ambulant",
      subTitle: 'Une incroyable atmosphere autour des evenememnt tech',
      featured: false,
      backgroundImage: 'https://images.unsplash.com/photo-1591189824978-f02efb41ae13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1916&q=80'
    },
    {
      id: 6,
      title: "Les start ups s'organisent",
      subTitle: 'Une incroyable atmosphere autour des evenememnt tech',
      featured: false,
      backgroundImage: 'https://images.unsplash.com/photo-1569863959165-56dae551d4fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
    },
  ]

  // Handlers
  
  // handle featured articles
  const extractFeaturedArticle = async (artilces: any) => {
    // setting up the featured article
    const featured = await articles.filter(elem => elem.featured);

    const remainingArticles = await articles.filter(elem => elem.id !== featured[0].id);

    const secondaryFeaturedArticle = remainingArticles[0]


    // Updating featured articles state
    setFeaturedArticles({
      featured: featured[0],
      secondaryFeaturedArticle
    });

    const remaining = remainingArticles.slice(1);

    // Updating the remaining articles state
    setRemainingArticles(remaining);
    
  }

  useEffect(() => {
    // Filtering artciles on components first mount
    extractFeaturedArticle(articles);

  }, []);




  return (
    <>
      <NextSeo 
         title="Tadamsa Expo | Actualités"
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
      title="Actualités Évènementiel "  
      subtitle='Restez au courants'
      backgroundImage='https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80'
    />

    <SectionContainer maxWidth='xl'>
      <SectionTitle 
        variant='h3' 
        gutterBottom
        sx={{ '&:after': {backgroundColor: 'black'}}}>
          Actualité 
      </SectionTitle>
      <Grid container>
        {
          featuredArticles && 
          <>
            <Grid item xs={12} md={8}  sx={{ overflow: 'hidden'}}>
              <ArticleCardPrimary 
                title={featuredArticles['featured'].title}
                subTitle={featuredArticles['featured'].subTitle}
                backgroundImage={featuredArticles['featured'].backgroundImage}
              />
            </Grid>
            <Grid item xs={12} md={4}  sx={{ overflow: 'hidden'}}>
              <ArticleCardPrimary 
                title={featuredArticles['secondaryFeaturedArticle'].title}
                subTitle={featuredArticles['secondaryFeaturedArticle'].subTitle}
                backgroundImage={featuredArticles['secondaryFeaturedArticle'].backgroundImage}
              />
            </Grid>
          </>
        }
      </Grid>
      <Grid container>
        {
          remainingArticles &&

          remainingArticles.map((elem: any) => (
            <Grid item key={elem.id} xs={12} md={4}>    
              <ArticleCardPrimary 
                 title={elem.title}
                 subTitle={elem.subTitle}
                 backgroundImage={elem.backgroundImage}              
              />
            </Grid>
          ))
        }
      </Grid>
    </SectionContainer>

    
    <Footer />
    
    </>
  )
}

Articles.getLayout = function getLayout(articles: ReactElement){
  return (
    <Layout>
      {articles}
    </Layout>
  )
}

export default Articles;