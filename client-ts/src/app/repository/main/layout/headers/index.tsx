import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import {Container, IconButton, MenuItem} from "@mui/material";
import {LIST_COMPONENTS as header} from './_style'
import logo from '@app/assets/asd.png'
import Menu from '@mui/material/Menu';

import {useNavigate, Outlet} from "react-router-dom";
import {Favorite, Person, ShoppingCart} from "@mui/icons-material";
import {ChangeEvent, useState, MouseEvent, FC, Dispatch, SetStateAction} from "react";
import Footer from "@app/repository/main/layout/footer";

interface IHeadersProps {
    auth: boolean;
    setAuth: Dispatch<SetStateAction<boolean>>;
}

const Headers: FC<IHeadersProps> = (props) => {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.setAuth(event.target.checked);
    };

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const quit = () => {
        props.setAuth(false)
        localStorage.removeItem("token")
        handleClose()
    }

    return (

        <>
            <header.background>
                <Container>
                    <Toolbar>

                        <header.logo alt={'asd'} src={logo} onClick={() => navigate('/')}/>

                        <header.Category color="inherit">
                            <header.DehazeIcon/>
                            Каталог
                        </header.Category>
                        <header.TextSearch>
                            <header.InvisibleTextField id="fullWidth"/>
                            <header.SearchIcon/>
                        </header.TextSearch>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <ShoppingCart/>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Favorite/>
                        </IconButton>


                        {props.auth ?
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <Person/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Никита Литвинков</MenuItem>
                                    <MenuItem onClick={handleClose}>Изменить профиль</MenuItem>
                                    <MenuItem onClick={handleClose}>Заказы</MenuItem>
                                    <MenuItem onClick={handleClose}>Запросы на шитье</MenuItem>
                                    <MenuItem onClick={handleClose}>Избранное</MenuItem>
                                    <MenuItem onClick={quit}>Выйти</MenuItem>
                                </Menu>
                            </div>
                            :
                            <>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={() => navigate('/registration')}
                                    color="inherit"
                                >
                                    <Person/>
                                </IconButton>
                            </>
                        }
                    </Toolbar>

                </Container>
                <Outlet/>
            </header.background>
        </>
    );
};

export {Headers};