import React from 'react';
import {Col, Row} from "react-bootstrap";
import Dialog from "../Component/dialogs/Dialog";
import DialogWindow from "../Component/dialogs/DialogWindow";

const Dialogs = (props) => {


    let dialogElemets = props.state.dialogs.map(dialog => <Dialog key={dialog.id}  id={dialog.id} name={dialog.name}/>)

    return (
        <div>
            <Row>
                <Col sm={2} className='border'>
                    {dialogElemets}
                </Col>
                <Col sm={10}>
                    <DialogWindow state={props.state}/>
                </Col>
            </Row>
        </div>
    );
};

export default Dialogs;