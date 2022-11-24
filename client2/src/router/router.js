import home from "@/pages/home";
import {createRouter, createWebHistory} from "vue-router";
import productPage from "@/pages/productPage";
import auth from "@/pages/auth";
import admin from "@/pages/admin";
import cart from "@/pages/cart";
import profile from "@/pages/profile";

const routes = [
    {
        path:'/',
        component: home
    },
    {
        path:'/product',
        component: productPage
    },
    {
        path:'/registration',
        component: auth
    },
    {
        path:'/login',
        component: auth
    },
    {
        path:'/admin',
        component: admin
    },
    {
        path:'/cart',
        component: cart
    },
    {
        path:'/profile',
        component: profile
    },
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router;