import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged: false,

    },
    mutations: {
        SET_LOGGED_IN(state) {
            let token = localStorage.getItem('token')
            if (token != '') {
                state.isLogged = true
            }
        },

        SET_LOGGED_OUT(state) {
            state.isLogged = false
        }
    },
    actions: {
        async doLogin({
            commit
        }, {
            email,
            password
        }) {
            const url = '/auth/login'
            const {
                data
            } = await axios.post(url, {
                email: email,
                password: password
            });
            localStorage.setItem('token', data.token)

            router.push('/stock')

            // if (data == true) {
            commit('SET_LOGGED_IN')

            // } else {
            //     dispatch('doLogout', {})
            // }
        },
        doLogout({
            commit
        }) {
            localStorage.removeItem('token');
            router.push("/login");
            commit("SET_LOGGED_OUT");

        },
        restoreLogin({
            commit
        }) {
            let token = localStorage.getItem('token')
            if (token != '') {
                commit("SET_LOGGED_IN");
            }
        },

    },
    modules: {}
})