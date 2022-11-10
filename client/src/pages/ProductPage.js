import React from 'react';
import {Button, Col, Container, Dropdown, DropdownButton, Image, Row} from "react-bootstrap";


const ProductPage = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={8}>
                    <Image width={"100%"} height={"auto"}></Image>
                    {/*src={product.img}*/}
                </Col>
                <Col md={4}>
                    <div className="d-flex"><h2>
                        {/*product.name*/}Название большое
                    </h2>
                    </div>
                    <div>
                        <div>150 Р.</div>
                        <DropdownButton variant="warning" title={"Выберите размер"}>
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                        <a href="asd" style={{color: "grey"}}>Таблица размеров</a>
                    </div>
                    <Button className="mt-3">Добавить в корзину </Button>⁕
                    <div>очень большое описание"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </Col>

            </Row>
        </Container>
    );
};

export default ProductPage;