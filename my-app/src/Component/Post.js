import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import avatar from "../asd.jpg";

const Post = () => {
    return (
        <div className='p-2 border-top border-bottom'>
            <Row>
                <Col sm={1}>
                    <Image className='rounded-circle' pill src={avatar} width={50} height={50}/>
                </Col>
                <Col className='mt-1' sm={11}>найс кок</Col>
            </Row>
        </div>
    );
};

export default Post;