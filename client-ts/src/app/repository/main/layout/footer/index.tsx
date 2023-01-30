import React from 'react';
import {Container, Grid} from "@mui/material";
import footer_logo from '@assets/logo_site 1.png'
import {LIST_COMPONENTS as footer} from './_style'
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer.Wrapper>

            <footer.background>
                <Container>
                    <footer.GridContainer container columns={3}>
                        <footer.GridItem item>
                            <img src={footer_logo} alt=""/>
                            <footer.Text>testmail@gmail.com</footer.Text>
                            <footer.Text>8(800)555 35 35</footer.Text>
                            <footer.Text>
                                <footer.InstagramIcon/>
                                Siayaiy
                            </footer.Text>
                        </footer.GridItem>
                        <footer.GridItem item>
                            <footer.Text>О магазине</footer.Text>
                            <footer.Text>Подобрать размер</footer.Text>

                        </footer.GridItem>
                        <footer.GridItem item>

                        </footer.GridItem>
                    </footer.GridContainer>
                </Container>
            </footer.background>
        </footer.Wrapper>
    );
};

export default Footer;