import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import {Container} from "@mui/material";
import {LIST_COMPONENTS as header} from './_style'
import logo from '@assets/asd.png'
import {FC} from "react";

import { useNavigate } from "react-router-dom";
import {Favorite, Person, ShoppingCart} from "@mui/icons-material";


const Headers = () => {
    const navigate = useNavigate()
    return (
        <header.background>
            <Container>
                    <Toolbar>

                        <header.logo alt={'asd'} src={logo} onClick={()=>navigate('/')}/>

                        <header.Category color="inherit"><header.DehazeIcon/> Каталог</header.Category>
                        <header.TextSearch>
                            <header.InvisibleTextField id="fullWidth"/><header.SearchIcon/>
                        </header.TextSearch>


                        <ShoppingCart/>
                        <Favorite/>
                        <Person onClick={()=>navigate('/login')}/>

                    </Toolbar>

            </Container>
        </header.background>
    );
};

export {Headers};