import React, {FC, useState} from 'react';
import {Headers} from "./layout";
import Box from '@mui/material/Box';
import AppRouter from "./AppRouter";

const Index: FC = () => {
    const [someone, setSomeone] = useState('human')
    function setterSomeone() {
        {
            someone === 'human' ? setSomeone('animal') : setSomeone('human')
        }
    }

    return (
        <Box style={{margin: 0}}>
            <Headers setterSomeone={setterSomeone}/>
            <AppRouter/>
        </Box>
    );
}

export default Index;
