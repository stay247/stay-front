import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthManager from '../components/common/AuthManager';
import CollectionPage from '../pages/CollectionPage';
import ItemPage from '../pages/ItemPage';
import UserPage from '../pages/UserPage';
import SettingPage from '../pages/SettingPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<AuthManager/>}/>
          <Route path="collection" element={<CollectionPage/>}/>
          <Route path="item" element={<ItemPage/>}/>
          <Route path="user" element={<UserPage/>}/>
          <Route path="setting" element={<SettingPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;