import React from 'react';
import "../assets/styles/style.scss";
import {Outlet} from "react-router-dom";
import {createTheme, ThemeProvider, Container, Paper} from "@mui/material";
import {MenuComponent} from '../components/menu';

const MainLayout: React.FC = () => {
  const defaultTheme = createTheme({
    typography: {
      fontFamily: ['Pretendard', '-apple-system', 'Roboto', 'sans-serif'].join(','),
      fontSize: 15,
      fontWeightRegular: 300,
      fontWeightBold: 500,
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth='xl' style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <Paper elevation={3} style={{
          display: 'flex',
          width: '100%',
          height: '90%',
          overflow: 'hidden',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          borderRadius: '30px',
        }}>
          <MenuComponent/>
          <div style={{flex: 1}}>
            <Outlet/>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;