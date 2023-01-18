import React, {FC, useEffect, useState} from 'react';
import {Headers} from "./repository/main/layout";
import Box from '@mui/material/Box';
import AppRouter from "./AppRouter";


const Index: FC = () => {
    console.log(localStorage.getItem('token'))
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {

            setAuth(true)
        } else {
            console.log('qwe')
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
