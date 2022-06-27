import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes/constants';
import { Layout } from './common/layout';
import Login from './pages/Login';
import Index from './pages/Index';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { useAuth } from './features/auth/hooks/useAuth';

function App() {
  const { checkToken } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken({ token });
    }
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
