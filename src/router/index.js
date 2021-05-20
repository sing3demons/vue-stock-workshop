import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Report from '@/components/Report.vue'
import Stock from '@/components/stock/Stock.vue'
import StockCreate from '@/components/stock/StockCreate.vue'
import StockEdit from '@/components/stock/StockEdit.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/about',
        name: 'About',
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/register',
        component: Register
    }, {
        path: '/report',
        component: Report
    }, {
        path: '/stock',
        component: Stock
    }, {
        path: '/stock-create',
        component: StockCreate
    }, {
        path: '/stock-edit/:id',
        component: StockEdit
    }, {
        path: '*',
        redirect: '/login'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router