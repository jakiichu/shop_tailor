import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isAdmin = "USER"
        this._isId = ''
        this._isName = ''
        this._isFavorite = []
        this._user = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth = bool
        console.log(this._isAuth)
    }
    setUser(user){
        this._user = user
    }
    setAdmin(isAdmin){
        this._isAdmin = isAdmin
    }
    setId(id){
        this._isId = id
    }
    setName(name){
        this._isName = name
    }
    get isAuth(){
        return this._isAuth
    }
    get isName(){
        return this._isName
    }
    get isAdmin(){
        return this._isAdmin
    }
    get isId(){
        return this._isId
    }
    get user(){
        return this._user
    }

}