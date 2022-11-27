import React from 'react';
import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const ProfileList = () => {
    return (
        <Card className='p-3'>
            <div><NavLink className='nav-link' to="/profile">Profile</NavLink></div>
            <div><NavLink className='nav-link' to="/dialogs">Messages</NavLink></div>
            <div><NavLink className='nav-link' to="/news">News</NavLink></div>
            <div><NavLink className='nav-link' to="/settings">Settings</NavLink></div>
        </Card>
    );
};

export default ProfileList;