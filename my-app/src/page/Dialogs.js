import React from 'react';
import {Col, Row} from "react-bootstrap";
import Dialog from "../Component/Dialog";
import DialogWindow from "../Component/DialogWindow";

const Dialogs = () => {
    return (
        <div>
            <Row>
                <Col sm={2} className='border'>
                    <Dialog/>
                    <Dialog/>
                </Col>
                <Col sm={10}>
                    <DialogWindow/>
                </Col>
            </Row>
        </div>
    );
};

export default Dialogs;