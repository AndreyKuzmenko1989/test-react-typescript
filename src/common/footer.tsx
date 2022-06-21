import {Box, Typography} from '@mui/material';
import React from 'react';


const FooterComponent = () => {
    return (
        <>
            <Box
                component="div"
                sx={{
                    flexGrow: 1,
                    height: 100,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <Typography variant="body1" color="white" sx={{mx: "auto", py: '30px', width: 'fit-content'}}>2022</Typography>
            </Box>
        </>
    )
}
export {FooterComponent}