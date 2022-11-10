import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateProduct = (props) => {
    return (
        <Modal
            show={props.show}
            size="lg"
            centered
            onHide={() => props.setShow(false)}

        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    className="mt-3"
                    placeholder={"Введите название товара"}
                />
                <Form.Control
                    className="mt-3"
                    as="textarea"
                    placeholder={"Введите описание"}
                />
                <Form.Control
                    className="mt-3"
                    placeholder={"Введите цену"}
                />
                <Form.Control
                    className="mt-3"
                    type="file"
                    placeholder={"Выбор изображение"}
                />
                <Form.Label htmlFor="forWhat" className="mt-3">Выберите размер</Form.Label>

                <Form.Select aria-label="Default select example"
                >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Label htmlFor="forWhat" className="mt-3">Выберите для кого товар</Form.Label>
                <Form.Select
                    id="forWhat"
                    aria-label="Default select example"

                >
                    <option value="1">Для людей</option>
                    <option value="2">Для собак</option>
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={() => props.setShow(false)}>Закрыть</Button>
                <Button variant={"outline-success"}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;