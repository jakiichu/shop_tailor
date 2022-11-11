import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createProduct, fetchProduct, fetchSize, fetchСategory} from "../http/productAPI";
import {observer} from "mobx-react";

const CreateProduct = observer((props) => {
    const {product} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() =>{
        fetchSize().then(data=> product.setSize(data))
        fetchСategory().then(data=> product.setCategory(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('sizeId',product.selectedSize.id)
        formData.append('categoryId', product.selectedCategory.id)
        createProduct(formData).then(props.setShow(false))
    }
    console.log(product.selectedSize.id)
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
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    as="textarea"
                    placeholder={"Введите описание"}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder={"Введите цену"}
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                />
                <Form.Control
                    className="mt-3"
                    type="file"
                    placeholder={"Выбор изображение"}
                    onChange={selectFile}
                />

                <Dropdown className="mt-2 d-grid">
                    <Dropdown.Toggle id="dropdown-basic">{product.selectedSize.name || "Выберите размер"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product.size.map(size =>
                            <Dropdown.Item onClick={() => product.setSelectedSize(size)} key={size.id}>{size.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown className="mt-2 d-grid">
                    <Dropdown.Toggle id="dropdown-basic">{product.selectedCategory.name || "Выберите для кого товар"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product.category.map(category =>

                            <Dropdown.Item className="d-grid" onClick={() => product.setSelectedCategory(category)} key={category.id}>{category.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={() => props.setShow(false)}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;