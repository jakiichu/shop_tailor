import React, {FC, useState} from 'react';
import {Headers} from "./layout";
import Box from '@mui/material/Box';
import AppRouter from "./AppRouter";
import registrationUseCase from "../domain/auth/use-case";

const Index: FC = () => {
    const [someone, setSomeone] = useState('human')
    function setterSomeone() {
        {
            console.log(localStorage.getItem('token'))
            someone === 'human' ? setSomeone('animal') : setSomeone('human')
        }
    }
    registrationUseCase({email:'dftghsdfgyjnrfjyhtrf)))',password:'asdasdasd'})
    return (
        <Box style={{margin: 0}}>
            <Headers setterSomeone={setterSomeone}/>
            <AppRouter/>
        </Box>
    );
}

export default Index;
