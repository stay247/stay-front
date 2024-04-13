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

const ControlButton: React.FC<ControlButtonType> = ({icon, onClick, active = false, size = '20px'}) => (
  <IconButton onClick={onClick} sx={{
    p: 1,
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
  const [volume] = useState(100);
  const [isFavorite, setIsFavorite] = useState(false);

  const controlButtons = [
    {icon: <TuneRoundedIcon/>, onClick: () => setIsEditEqualizer(!isEditEqualizer), active: isEditEqualizer},
    {icon: <TimerRoundedIcon/>, onClick: () => setIsEditTimer(!isEditTimer), active: isEditTimer},
    {
      icon: isPlaying ? <PauseRoundedIcon/> : <PlayArrowRoundedIcon/>,
      onClick: () => setIsPlaying(!isPlaying),
      active: true,
      size: '35px'
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
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 4rem)',
      py: 1,
      px: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      borderRadius: '15px',
      boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2),' +
        '0px 24px 38px 3px rgba(0,0,0,0.14),' +
        '0px 9px 46px 8px rgba(0,0,0,0.12)',
      zIndex: 1000,
    }}>
      <Grid item xs={4} sx={{
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <Typography variant="body2" noWrap sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          Ambient Sounds
        </Typography>
        <Typography variant="caption" noWrap sx={{
          ml: 2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: 'rgba(255, 255, 255, 0.5)',
        }}>
          Relax & Sleep Well
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {controlButtons.map((button, index) => (
          <ControlButton key={index}
                         icon={button.icon}
                         onClick={button.onClick}
                         active={button.active}
                         size={button.size}/>
        ))}
      </Grid>
      <Grid item xs={4} sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <ControlButton icon={<AspectRatioRoundedIcon/>} onClick={() => {}}/>
      </Grid>
    </Grid>
  );
};

export default PlayerComponent;
