import React from 'react';
import {NavLink} from 'react-router-dom';
import {Box, List, ListItem, ListItemButton, ListItemIcon, Avatar} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logoImage from '../../assets/images/logo/white.png';
import profileImage from '../../assets/images/KakaoTalk_20240407_205457473.jpg';

const MenuComponent: React.FC = () => {
  const styles = {
    menuItem: {
      justifyContent: 'center',
      p: 3,
      '&:hover': {backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white'},
      color: 'rgba(255, 255, 255, 0.5)',
      '&.active': {color: 'white'},
    },
    menuBox: {
      display: 'flex',
      flexDirection: 'column',
      width: '100px',
      height: '100%',
      py: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.025)',
    },
  };

  const menuItems = [
    {icon: <HomeRoundedIcon/>, link: '/'},
    {icon: <LibraryMusicRoundedIcon/>, link: '/collection'},
    {icon: <MusicNoteRoundedIcon/>, link: '/item'},
    {icon: null, link: '/user', mt: 'auto'},
    {icon: <SettingsOutlinedIcon/>, link: '/setting'},
  ];

  return (
    <Box sx={styles.menuBox}>
      <Box component="img" src={logoImage} alt="Logo" sx={{width: '30%', alignSelf: 'center', mb: 4}}/>
      <List sx={{display: 'flex', flexDirection: 'column', flexGrow: 1, p: 0}}>
        {menuItems.map(({icon, link, mt}) =>
          <ListItem disablePadding key={link} sx={{mt}}>
            <ListItemButton component={NavLink} to={link} sx={styles.menuItem}>
              {icon ? (
                <ListItemIcon sx={{minWidth: 'auto', color: 'inherit'}}>
                  {React.cloneElement(icon, {sx: {fontSize: '20px'}})}
                </ListItemIcon>
              ) : (
                <Avatar src={profileImage} sx={{width: 35, height: 35}}/>
              )}
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default MenuComponent;
