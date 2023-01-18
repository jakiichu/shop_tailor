import React, {Dispatch, FC, SetStateAction} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./repository/main/pages/index/index.";
import {Container} from "@mui/material";
import Login from "./repository/main/pages/auth";
import RootRouter from "@app/route";
interface IRouterProps {
    auth: boolean;
    setAuth: Dispatch<SetStateAction<boolean>>;
}
const AppRouter:FC<IRouterProps> = (props) => {
    return (




            <RootRouter auth={props.auth} setAuth={props.setAuth}/>

    );
};

export default AppRouter;