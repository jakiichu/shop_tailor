import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/index/index.";
import {Container} from "@mui/material";
import Login from "./pages/auth";

const AppRouter = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home/>}>

                </Route>
                <Route path="/login" element={<Login/>}>
                </Route>
            </Routes>
        </Container>
    );
};

export default AppRouter;