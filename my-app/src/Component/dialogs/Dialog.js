import React from 'react';
import {Image, Stack} from "react-bootstrap";
import avatar from "../../asd.jpg";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id


    return (
        <div className='border-bottom'>
            <NavLink className='nav-link' to={path}>
                        <Stack direction="horizontal" gap={2} className='pt-4 pb-4'>
                            <Image className='rounded-circle' src={avatar} width={30} height={30}/>
                            <h6>{props.name}</h6>
                        </Stack>
            </NavLink>
        </div>
    );
};

export default Dialog;