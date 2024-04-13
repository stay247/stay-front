import React from 'react';
import '../assets/styles/style.scss';
import {Outlet} from 'react-router-dom';
import {createTheme, ThemeProvider, Box, Container, Paper} from '@mui/material';
import useAppContext from '../hooks/appContext';
import MenuComponent from '../components/common/MenuComponent';
import HeaderComponent from '../components/common/HeaderComponent';
import PlayerComponent from '../components/common/PlayerComponent';
import SnackbarComponent from '../components/common/SnackbarComponent';

const defaultTheme = createTheme({
  typography: {
    fontFamily: ['Apple SD Gothic Neo', 'Pretendard', '-apple-system', 'Roboto', 'sans-serif'].join(','),
    fontSize: 15,
    fontWeightRegular: 300,
    fontWeightBold: 500,
  },
});

const MainLayout: React.FC = () => {
  const {backgroundImage, isLoggedIn} = useAppContext();

  const styles = {
    background: {
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
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    paper: {
      display: 'flex',
      width: '100%',
      height: '90%',
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
      borderRadius: '30px',
    },
    contentBox: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    contentInnerBox: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      overflow: 'hidden auto',
    },
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={styles.background}/>
      <Container maxWidth="xl" sx={styles.container}>
        <Paper elevation={3} sx={styles.paper}>
          {isLoggedIn && <MenuComponent/>}
          <Box sx={styles.contentBox}>
            {isLoggedIn && <HeaderComponent/>}
            <Box sx={styles.contentInnerBox}>
              <Outlet/>
            </Box>
            {isLoggedIn && <PlayerComponent/>}
          </Box>
        </Paper>
      </Container>
      <SnackbarComponent/>
    </ThemeProvider>
  );
};

export default MainLayout;