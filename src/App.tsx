import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes/constants';
import { Layout } from './common/layout';
import Login from './pages/login';
import PhoneList from './pages/phoneList';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.main} element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <PhoneList />
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
