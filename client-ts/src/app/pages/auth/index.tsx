import React, {useState} from 'react';
import {Card, Container, TextField} from "@mui/material";
import {LIST_COMPONENTS as card} from './_style'
const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <Card>
                <card.containerAuth>
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={login}
                               onChange={e => setLogin(e.target.value)}/>
                    <TextField id="outlined-basic" label="Пароль" variant="outlined"  value={password} type="password"
                               onChange={e => setPassword(e.target.value)}/>
                </card.containerAuth>

            </Card>
        </div>
    );
};

export default Login;