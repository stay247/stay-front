import React from 'react';
import {Button, Container, Typography, Stack, Box, Link} from '@mui/material';
import logoImage from '../assets/images/logo/white.png';
import naverImage from '../assets/images/login/naver.png';
import kakaoImage from '../assets/images/login/kakao.png';
import googleImage from '../assets/images/login/google.png';

// Define types for your OAuth provider's information
type OAuthProvider = {
  name: string;
  bgColor: string;
  textColor: string;
  fontWeight?: number;
  fontFamily?: string;
  logo: string;
  onClick: () => void;
}

const LoginPage: React.FC = () => {
  // OAuth login handlers
  const handleOAuthLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  // List of OAuth providers for mapping
  const oauthProviders: OAuthProvider[] = [
    {
      name: 'Naver',
      bgColor: '#03C75A',
      textColor: 'rgba(0, 0, 0, 0.85)',
      logo: naverImage,
      onClick: () => handleOAuthLogin('Naver')
    },
    {
      name: 'Kakao',
      bgColor: '#FEE500',
      textColor: 'rgba(0, 0, 0, 0.85)',
      fontWeight: 600,
      logo: kakaoImage,
      onClick: () => handleOAuthLogin('Kakao')
    },
    {
      name: 'Google',
      bgColor: '#FFFFFF',
      textColor: 'rgba(0, 0, 0, 0.54)',
      fontFamily: 'Roboto',
      logo: googleImage,
      onClick: () => handleOAuthLogin('Google')
    },
  ];

  // Common style for OAuth buttons
  const getOAuthButtonStyle = (bgColor: string, textColor: string) => ({
    height: '40px',
    pl: 1,
    pr: 3,
    backgroundColor: bgColor,
    color: textColor,
    '&:hover': {
      backgroundColor: bgColor,
      opacity: 0.9,
    },
    textTransform: 'none',
  });

  return (
    <Container maxWidth="sm" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      height: '100vh',
      background: 'radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)',
    }}>
      <Box component="img" src={logoImage} alt="Logo" sx={{width: '30%', alignSelf: 'center'}}/>

      <Typography variant="h5" gutterBottom>
        Stay With Us
      </Typography>
      <Typography variant="body2" sx={{
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'center',
      }}>
        Embark on a journey of sound with Stay.
        <br/>
        Create your perfect playlist to unwind and find your peace.
      </Typography>

      <Box sx={{width: '100%', display: 'flex', alignItems: 'center', my: 2}}>
        <Box sx={{flexGrow: 1, height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}></Box>
        <Typography variant="body1" sx={{mx: 2, color: 'rgba(255, 255, 255, 0.75)'}}>
          Login to Your Account
        </Typography>
        <Box sx={{flexGrow: 1, height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}></Box>
      </Box>

      <Stack direction="column" spacing={2} sx={{mb: 2}}>
        {oauthProviders.map(({name, bgColor, textColor, logo, onClick}) => (
          <Button key={name} variant="contained" onClick={onClick} sx={getOAuthButtonStyle(bgColor, textColor)}>
            <Box component="img" src={logo} alt={name} sx={{width: '18px', height: '18px', mr: 3}}/>
            Login with {name}
          </Button>
        ))}
      </Stack>

      <Typography variant="caption" sx={{
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'center',
      }}>
        If you encounter any issues with user authentication,
        <br/>
        please contact
        <Link href="https://github.com/stay247" sx={{mx: 1, color: 'rgba(255, 255, 255, 0.75)'}}>Stay team</Link>
        for assistance.
      </Typography>
    </Container>
  );
};

export default LoginPage;