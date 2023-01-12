import { Box, Typography, styled } from '@mui/material'
import React from 'react'

interface BannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const Banner = ({ title, subtitle, backgroundImage, children }: BannerProps) => {
  

  // Styles
  const BannerContainer = styled(Box)(({ theme }) => ({
        position: 'relative',
        width: '100%',
        margin: '0 auto',
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        '&::before': {
            content: '""',
            position: 'absolute',
            background: 'rgba(0, 0, 0, 0.2)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            overflow: 'hidden',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }
  }));


  const TitleContainer = styled(Box)(({ theme }) => ({
    top: 0, 
    left: 0,
    color: 'white',
    width: '100vw',
    height: '100vh',
    position: 'absolute', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column'
  }));


  const Title = styled(Typography)(({ theme }) => ({
    '@keyframes slideIn': {
      from: {opacity: 0, transform: 'translateY(200%)'},
      to: {opacity: 1,  transform: 'translateY(0)'}
    },
    
    animation: 'slideIn linear .5s forwards',
    fontFamily: 'Osande'
  }));


  const SubTitle = styled(Typography)(({ theme }) => ({
    opacity: 0,
    '@keyframes slideIn': {
        from: {opacity: 0, transform: 'translateY(250%)'},
        to: {opacity: 1,  transform: 'translateY(0)'}
      },
    animation: 'slideIn .2s linear .5s forwards',
    fontFamily: 'Osande'
  }));



  return (
    <BannerContainer id="banner">
        <TitleContainer>
            <Box 
                sx={{ 

                    padding: 4, 
                    backgroundColor: 'rgba(0, 0, 0, .3)' , 
                    overflow: 'hidden'
                }}
            >
                <Title variant='h2'>
                   {title}
                </Title>
                <SubTitle variant='h4' >
                   {subtitle}
                </SubTitle>
            </Box>
              {children}
        </TitleContainer>
    </BannerContainer>
  )
}

export default Banner