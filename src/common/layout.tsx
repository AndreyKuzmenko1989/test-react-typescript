import {Link, Outlet} from 'react-router-dom';
import {Box, AppBar, Toolbar, Link as LinkMat, Typography} from '@mui/material';
import React from 'react';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';

const Layout = () => {
    return (
        <>
            <HeaderComponent/>
                <Outlet/>
            <FooterComponent />
        </>
    )
}
export {Layout}