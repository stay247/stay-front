import React from 'react';
import {List} from "@mui/material";
import MenuItemComponent from './MenuItemComponent';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logoImage from "../../assets/images/logo/white.png";

const menuItems = [
  {icon: <HomeRoundedIcon/>, link: "/"},
  {icon: <MusicNoteRoundedIcon/>, link: "/music"},
  {icon: <LibraryMusicRoundedIcon/>, link: "/library"},
  {icon: <PersonRoundedIcon/>, link: "/user"},
  {icon: <SettingsOutlinedIcon/>, link: "/setting", mt: 'auto'},
];

const MenuComponent: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100px',
      height: '100%',
      padding: '2rem 0',
      backgroundColor: 'rgba(255, 255, 255, 0.025)',
    }}>
      <img src={logoImage} alt='Logo' style={{
        width: '35%',
        alignSelf: 'center',
        marginBottom: '2rem',
      }}/>
      <List sx={{
        flexGrow: 1,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {menuItems.map((item, index) => (
          <MenuItemComponent key={index} icon={item.icon} link={item.link} mt={item.mt}/>
        ))}
      </List>
    </div>
  );
};

export default MenuComponent;