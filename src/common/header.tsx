import { Box, AppBar, Toolbar, Link as LinkMat } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import { ROUTES } from '../routes/constants';

const HeaderComponent = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink to={ROUTES.main} color="inherit">
              Home
            </NavLink>
            <NavLink to="/add" color="inherit">
              Add new phone
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export { HeaderComponent };
