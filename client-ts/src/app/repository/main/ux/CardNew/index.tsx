import React, {FC} from 'react';
import {LIST_COMPONENTS as card} from "./_style";
import pthImage from "@assets/img.png"
import {Typography} from "@mui/material";

interface ITest {
    name: string,
    img: string,
    favorite: boolean,
    price: number
    newPrice: number | undefined
}

const CardNew: FC<ITest> = (props: ITest) => {
    return (
        <card.backgroundCard item>
            <img style={{width: "250px"}} src={pthImage} alt="name"/>
            <h3>{props.name}</h3>
            {props.newPrice ? <>
                <card.forSale>{props.newPrice} ₽</card.forSale>
                <card.oldPrice>{props.price} ₽</card.oldPrice>
            </> : <card.forSale>{props.price} ₽</card.forSale>}
            <card.cartIcon/>
        </card.backgroundCard>
    );
};

export {CardNew};