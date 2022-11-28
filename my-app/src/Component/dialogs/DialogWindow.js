import React from 'react';
import {Form, Stack} from "react-bootstrap";
import {FiArrowRight} from 'react-icons/fi';
import Message from "./Message";

const DialogWindow = (props) => {



        let messageElemets = props.state.message.map(message => <Message key={message.id} message={message.message} id={message.id}/>)


    return (
        <div className='position-absolute bottom-0'
             style={{width: 900,  height: 850, left: 710}}>
            <div className='position-absolute bottom-0' >
                {messageElemets}


                <Stack direction="horizontal" gap={2} >
                    <Form.Group className="mb-3 p-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={1} style={{width: 800}}/>
                    </Form.Group>
                    <FiArrowRight style={{width: 30, height:30}}/>

                </Stack>
            </div>

        </div>
    );
};

export default DialogWindow;