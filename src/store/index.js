import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged: false,
        token: ''
    },
    mutations: {
        SET_LOGGED_IN(state) {
            state.isLogged = true
        },
        SET_TOKEN(state, value) {
            state.token = value
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
            commit('SET_TOKEN', data.token)
            // } else {
            //     dispatch('doLogout', {})
            // }
        },
        // doLogout({
        //     commit
        // }) {
        //     commit('SET_LOGGED_OUT')
        //     commit('SET_EMAIL', '')
        // }
    },
    modules: {}
})