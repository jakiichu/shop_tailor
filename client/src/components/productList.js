import React, {useContext} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ProductItem from "./productItem";
import {userFavorite} from "./http/productAPI";

const ProductList = observer(() => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)



    return (
        <Row className="d-flex" className="pt-2">
            {product.product.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </Row>
    );
});

export default ProductList;