import React, {FC, useState} from 'react';
import {Headers} from "./layout";
import Box from '@mui/material/Box';
import AppRouter from "./AppRouter";
import registrationUseCase from "../domain/auth/use-case";

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
