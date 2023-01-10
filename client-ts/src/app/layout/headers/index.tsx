import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import {Button, Container} from "@mui/material";
import {LIST_COMPONENTS as header} from './_style'
import logo from '../../../assets/asd.png'
import {FC} from "react";
import {SwitchSomeone} from './components'

interface IHeaders{
    setterSomeone:()=>void
}
const Headers:FC<IHeaders> = (props:IHeaders) => {

    return (
        <header.background>
            <Container>
                    <Toolbar>

                        <header.logo alt={'asd'} src={logo}/>
                        <header.Category color="inherit"><header.DehazeIcon/> Каталог</header.Category>
                        <header.TextSearch>
                            <header.InvisibleTextField id="fullWidth"/><header.SearchIcon/>
                        </header.TextSearch>

                        <SwitchSomeone setterSomeone={props.setterSomeone}/>


                    </Toolbar>

            </Container>
        </header.background>
    );
};

export {Headers};