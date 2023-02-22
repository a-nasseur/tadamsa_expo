import { Box, IconButton, Typography, styled } from '@mui/material';
import React from 'react'
import VolumeButton from './VolumeButton';


type Props = {}

const Header = (props: Props) => {


  // styles
  const VideoContainer = styled(Box)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    margin: '0 auto',
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
    width: '100vw',
    height: '100vh',
    position: 'absolute', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }));

  const HeaderTitle = styled(Typography)(({ theme }) => ({
    '@keyframes zoomIn': {
      from: { transform: 'scale(.96)', opacity: 0 },
      to: { transform: 'scale(1)', letterSpacing: '5px', opacity: 1}
    },
    animation: 'zoomIn linear 2s forwards',
    fontFamily: 'osande',
    color: 'white',
    fontWeight: 700,
    margin: '0 auto',
    width: 'fit-content'
    
    // letterSpacing: '.15em',
  }));


  const TitleBackground = styled(Box)(({ theme }) => ({
    padding: 32, 
    backgroundColor: 'rgba(0, 0, 0, .3)' ,

  }));



  return (
    <>
        <VideoContainer component='div'>
            <video className='video' id="video" autoPlay muted loop>
                <source src="/videos/header.webm" type="video/webm"/>
            </video>
            <TitleContainer>
              <TitleBackground>
                <HeaderTitle variant='h3'>
                  Ready for tommorow's Algeria
                </HeaderTitle>
              </TitleBackground>
            </TitleContainer>
            <VolumeButton  />
        </VideoContainer>
    </>
  )
}

export default Header