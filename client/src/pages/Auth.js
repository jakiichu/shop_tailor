import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, NavLink} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";
import {check, login, registration} from "../components/http/userAPI";
import {observer} from "mobx-react";
import {Context} from "../index";



const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)

            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
            check().then(data => {

                    user.setAdmin(data.role)
                    user.setId(data.id)
                    user.setUser(true)
                    user.setIsAuth(true)
                }
            )
        }catch (e){
            alert(e.response.data.message)
        }

    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш Email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>Нет аккаунта?<NavLink onClick={() => history(REGISTRATION_ROUTE)}>Зарегистрируйся!</NavLink></div>
                            :
                            <div>Есть аккаунт?<NavLink onClick={() => history(LOGIN_ROUTE)}>Войдите!</NavLink></div>
                        }
                        <Button className="mt-3 align-self-end" variant="outline-success"
                                onClick={click}>{isLogin ? "Ввойти" : "Регистрация"}</Button>
                    </div>

                </Form>
            </Card>

        </Container>
    );
});

export default Auth;