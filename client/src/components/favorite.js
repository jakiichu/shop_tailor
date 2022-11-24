import React, {useContext} from 'react';
import star from "../assets/star.png";
import starAccept from "../assets/VectorstarAccept.png";
import {createFavorite} from "./http/productAPI";
import {observer} from "mobx-react";
import {Context} from "../index";


const Favorite = observer(({product, favoriteView}) => {
    const {user} = useContext(Context)

    const favorite = (id) => {
        const formData = new FormData()
        formData.append('userId', user.isId)
        formData.append('productId', id)
        createFavorite(formData).then()
    }
    

    console.log(favoriteView)

    return (
        <div>
            {

                (favoriteView === true) ? <img src={starAccept} onClick={() => favorite(product.id)} width={20}
                                               style={{position: "absolute"}}/>
                    : <img src={star} onClick={() => favorite(product.id)} width={20} style={{position: "absolute"}}/>
            }
        </div>
    );
});

export default Favorite;