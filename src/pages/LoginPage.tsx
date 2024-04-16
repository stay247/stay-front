import React, { useEffect } from 'react';
import {Button, Container, Typography, Stack, Box, Link} from '@mui/material';
import logoImage from '../assets/images/logo/white.png';
import naverImage from '../assets/images/login/naver.png';
import kakaoImage from '../assets/images/login/kakao.png';
import googleImage from '../assets/images/login/google.png';
import {useQuery, setCookie} from '../hooks/appUtil';
import {HTTP} from '../hooks/apiClient';

// Define types for your OAuth provider's information
type OAuthProvider = {
  name: string;
  bgColor: string;
  textColor: string;
  fontWeight: number;
  fontFamily: string;
  logo: string;
}

// List of OAuth providers for mapping
const oauthProviders: OAuthProvider[] = [
  {
    name: 'Naver',
    bgColor: '#03C75A',
    textColor: 'rgba(0, 0, 0, 0.85)',
    fontWeight: 500,
    fontFamily: 'inherit',
    logo: naverImage,
  },
  {
    name: 'Kakao',
    bgColor: '#FEE500',
    textColor: 'rgba(0, 0, 0, 0.85)',
    fontWeight: 600,
    fontFamily: 'inherit',
    logo: kakaoImage,
  },
  {
    name: 'Google',
    bgColor: '#FFFFFF',
    textColor: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 500,
    fontFamily: 'Roboto',
    logo: googleImage,
  },
];

// Common style for OAuth buttons
const getOAuthButtonStyle = (provider: OAuthProvider) => ({
  height: '40px',
  pl: 1,
  pr: 3,
  backgroundColor: provider.bgColor,
  color: provider.textColor,
  fontWeight: provider.fontWeight,
  fontFamily: provider.fontFamily,
  '&:hover': {
    backgroundColor: provider.bgColor,
    opacity: 0.9,
  },
  textTransform: 'none',
});

const LoginPage: React.FC = () => {
  const baseURL = import.meta.env.VITE_API_URL;

  /**
   * userIdx 쿼리 파라미터 추출하여 액세스 토큰을 요청
   */
  const query = useQuery();
  useEffect(() => {
    const userIdx = query.get('userIdx');
    if (userIdx) {
      HTTP.post(`/auth/token?userIdx=${userIdx}`)
          .then(response => {
            const accessToken = response.data.accessToken;
            if (accessToken) {
              setCookie('accessToken', accessToken, 7);
              window.location.href = '/';
            }
          })
          .catch(error => {
            console.error('Failed to get access token.', error);
          });
    }
  }, [query]);

  return (
    <Container maxWidth="sm" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      height: '100vh',
    }}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'radial-gradient(circle, rgba(0, 0, 0, 1) 0%, transparent 50%)',
      }}/>
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
        {oauthProviders.map(provider => (
          <Button key={provider.name} variant="contained"
                  href={`${baseURL}/oauth2/authorization/${provider.name.toLowerCase()}`}
                  sx={getOAuthButtonStyle(provider)}>
            <Box component="img" src={provider.logo} alt={provider.name} sx={{width: '18px', height: '18px', mr: 3}}/>
            Login with {provider.name}
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