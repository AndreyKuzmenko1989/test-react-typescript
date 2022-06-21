import {Box, AppBar, Toolbar, Link as LinkMat} from '@mui/material';
import React from 'react';


const HeaderComponent = () => {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <LinkMat href="/" color="inherit" sx={{margin: 2}}>Home</LinkMat>
                        <LinkMat href="/add" color="inherit">Add phone</LinkMat>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
export {HeaderComponent}