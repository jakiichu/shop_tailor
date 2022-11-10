import React from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductItem = ({product}) => {
    const history = useNavigate()

    return (
        <Col md={3}>
            <Card style={{width: 150}} border={'light'}>
                <div>favorite</div>
                <Image src={product.img} width={150} height={150}/>
                <div>{product.name}</div>
                <Button className="d-flex align-self-end" variant="warning" onClick={() => history(PRODUCT_ROUTE + '/' + product.id)}>Купить</Button>
                {/*это реализовать*/}
            </Card>
        </Col>
    );
};

export default ProductItem;