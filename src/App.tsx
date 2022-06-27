import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes/constants';
import { Layout } from './common/layout';
import Login from './pages/Login';
import Index from './pages/Index';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { useAuth } from './features/auth/hooks/useAuth';
import { getStorageValue } from './api/localStorage';

function App() {
  useEffect(() => {
    const { checkTokenLogin } = useAuth();
    useEffect(() => {
      const token = getStorageValue('accessToken');
      if (token) {
        checkTokenLogin({ token });
      }
    });
  });
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.main} element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.login}
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
