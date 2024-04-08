import React from 'react';
import {Box, IconButton, TextField, InputAdornment} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface ControlButtonType {
  icon: React.ElementType;
  onClick?: () => void;
  active?: boolean;
  size?: string;
}

const ControlButton: React.FC<ControlButtonType> = ({
                                                      icon: Icon,
                                                      onClick = () => {},
                                                      size = '20px',
                                                    }) => (
  <IconButton onClick={onClick} sx={{
    p: 1,
    borderRadius: '50%',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    '& .MuiSvgIcon-root': {
      fontSize: size,
    },
  }}>
    <Icon/>
  </IconButton>
);

const HeaderComponent: React.FC = () => (
  <Box sx={{
    position: 'absolute',
    top: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 4rem)',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000,
  }}>
    <ControlButton icon={ArrowBackIcon}/>
    <TextField
      size="small"
      placeholder="Search collection, item kewords"
      sx={{
        flex: 1,
        mx: 2,
        '& .MuiOutlinedInput-root': {
          color: 'white',
          fontSize: '0.9375rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '30px',
          boxShadow: 'inset 0 4px 4px -4px rgba(0, 0, 0, 0.1)',
          '& fieldset': {
            display: 'none',
          },
          '&:hover fieldset': {
            display: 'none',
          },
          '&.Mui-focused fieldset': {
            display: 'none',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '0.9375rem',
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{
              color: 'rgba(255, 255, 255, 0.5)',
            }}/>
          </InputAdornment>
        ),
      }}
    />
    <ControlButton icon={MoreHorizIcon}/>
  </Box>
);

export default HeaderComponent;