import React, {useState} from 'react';
import {Paper, Typography, Box} from '@mui/material';
import {v4 as uuidv4} from 'uuid';
import Carousel from "react-spring-3d-carousel";
import {config} from "react-spring";
import {useBackgroundStore} from '../stores/backgroundStore';

const CollectionPage: React.FC = () => {
  const {backgroundImage} = useBackgroundStore();
  const slides = [
    {
      key: uuidv4(),
      content: <Paper elevation={24} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        width: '40rem',
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
      }}>
        <Typography variant="body2" sx={{color: 'white'}}>
          Ambient Sounds
        </Typography>
        <Typography variant="caption" sx={{color: 'rgba(255, 255, 255, 0.5)'}}>
          Relax & Sleep Well
        </Typography>
      </Paper>
    },
    {
      key: uuidv4(),
      content: <Paper elevation={24} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        width: '40rem',
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
      }}/>
    },
    {
      key: uuidv4(),
      content: <Paper elevation={24} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        width: '40rem',
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
      }}/>
    },
    {
      key: uuidv4(),
      content: <Paper elevation={24} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        width: '40rem',
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
      }}/>
    },
    {
      key: uuidv4(),
      content: <Paper elevation={24} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        width: '40rem',
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
      }}/>
    },
    {
      key: uuidv4(),
      content: <Paper elevation={24} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        width: '40rem',
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
      }}/>
    },
    {
      key: uuidv4(),
      content: <Paper elevation={24} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        width: '40rem',
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
      }}/>
    },
    {
      key: uuidv4(),
      content: <Paper elevation={24} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        width: '40rem',
        height: '400px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
      }}/>
    }
  ];
  const table = slides.map((element, index) => {
    return {...element, onClick: () => setGoToSlide(index)};
  });
  const [goToSlide, setGoToSlide] = useState(null);

  return (
    <Carousel
      slides={table}
      goToSlide={goToSlide}
      offsetRadius={3}
      showNavigation={false}
      animationConfig={config.molasses}
    />
  );
};

export default CollectionPage;