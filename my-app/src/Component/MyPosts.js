import React from 'react';
import {Button, Form} from "react-bootstrap";

const MyPosts = () => {
    return (
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Создать пост</Form.Label>
                    <Form.Control as="textarea" rows={2}/>
                    <Button className='mt-2' variant="outline-success">Добавить пост</Button>
                </Form.Group>
            </Form>

    );
};

export default MyPosts;