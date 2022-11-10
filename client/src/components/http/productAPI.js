import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createSize = async (size) => {
    const {data} = await $authHost.post('api/size', size)
    return data
}

export const fetchSize = async () => {
    const {data} = await $host.get('api/size')
    return data
}

export const viewSize = async () => {
    const {data} = await $authHost.get('api/')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}