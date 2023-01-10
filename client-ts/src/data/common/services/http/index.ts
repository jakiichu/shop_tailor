import {HttpService} from "./http-service";



const defaultURL = process.env.REACT_APP_API_HOST

const HttpAppService = new HttpService({
    baseURL: defaultURL,
    headers: {
        'Content-Type': 'application/json'
    },

});
const HttpRefreshService = new HttpService({
    baseURL: defaultURL,

})

export { HttpAppService, HttpRefreshService }
