import React, {useContext} from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {PRODUCT_ROUTE} from "../utils/consts";
import star from "../assets/star.png"
import {Context} from "../index";
import {createFavorite, createProduct} from "./http/productAPI";
const ProductItem = ({product}) => {
    const history = useNavigate()
    const {user} = useContext(Context)
    const favorite =  (id) => {
        const formData = new FormData()
        formData.append('userId', user.isId)
        formData.append('productId', id)
        createFavorite(formData).then()
    }


    return (
        <Col md={3}>
            <Card style={{width: 150}} border={'light'}>
                <img src={star} onClick={() => favorite(product.id)} width={20} style={{position:"absolute"}}/>
                <Image src={process.env.REACT_APP_API_URL + '/' + product.img} width={150} height={150}/>
                <div>{product.name}</div>
                <Button className="d-flex align-self-end" variant="warning" onClick={() => history(PRODUCT_ROUTE + '/' + product.id)}>Купить</Button>
            </Card>
        </Col>
    );
};

export default ProductItem;