import React from 'react';
import {NavLink} from 'react-router-dom';
import {Box, List, ListItem, ListItemButton, ListItemIcon} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logoImage from '../../assets/images/logo/white.png';

interface MenuItemType {
  icon: React.ReactElement;
  link: string;
  mt?: string;
}

const menuItems: MenuItemType[] = [
  {icon: <HomeRoundedIcon/>, link: '/'},
  {icon: <MusicNoteRoundedIcon/>, link: '/music'},
  {icon: <LibraryMusicRoundedIcon/>, link: '/library'},
  {icon: <PersonRoundedIcon/>, link: '/user'},
  {icon: <SettingsOutlinedIcon/>, link: '/setting', mt: 'auto'},
];

const MenuItemComponent: React.FC<MenuItemType> = ({icon, link, mt}) => (
  <ListItem disablePadding sx={{mt}}>
    <ListItemButton component={NavLink} to={link} sx={{
      justifyContent: 'center',
      padding: '1.5rem',
      '&:hover': {backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white'},
      color: 'rgba(255, 255, 255, 0.5)',
      '&.active': {color: 'white'},
    }}>
      <ListItemIcon sx={{minWidth: 'auto', color: 'inherit'}}>
        {icon}
      </ListItemIcon>
    </ListItemButton>
  </ListItem>
);

const MenuComponent: React.FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    width: '100px',
    height: '100%',
    padding: '2rem 0',
    backgroundColor: 'rgba(255, 255, 255, 0.025)',
  }}>
    <Box component="img" src={logoImage} alt="Logo" sx={{
      width: '35%',
      alignSelf: 'center',
      marginBottom: '2rem',
    }}/>
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      padding: 0,
    }}>
      {menuItems.map((item, index) => (
        <MenuItemComponent key={index} {...item} />
      ))}
    </List>
  </Box>
);

export default MenuComponent;
