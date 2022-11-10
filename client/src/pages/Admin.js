import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateProduct from "../components/modals/createProduct";

const Admin = () => {
    const [show, setShow] = useState(false)
    return (
        <Container>
            <Button onClick={() => setShow(true)}>Добавить устройство</Button>
            <CreateProduct show={show} setShow={setShow}/>
        </Container>
    );
};

export default Admin;