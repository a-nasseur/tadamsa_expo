import { Box, Typography, styled } from '@mui/material';
import React from 'react'

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
      from: { transform: 'scale(.9)' },
      to: { transform: 'scale(1)', letterSpacing: '5px'}
    },
    animation: 'zoomIn linear 4s forwards',
    color: 'white',
    fontWeight: 700,
    overflow: 'hidden', 
    whiteSpace: 'nowrap',
    margin: '0 auto',
    // letterSpacing: '.15em',
  }));

  return (
    <>
        <VideoContainer component='div'>
            <video className='video' autoPlay muted loop>
                <source src="/videos/header.mp4" type="video/mp4"/>
            </video>
            <TitleContainer>
            <Box sx={{ 
                padding: 4, 
                backgroundColor: 'rgba(0, 0, 0, .3)' , 
                overflow: 'hidden'
              }}
              >
              <HeaderTitle variant='h3'>
                Ready For Tomorrow's Algeria
              </HeaderTitle>
            </Box>
            </TitleContainer>
        </VideoContainer>
    </>
  )
}

export default Header