import {rerenderEntireTree} from "../render";

let state = {
    posts: [{id:1,message:'найс кок'},{id:2,message:'asd'},{id:3,message:'abutalabashneba))'}],
    message:[{id:1,message:'asdasd'},{id:2,message:'asfagasdfd'},{id:3,message:'dasdasfgaghasf))'}],
    dialogs:[{id:1,name:'димааааа'},{id:2,name:'даниииииил'},{id:3,name:'завьялооооов))'}],
    sidebar:[],
    newPostText:'asd'
}

export let addPost = (postMessage) => {
    let newPost = {
        id:4,
        message: postMessage
    }
    state.posts.push(newPost);
    rerenderEntireTree(state)
}


export let updateTextarea = (newText) => {

    state.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;