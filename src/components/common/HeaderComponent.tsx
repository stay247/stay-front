import React from 'react';
import {Box, IconButton, Typography} from '@mui/material';
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
    padding: '0.5rem',
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
    display: 'flex',
    alignItems: 'center',
    padding: '2rem 2rem 0',
  }}>
    <Typography variant="h6" sx={{
      flex: 1,
      padding: '0 1rem',
      whiteSpace: 'nowrap',
    }}>
      Recommended For You Today
    </Typography>
    <ControlButton icon={MoreHorizIcon}/>
  </Box>
);

export default HeaderComponent;