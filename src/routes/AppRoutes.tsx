import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.tsx';
import AuthManager from '../components/common/AuthManager.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<AuthManager/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;