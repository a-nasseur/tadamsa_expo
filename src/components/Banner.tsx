import { Box, Typography, styled } from '@mui/material'
import React from 'react'

interface BannerProps {
  title?: string;
  subtitle?: string
}

const Banner = ({ title, subtitle }: BannerProps) => {
  

  // Styles
  const BannerContainer = styled(Box)(({ theme }) => ({
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        margin: '0 auto',
        backgroundImage: 'url(/mosque.jpeg)',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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

  return (
    <BannerContainer>
        <TitleContainer>
            <Box 
                sx={{ 

                    padding: 4, 
                    backgroundColor: 'rgba(0, 0, 0, .3)' , 
                    overflow: 'hidden'
                }}
            >
                <Typography
                    variant='h2'
                    fontFamily='osande'
                    // sx={{
                    //   '@keyframes slideIn': {
                    //     from: { transform: 'translateY(200%)'},
                    //     to: { transform: 'translateY(0)'}
                    //   },
                      
                    //   animation: 'slideIn linear .5s forwards'
                    // }}

                >
                   {title}
                </Typography>
                <Typography
                    variant='h5'
                    fontFamily='osande'
                    sx={{
                        '@keyframes slideIn': {
                            from: { transform: 'translateY(250%)'},
                            to: { transform: 'translateY(0)'}
                          },
                          animation: 'slideIn  linear 1.2s forwards'
                    }}
                >
                   {subtitle}
                </Typography>
            </Box>
        </TitleContainer>
    </BannerContainer>
  )
}

export default Banner