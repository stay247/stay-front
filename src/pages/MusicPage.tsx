import React from 'react';
import {Paper} from '@mui/material';
import {useBackgroundStore} from '../store/backgroundStore';

const MusicPage: React.FC = () => {
  const {backgroundImage} = useBackgroundStore();

  return (
    <Paper elevation={3} sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    </Paper>
  );
};

export default MusicPage;