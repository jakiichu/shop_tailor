import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import avatar from "../asd.jpg";

const UserCard = () => {
    return (
        <Row className='mt-3'>
            <Col sm={2}>
                <Image src={avatar} width={150} height={150}></Image>
            </Col>
            <Col sm={10}>
                <div>dimasik murakami</div>
                <div>20 y.o.</div>
                <div>nasvai under lip</div>
            </Col>
        </Row>
    );
};

export default UserCard;