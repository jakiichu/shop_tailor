import React, {useContext} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import {Card} from "react-bootstrap";


const CategoryBar = observer(() => {
    const {product} = useContext(Context)

    return (
        <form className='d-flex'>
            {product.category.map(category =>
                <Card key={category.id} className="p-3" onClick={() => product.setSelectedCategory(category)} border={category.id === product.selectedCategory.id ? 'danger' : 'light'} style={{cursor: "pointer"}}>
                    {category.name}
                </Card>
            )}
        </form>
    );
});

export default CategoryBar;