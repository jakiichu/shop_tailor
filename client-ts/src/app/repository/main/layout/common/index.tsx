import React, {Dispatch, FC, SetStateAction} from 'react';
import {Container} from "@mui/material";
import Footer from "@app/repository/main/layout/footer";
import {LIST_COMPONENTS as header} from "@app/repository/main/layout/headers/_style";
import {Headers} from "@app/repository/main/layout";

interface IHeadersProps {
    auth: boolean;
    setAuth: Dispatch<SetStateAction<boolean>>;
}

const CommonLayout:FC<IHeadersProps> = (props) => {
    return (
        <>
            <Container>
                <Headers auth={props.auth} setAuth={props.setAuth}/>
            </Container>
            <Footer/>
        </>
    );
};

export default CommonLayout;