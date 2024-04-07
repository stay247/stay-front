import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import {useAuthStore} from '../store/authStore';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import CollectionPage from '../pages/CollectionPage';
import ItemPage from '../pages/ItemPage';
import UserPage from '../pages/UserPage';
import SettingPage from '../pages/SettingPage';
import LoginPage from '../pages/LoginPage';

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

// Adjusting ProtectedRoute for improved clarity
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({isLoggedIn, children}) => (
  isLoggedIn ? children : <Navigate to="/login" replace/>
);

const AppRoutes: React.FC = () => {
  const {isLoggedIn} = useAuthStore();

  // Consolidate protected routes for better manageability
  const protectedRoutes = [
    {path: "/", element: <HomePage/>, exact: true},
    {path: "/collection", element: <CollectionPage/>},
    {path: "/item", element: <ItemPage/>},
    {path: "/user", element: <UserPage/>},
    {path: "/setting", element: <SettingPage/>},
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          {protectedRoutes.map(({path, element, exact}) => (
            <Route
              key={path}
              path={exact ? path : `${path}/*`}
              element={<ProtectedRoute isLoggedIn={isLoggedIn}>{element}</ProtectedRoute>}
            />
          ))}
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;