import React, {useContext} from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {PRODUCT_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react";
import Favorite from "./favorite";
import {values} from "mobx";


const ProductItem = observer( ({product}) => {
    const history = useNavigate()
    const {user} = useContext(Context)
    const favoriteIsView = async () => {
        return await user.isFavorite.then(function (result) {
            for (let i = 0; i < result.length; ++i) {
                if (result[i].productId === product.id) {
                    return true;
                }
            }
        })


    }

    return (
        <Col md={3}>
            <Card style={{width: 150}} border={'light'}>
                <Favorite
                    favoriteView={favoriteIsView()}
                    product={product}
                />
                <Image src={process.env.REACT_APP_API_URL + '/' + product.img} width={150} height={150}/>
                <div>{product.name}</div>
                <Button className="d-flex align-self-end" variant="warning"
                        onClick={() => history(PRODUCT_ROUTE + '/' + product.id)}>Купить</Button>
            </Card>
        </Col>
    );
});

export default ProductItem;