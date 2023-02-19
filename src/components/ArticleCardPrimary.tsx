import { Box, Typography, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react'

type Props = {
    title?: string;
    slug?: string;
    subTitle?: string;
    backgroundImage?: string;
}

const ArticleCardPrimary = ({title, slug, subTitle, backgroundImage}: Props) => {
  
  // Styles
  const ArticlesSection = styled(Box)(({ theme }) => ({
    overflow: 'hidden',
  }));


  const ArticleContainer = styled(Box)(({ theme }) => ({
    '@keyframes zoomIn': {
      '0%': { transform: 'scale(1)'},
      '100%': { transform: 'scale(1.02)'}
    },
    '@keyframes title': {
      '0%': { transform: 'translateX(0px)'},
      '100%': { transform: 'translateX(16px)', opacity: 1}
    },
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    height: 380,
    backgroundPosition: 'center',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    '&:hover': {
      transition: 'all .4s ease',
      animation: 'zoomIn .4s linear forwards',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'rgba(0, 0, 0, .6)',
        width: '100%',
        height: '100%'
      }
    },
    '&:hover #title-box': {
      animation: 'title .8s ease forwards'
    },
    '&:hover #title-box::after': {
      content: '""',
      backgroundColor: 'red',
      width: 10,
      height: 2,
    }
  }));

  const ArticleCard = styled(Box)(({ theme }) => ({
    padding: 32,
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    overflow: 'hidden'
  }));

  const ArticleCardContentBox = styled(Box)(({ theme }) => ({
    opacity: .3
  }));





  return (
    <ArticlesSection sx={{overflow: 'hidden'}}>
        <ArticleContainer id='featured'>
            <ArticleCard>
                <ArticleCardContentBox id="title-box">
                  <Link href={`/articles/${slug}`} passHref>
                      <Typography
                          variant='h6'
                          color='#fff'
                          fontFamily='Osande'

                      >
                          {title}
                      </Typography>
                  </Link>
                    <Typography
                        variant='body2'
                        color='#fff'
                        gutterBottom
                        fontFamily="Osande"
                        paddingRight={3}

                    >
                        {subTitle}
                    </Typography>
                </ArticleCardContentBox>
            </ArticleCard>
        </ArticleContainer>
    </ArticlesSection>
  )
}

export default ArticleCardPrimary