<template>
    <v-app>
        <Header v-if="$store.state.isLogged" />
        <Menu v-if="$store.state.isLogged" />
        <Content />
    </v-app>
</template>

<script>
import Content from './components/layout/Content.vue'
import Header from './components/layout/Header.vue'
import Menu from './components/layout/Menu.vue'

export default {
    components: { Header, Menu, Content },
    name: 'App',
    methods: {
        openToggle(v) {
            console.log(v)
            this.opentDrawer = v
        }
    },
    data: () => ({
        opentDrawer: null
    })
}
</script>
