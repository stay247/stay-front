import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.tsx';
import AuthManager from '../components/auth/AuthManager.tsx';
import MusicPage from '../pages/MusicPage';
import LibraryPage from '../pages/LibraryPage';
import UserPage from '../pages/UserPage';
import SettingPage from '../pages/SettingPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<AuthManager/>}/>
          <Route path="music" element={<MusicPage/>}/>
          <Route path="library" element={<LibraryPage/>}/>
          <Route path="user" element={<UserPage/>}/>
          <Route path="setting" element={<SettingPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;