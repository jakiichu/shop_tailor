import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import avatar from "../asd.jpg";

const Post = (props) => {
    return (
        <div className='mt-2 p-2 border-top border-bottom'>
            <Row>
                <Col sm={1}>
                    <Image className='rounded-circle' src={avatar} width={50} height={50}/>
                </Col>
                <Col className='mt-1' sm={11}>{props.message}</Col>
            </Row>
        </div>
    );
};

export default Post;