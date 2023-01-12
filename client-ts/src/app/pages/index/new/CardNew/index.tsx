import React, {FC} from 'react';
import {Box} from "@mui/material";
interface ITest {
    name: string,
    img: string,
    favorite:boolean,
    price:number
}
const CardNew:FC<ITest> = (props: ITest) => {
    return (
        <Box>
            <img src="pthImage" alt="name"/>
            <h3>{props.name}</h3>
        </Box>
    );
};

export {CardNew};