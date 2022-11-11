import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from 'react-router-dom'
import {observer} from "mobx-react";

const NavBar = observer(() => {
    const history = useNavigate()
    const {user} = useContext(Context)

    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
        history(SHOP_ROUTE)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand style={{cursor:"pointer"}} onClick={() => history(SHOP_ROUTE)} >Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Nav className="ml-auto" style={{ maxHeight: '100px', color: 'white' }} navbarScroll>
                        {user.isAuth ?
                            <>{user.isAdmin === "ADMIN" ? <Button className="me-2" onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button> : <Button className="me-2" onClick={() => history(PROFILE_ROUTE)}>Личный Кабинет</Button> }
                                <Button onClick={() => logOut()}>Выйти</Button></>
                            :
                            <><Button onClick={() => history(REGISTRATION_ROUTE)} className="me-2">регистрация</Button>
                            <Button onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button></>

                        }
                    </Nav>

            </Container>
        </Navbar>
    );
});

export default NavBar;