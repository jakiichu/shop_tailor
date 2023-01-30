import React, {useMemo} from 'react';
import {LIST_COMPONENTS as menu} from './_style'
import logo from '@app/assets/asd.png'
import {Outlet, useNavigate} from "react-router-dom";
import {Container, Grid} from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';

const AdminSidebar = () => {
    const navigate = useNavigate()
    const SidebarItem = useMemo(() => [
        {icon: <ArticleIcon style={{position: "relative", top: "12px"}}/>, text: 'Запросы', src:"/admin/"}
    ], [])
    return (
        <>
            <menu.backgroundMenu>
                <menu.logo alt={'asd'} src={logo} onClick={() => navigate('/')}/>

                <menu.wrapper container>
                    {SidebarItem.map((item) => (<>
                            <Grid item xs={3} md={3}>
                                {item.icon}
                            </Grid>
                            <Grid item xs={9} md={9}>
                                <menu.wrappedText onClick={()=>navigate(item.src)}>{item.text}</menu.wrappedText>
                            </Grid>
                        </>)
                    )}
                </menu.wrapper>
            </menu.backgroundMenu>
            <menu.mainPage>
                <Outlet/>
            </menu.mainPage>
        </>

    );
};

export default AdminSidebar;