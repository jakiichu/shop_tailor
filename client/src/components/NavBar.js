import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
    const history = useNavigate()
    const {user} = useContext(Context)

    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
        history(SHOP_ROUTE)
    }
    console.log(user)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE} >Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Nav className="ml-auto" style={{ maxHeight: '100px', color: 'white' }} navbarScroll>
                        {user.isAuth ?
                            <><Button className="me-2" onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
                                <Button onClick={() => logOut()}>Выйти</Button></>
                            :
                            <><Button onClick={() => history(REGISTRATION_ROUTE)} className="me-2">регистрация</Button>
                            <Button onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button></>

                        }
                    </Nav>

            </Container>
        </Navbar>
    );
};

export default NavBar;