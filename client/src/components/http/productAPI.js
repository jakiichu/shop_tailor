import {$authHost, $host} from "./index";


export const createSize = async (size) => {
    const {data} = await $authHost.post('api/size', size)
    return data
}

export const fetchSize = async () => {
    const {data} = await $host.get('api/size')
    return data
}

export const viewSize = async (id) => {
    const {data} = await $host.get('api/size/' + id)
    return data
}


export const fetchСategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}


export const fetchProduct = async () => {
    const {data} = await $host.get('api/product')
    return data
}

export const fetchFavorite = async () => {
    const {data} = await $authHost.get('api/favorite')
    return data
}

export const createProduct = async (size) => {
    const {data} = await $authHost.post('api/product', size)
    return data
}

export const createFavorite = async (favorite) => {
    const {data} = await $authHost.post('api/favorite', favorite)
    return data
}


export const viewProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}


export const viewFavorite = async (id, productId) => {
    const {data} = await $host.get('api/favorite/' + id + '/' + + productId)
    return data
}

export const userFavorite = async (id) => {
    const {data} = await $host.get('api/favorite/' + id)
    return data
}


