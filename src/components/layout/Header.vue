<template>
    <v-app-bar app color="green accent-4" dense dark>
        <v-toolbar-title>Stock Workshop</v-toolbar-title>
        <v-spacer />
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn icon @click="onClickLogOff">
            <v-icon>mdi-export</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    methods: {
        onClickLogOff() {
            this.$store.dispatch('doLogout')
        }
    },
    data: () => ({
        drawer: null
    })
}
</script>

<style>
</style>