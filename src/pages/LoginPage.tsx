import React from 'react';
import {Button, Container, Typography, Stack} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage: React.FC = () => {
  // Implement Google OAuth flow
  const handleGoogleLogin = () => {
  };

  // Implement Kakao OAuth flow
  const handleKakaoLogin = () => {
  };

  // Implement Naver OAuth flow
  const handleNaverLogin = () => {
  };

  return (
    <Container maxWidth="sm" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh', // Ensure the container fills the viewport height
      gap: 2, // Adds space between children
    }}>
      <Typography variant="h5" gutterBottom sx={{
        color: 'white',
        textAlign: 'center',
      }}>
        Scale your company into Web3
      </Typography>
      <Typography variant="body2" gutterBottom sx={{
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'center',
      }}>
        I will try to share inspirations from our progress in our new process.
        We have too many things to share. Will be back with more soon.
      </Typography>
      <Stack direction="column" spacing={2}>
        <Button startIcon={<GoogleIcon/>} variant="contained" onClick={handleGoogleLogin}>
          Sign in with Google
        </Button>
        <Button startIcon={<GoogleIcon/>} variant="contained" onClick={handleKakaoLogin}
                sx={{backgroundColor: '#FEE500', color: 'black'}}>
          Sign in with Kakao
        </Button>
        <Button startIcon={<GoogleIcon/>} variant="contained" onClick={handleNaverLogin}
                sx={{backgroundColor: '#03C75A'}}>
          Sign in with Naver
        </Button>
      </Stack>
    </Container>
  );
};

export default LoginPage;