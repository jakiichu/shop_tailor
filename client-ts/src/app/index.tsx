import React, {FC} from 'react';
import {Headers} from "./layout";
import Box from '@mui/material/Box';
import AppRouter from "./AppRouter";


const Index: FC = () => {
    console.log(localStorage.getItem('token'))

    return (
        <Box style={{margin: 0}}>
            <Headers />
            <AppRouter/>
        </Box>
    );
}

export default Index;
