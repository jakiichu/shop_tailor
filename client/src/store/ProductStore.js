import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._category = []
        this._size = []
        this._product = []
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