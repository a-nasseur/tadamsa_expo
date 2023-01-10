import { IconButton, styled } from '@mui/material';
import React from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

type Props = {

}

const VolumeButton = ({ }: Props) => {
  const [volume, setVolume] = React.useState<boolean>(false);

  // functions
  const handleVolumeOutput = () => {
    setVolume(!volume)
    const videoPlayer = document.getElementsByTagName('video');
    const playerEvents = videoPlayer[0];

    playerEvents.muted = !playerEvents.muted

  }

  // effects
  React.useEffect(() => {
    if(typeof window !== 'undefined'){
      const volumeBtn = document.getElementById('volumeButton');
      volumeBtn?.addEventListener('click', handleVolumeOutput);


      return () => volumeBtn?.removeEventListener('click', handleVolumeOutput);
      
    }

  }, [volume])



  // Styles
  const VolumeButton = styled(IconButton)(({ theme }) => ({
    '@keyframes zoomInOut': {
      '0%': {transform: 'scale(1.0)'},
      '50%': {transfrom: 'scale(1.2)'},
      '100%': { transform: 'scale(1.0)'}
    },
    animationName: 'zoomInOut',
    animationDelay: '1s',
    animationDuration: '.4s',
    animationIterationCount: 2,
    position: 'absolute',
    bottom: '30px',
    right: '30px',
    color: '#fff'
  }));


  return (
    <VolumeButton id="volumeButton">
    {
      volume ?  <VolumeUpIcon color='inherit' fontSize='large'/> : <VolumeOffIcon color='inherit' fontSize='large'/>  
    }
  </VolumeButton>
  )
}

export default VolumeButton