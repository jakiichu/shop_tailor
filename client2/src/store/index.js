import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        product: [],
        isEmail: [],
        isId: [],
        createProduct() {
            axios.get('http://localhost:5000/api/product').then(response => (this.product = response.data));
        },
        setAuth(bool) {
            this.isAuth = bool
            console.log(this.isAuth)
        },
        setCookie(name, value, options = {}) {

            options = {
                path: '/',
                // при необходимости добавьте другие значения по умолчанию
                ...options
            };

            if (options.expires instanceof Date) {
                options.expires = options.expires.toUTCString();
            }

            let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

            for (let optionKey in options) {
                updatedCookie += "; " + optionKey;
                let optionValue = options[optionKey];
                if (optionValue !== true) {
                    updatedCookie += "=" + optionValue;
                }
            }

            document.cookie = updatedCookie;
        },

        getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;

        },

        deleteCookie(name) {
            this.setCookie(name, "", {
                'max-age': -1
            })
        }


    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
