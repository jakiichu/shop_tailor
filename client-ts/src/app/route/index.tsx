import React, {Dispatch, FC, SetStateAction} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "@app/repository/main/pages/index";
import Login from "@app/repository/main/pages/auth";
import {Headers} from "@app/repository/main/layout";
import AdminSnackbar from "@app/repository/admin/layout/menu";
import RequestIndexPage from "@app/repository/admin/pages/request";
import CommonLayout from "@app/repository/main/layout/common";


interface IRouterProps {
    auth: boolean;
    setAuth: Dispatch<SetStateAction<boolean>>;
}

const RootRouter:FC<IRouterProps> = (props) => {
    return (
        <Routes>

            <Route path="/" element={<CommonLayout setAuth={props.setAuth} auth={props.auth}/>} >
                <Route path="" element={<Home/>}/>
                <Route path="registration" element={<Login auth={props.auth} setAuth={props.setAuth}/>}/>
                <Route path="login" element={<Login auth={props.auth} setAuth={props.setAuth}/>}/>
            </Route>


            <Route path="/admin" element={<AdminSnackbar/>}>
                <Route path="" element={<RequestIndexPage/>}/>
                <Route path="registration" element={<Login auth={props.auth} setAuth={props.setAuth}/>}/>
                <Route path="login" element={<Login auth={props.auth} setAuth={props.setAuth}/>}/>
            </Route>
        </Routes>
    );
};

export default RootRouter;