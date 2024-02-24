import React from 'react';
import {NavLink} from "react-router-dom";
import {ListItem, ListItemIcon, ListItemButton} from "@mui/material";
import {MenuItemType} from './menuTypes';

const MenuItemComponent: React.FC<MenuItemType> = ({icon, link, mt}) => {
  return (
    <ListItem disablePadding sx={{mt: mt}}>
      <ListItemButton component={NavLink} to={link} sx={{
        justifyContent: 'center',
        padding: '1.5rem',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          color: 'white',
        },
        color: 'rgba(255, 255, 255, 0.5)',
        '&.active': {
          color: 'white',
        },
      }}>
        <ListItemIcon sx={{
          minWidth: 'auto',
          color: 'inherit',
        }}>
          {icon}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItemComponent;