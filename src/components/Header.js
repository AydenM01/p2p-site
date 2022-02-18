import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = (props) => {

    return(
        <Box>
            <Typography>username: {props.username}</Typography>
        </Box>
    );
}

export default Header;