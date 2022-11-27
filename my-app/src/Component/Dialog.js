import React from 'react';
import {Col, Image, Row, Stack} from "react-bootstrap";
import avatar from "../asd.jpg";
import DialogWindow from "./DialogWindow";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className='border-bottom'>
            <NavLink className='nav-link' to='/dialogs/1'>
                        <Stack direction="horizontal" gap={2} className='pt-4 pb-4'>
                            <Image className='rounded-circle' src={avatar} width={30} height={30}/>
                            <h6>asd</h6>
                        </Stack>
            </NavLink>
        </div>
    );
};

export default Dialog;