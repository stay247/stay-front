import React from 'react';
import {useAuthStore} from '../../store/authStore';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';

const AuthManager: React.FC = () => {
  const {isLoggedIn} = useAuthStore();

  return (
    <>
      {isLoggedIn ? <HomePage/> : <LoginPage/>}
    </>
  );
};

export default AuthManager;