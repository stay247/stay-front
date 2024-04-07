import React from 'react';
import '../assets/styles/style.scss';
import {Outlet} from 'react-router-dom';
import {createTheme, ThemeProvider, Box, Container, Paper} from '@mui/material';
import MenuComponent from '../components/common/MenuComponent';
import HeaderComponent from '../components/common/HeaderComponent';
import PlayerComponent from '../components/common/PlayerComponent';
import {useBackgroundStore} from '../store/backgroundStore';

const defaultTheme = createTheme({
  typography: {
    fontFamily: ['Pretendard', '-apple-system', 'Roboto', 'sans-serif'].join(','),
    fontSize: 15,
    fontWeightRegular: 300,
    fontWeightBold: 500,
  },
});

const MainLayout: React.FC = () => {
  const {backgroundImage} = useBackgroundStore();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: -1,
      }}/>
      <Container maxWidth="xl" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <Paper elevation={3} sx={{
          display: 'flex',
          width: '100%',
          height: '90%',
          overflow: 'hidden',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          borderRadius: '30px',
        }}>
          <MenuComponent/>
          <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}>
            <HeaderComponent/>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              overflow: 'hidden',
              padding: '2rem',
            }}>
              <Outlet/>
            </Box>
            <PlayerComponent/>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;