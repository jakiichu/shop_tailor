import React from 'react';
import {Container} from "react-bootstrap";
import ProfileBar from "../components/ProfileBar";

const Profile = () => {
    return (
        <Container>
            <h1>Личный кабинет</h1>
            <ProfileBar></ProfileBar>
        </Container>
    );
};

export default Profile;