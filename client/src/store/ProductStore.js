import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._category = [
            {id: 1, name: 'human'},
            {id: 2, name: 'animal'},
        ]
        this._size = [

        ]
        this._product = [
                    {id: 4,name: "sdgbdfgdfgsrghnsfgnfsgnsfgn", description: "dgfdgdfgsdfhsdfsdvbsdb", price: 100, img: "37946752-2ad3-4867-bee0-9a82bd09273d.jpg", categoryId: 3, sizeId: 1},
                    {id: 3,name: "sdgbdfgdfg", description: "dgfdgdfgsdfhsdfsdvbsdb", price: 100, img: "818e6dc3-e393-40a3-8170-c12c0cd996ff.jpg", categoryId: 1, sizeId: 1},
                    {id: 5, name: "asdasd", description: "adgsfasf", price: 123, img: "54384c02-7086-4db3-ae9b-dba6bab7c9e9.jpg", categoryId: 1, sizeId: 1},
                    {id: 6, name: "hrvasead", description: "thdrbfddfb", price: 1233, img: "2c2336ef-173f-491b-a7a3-3150f9d3ef56.jpg", categoryId: 1, sizeId: 1}

        ]
        this._selectedSize = {}
        this._selectedCategory = {}
        makeAutoObservable(this)
    }
    setCategory(category){
        this._category = category
    }
    setSize(size){
        this._size = size
    }
    setProduct(product){
        this._product = product
    }
    setSelectedSize(size){
        this._selectedSize = size

    }
    setSelectedCategory(category){
        this._selectedCategory = category

    }
    get category(){
        return this._category
    }
    get size(){
        return this._size
    }
    get product(){
        return this._product
    }
    get selectedSize(){
        return this._selectedSize
    }
    get selectedCategory(){
        return this._selectedCategory
    }
}