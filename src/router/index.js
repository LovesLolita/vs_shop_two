import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Login from "../components/login.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login

    },
    {
        path: '/home',
        component: Home

    }

]



const router = new VueRouter({
    routes
})
//路由器守卫
router.beforeEach((to, from, next) => {
    if (to.path == '/login') return next();
    //获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next();
})


export default router