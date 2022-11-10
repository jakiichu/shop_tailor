import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SizeBar from "../components/SizeBar";
import CategoryBar from "../components/categoryBar";
import ProductList from "../components/productList";
import {observer} from "mobx-react";
import {Context} from "../index";
import {fetchSize} from "../components/http/productAPI";

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() =>{
        fetchSize().then(data=> product.setSize(data))
    }, [])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <SizeBar/>
                </Col>
                <Col md={9}>
                    <CategoryBar  />
                    <ProductList  />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;