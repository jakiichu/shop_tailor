import React, {FC, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import AppRouter from "./AppRouter";


const Index: FC = () => {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setAuth(true)
        } else {
            setAuth(false)
        }
    }, [auth])
    return (
        <Box style={{margin: 0}}>
            <AppRouter auth={auth} setAuth={setAuth}/>
        </Box>
    );
}

export default Index;
