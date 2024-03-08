import React, {useState} from 'react';
import {Grid, Typography, IconButton} from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AspectRatioRoundedIcon from '@mui/icons-material/AspectRatioRounded';

interface ControlButtonType {
  icon: React.ReactElement;
  onClick: () => void;
  active?: boolean;
  size?: string;
}

const ControlButton: React.FC<ControlButtonType> = ({icon, onClick, active = false, size = '25px'}) => (
  <IconButton onClick={onClick} sx={{
    p: '1rem',
    m: '1rem',
    borderRadius: '50%',
    color: active ? 'white' : 'rgba(255, 255, 255, 0.5)',
    '&:hover': {
      color: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  }}>
    {React.cloneElement(icon, {sx: {fontSize: size}})}
  </IconButton>
);

const PlayerComponent: React.FC = () => {
  const [isEditEqualizer, setIsEditEqualizer] = useState(false);
  const [isEditTimer, setIsEditTimer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditVolume, setIsEditVolume] = useState(false);
  const [volume, setVolume] = useState(100);
  const [isFavorite, setIsFavorite] = useState(false);

  const controlButtons = [
    {icon: <TuneRoundedIcon/>, onClick: () => setIsEditEqualizer(!isEditEqualizer), active: isEditEqualizer},
    {icon: <TimerRoundedIcon/>, onClick: () => setIsEditTimer(!isEditTimer), active: isEditTimer},
    {
      icon: isPlaying ? <PauseRoundedIcon/> : <PlayArrowRoundedIcon/>,
      onClick: () => setIsPlaying(!isPlaying),
      active: true,
      size: '80px'
    },
    {
      icon: volume > 0 ? <VolumeUpRoundedIcon/> : <VolumeOffRoundedIcon/>,
      onClick: () => setIsEditVolume(!isEditVolume),
      active: isEditVolume
    },
    {
      icon: isFavorite ? <FavoriteRoundedIcon/> : <FavoriteBorderRoundedIcon/>,
      onClick: () => setIsFavorite(!isFavorite),
    },
  ];

  return (
    <Grid container sx={{
      position: 'absolute',
      bottom: 0,
      minWidth: '580px',
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)',
    }}>
      <Grid item xs={12} lg={3} p={4} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Typography variant="h5" gutterBottom fontWeight={500} sx={{color: 'white'}}>
          Ambient Sounds
        </Typography>
        <Typography variant="body1" sx={{color: 'rgba(255, 255, 255, 0.5)'}}>
          Relax & Sleep Well
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6} p={4} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {controlButtons.map((button, index) => (
          <ControlButton key={index}
                         icon={button.icon}
                         onClick={button.onClick}
                         active={button.active}
                         size={button.size}/>
        ))}
      </Grid>
      <Grid item xs={12} lg={3} p={4} sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
        <ControlButton icon={<AspectRatioRoundedIcon/>} onClick={() => {}}/>
      </Grid>
    </Grid>
  );
};

export default PlayerComponent;
