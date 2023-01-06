import React, {FC} from 'react';
import {CardNew} from "./CardNew";
interface ITest {
    name: string,
    img: string,
    favorite:boolean,
    price:number
}
const Novelties:FC = () => {
    let newTest:ITest[] = [
        {name:'Платье  “Холодное сердце”', img:'img.png', favorite:false, price:150},
        {name:'Платье  “Холодное сердце”', img:'img.png', favorite:false, price:150},
        {name:'Платье  “Холодное сердце”', img:'img.png', favorite:false, price:150},
        {name:'Платье  “Холодное сердце”', img:'img.png', favorite:false, price:150},
        {name:'Платье  “Холодное сердце”', img:'img.png', favorite:false, price:150},
    ]
    return (
        <div>
            {
                newTest.map(item => (<CardNew {...item}/>))
            }
        </div>
    );
};

export {Novelties};