import { Box, AppBar, Toolbar, Link as LinkMat, Button } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import { ROUTES } from '../routes/constants';
import { useAuth } from '../features/auth/hooks/useAuth';

const HeaderComponent = () => {
  const { isLoggedIn, handleLogout } = useAuth();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink style={{ paddingLeft: 13 }} to={ROUTES.main}>
              Home
            </NavLink>
            <NavLink style={{ paddingLeft: 13 }} to="/add">
              Add new phone
            </NavLink>
            {isLoggedIn ? (
              <Button style={{ marginLeft: 13 }} variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              ''
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export { HeaderComponent };
