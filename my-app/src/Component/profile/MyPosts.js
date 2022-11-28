import React from 'react';
import {Button, Form} from "react-bootstrap";
import {updateTextarea} from "../../redux/state";

const MyPosts = (props) => {
    let formElement = React.createRef()
    let addPost = () => {
        let text = formElement.current.value
        props.addPost(text)
        formElement.current.value = ' '
    }
    let onChangePost = () =>{
        let text = formElement.current.value
        props.updateTextarea(text)
    }
    return (
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Создать пост</Form.Label>
                    <Form.Control onChange={onChangePost} value={props.state.newPostText} ref={formElement} as="textarea" rows={2}/>
                    <Button className='mt-2' onClick={() =>addPost()} variant="outline-success">Добавить пост</Button>
                </Form.Group>
            </Form>

    );
};

export default MyPosts;