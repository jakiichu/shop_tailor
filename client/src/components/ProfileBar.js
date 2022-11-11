import React, {useContext} from 'react';
import {Context} from "../index";
import {Form} from "react-bootstrap";

const ProfileBar = () => {
    const {user} = useContext(Context)
    return (
        <div>
            <fieldset disabled>
                <Form className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Email пользователя:</Form.Label>
                    <Form.Control id="disabledTextInput" placeholder={user.isName}/>
                </Form>
            </fieldset>
            избранное
            корзина

        </div>
    );
};

export default ProfileBar;