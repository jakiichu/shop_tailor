import React, {useContext} from "react";
import { observer } from "mobx-react"
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const SizeBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <ListGroup>
            {product.size.map(size => <ListGroup.Item
                style={{cursor: 'pointer'}}
                active={size === product.selectedSize}
                onClick={() => product.setSelectedSize(size)}
                key={size.id}
            >
                {size.name}
            </ListGroup.Item>)}
        </ListGroup>
    );
});
export default SizeBar;