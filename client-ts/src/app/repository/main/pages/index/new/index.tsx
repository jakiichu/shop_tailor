import React, {FC} from 'react';
import {CardNew} from "@app/repository/main/ux/";
import {Grid} from "@mui/material";
import {LIST_COMPONENTS as box} from './_styled'

interface ITest {
    name: string,
    img: string,
    favorite: boolean,
    price: number
    newPrice: number|undefined;
}

const Novelties: FC = () => {
    let newTest: ITest[] = [
        {name: 'Платье  “Холодное сердце”', img: 'img.png', favorite: false, newPrice: 140, price: 150},
        {name: 'Платье  “Холодное сердце”', img: 'img.png', favorite: false, newPrice: undefined, price: 150},
        {name: 'Платье  “Холодное сердце”', img: 'img.png', favorite: false, newPrice: 140, price: 150},
        {name: 'Платье  “Холодное сердце”', img: 'img.png', favorite: false, newPrice: 140, price: 150},
    ]
    return (
        <box.marginCardGroup>
            <box.MainHeader  mt={2} mb={2}>Товары в наличии</box.MainHeader>
            <Grid container spacing={3}>{
                newTest.map(item => (<CardNew {...item}/>))
            }</Grid>
            <box.Button variant="contained">Перейти к новинкам</box.Button>
        </box.marginCardGroup>
    );
};

export {Novelties};