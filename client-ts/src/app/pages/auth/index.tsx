import React, {useState} from 'react';
import {Button, Card, Container, TextField} from "@mui/material";
import {LIST_COMPONENTS as card} from './_style'
import registrationUseCase from "@domain/auth/use-case";
const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, SetPasswordRepeat] = useState('')

    const registration = () =>{
        if(passwordRepeat !== '' || password === passwordRepeat){
            registrationUseCase({email:login,password:password})

        }

    }

    return (
        <div>
            <Card>
                <card.containerAuth>
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={login}
                               onChange={e => setLogin(e.target.value)}/>
                    <TextField id="outlined-basic" label="Пароль" variant="outlined"  value={password} type="password"
                               onChange={e => setPassword(e.target.value)}/>
                    <TextField id="outlined-basic" label="Повтор пароля" variant="outlined"  value={passwordRepeat} type="password"
                               onChange={e => SetPasswordRepeat(e.target.value)}/>
                    <Button onClick={registration}>asd</Button>
                </card.containerAuth>

            </Card>
        </div>
    );
};

export default Login;