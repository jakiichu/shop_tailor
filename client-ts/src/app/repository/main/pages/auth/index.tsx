import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {Button, Link} from "@mui/material";
import {LIST_COMPONENTS as card} from './_style'
import UseRegistrationUseCase from "@domain/auth/use-case/registraion";
import {useLocation, useNavigate} from "react-router-dom";
import LoginUseCase from "@domain/auth/use-case/login";

interface IAuthProps {
    auth: boolean;
    setAuth: Dispatch<SetStateAction<boolean>>;
}

const Login: FC<IAuthProps> = (props) => {
    const [login, setLogin] = useState('')

    const [password, setPassword] = useState('')
    const [passwordRepeat, SetPasswordRepeat] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === '/registration'
    if (localStorage.getItem('token')) {
        navigate('/')
    }

    function reverseBoolean() {
        props.setAuth(!props.auth)
    }

    function rederectToHome(){
        if (localStorage.getItem('token')) {
            reverseBoolean()
            navigate('/')
        }
    }

    const registration = async () => {

        if (isLogin) {
            console.log('регистрация))')
            if (passwordRepeat !== '' || password === passwordRepeat) {
                UseRegistrationUseCase({email: login, password: password})
                setTimeout(rederectToHome, 1000)
            }
        } else {
            LoginUseCase({email: login, password: password})
            setTimeout(rederectToHome, 1000)
        }
    }

    return (
        <div>
            <card.containerAuth>
                {
                    isLogin ?
                        <>
                            <card.textField fullWidth id="login-basic" label="Email" variant="outlined" value={login}
                                            onChange={e => setLogin(e.target.value)}/>
                            <card.textField fullWidth id="password-basic" label="Пароль" variant="outlined"
                                            value={password} type="password"
                                            onChange={e => setPassword(e.target.value)}/>
                            <card.textField fullWidth id="password-repeat-basic" label="Повтор пароля"
                                            variant="outlined" value={passwordRepeat} type="password"
                                            onChange={e => SetPasswordRepeat(e.target.value)}/>
                            <p>
                                {"Уже зарегистрированы? "}
                                <Link onClick={() => navigate('/login')} style={{cursor: "pointer"}} underline="none">
                                    Авторизироваться
                                </Link>
                            </p>

                            <Button variant="contained" onClick={registration}>Зарегистрироваться</Button>
                        </>

                        :
                        <>
                            <card.textField fullWidth id="login-basic" label="Email" variant="outlined" value={login}
                                            onChange={e => setLogin(e.target.value)}/>
                            <card.textField fullWidth id="password-basic" label="Пароль" variant="outlined"
                                            value={password} type="password"
                                            onChange={e => setPassword(e.target.value)}/>
                            <p>
                                {"Еще не зарегетрированы? "}
                                <Link onClick={() => navigate('/registration')} style={{cursor: "pointer"}}
                                      underline="none">
                                    Зарегистрироваться
                                </Link>
                            </p>

                            <Button variant="contained" onClick={registration}>Авторизироваться</Button>
                        </>
                }

            </card.containerAuth>

        </div>
    );
};

export default Login;