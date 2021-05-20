<template>
    <v-card ripple>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{title}}</v-list-item-title>
                <v-list-item-subtitle>{{subTitle}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" :color="avatar_color">
                <v-icon color="white">{{avatar_icon}}</v-icon>
            </v-list-item-avatar>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    props: ['title', 'subTitle', 'avatar_color', 'avatar_icon']
}
</script>

<style>
</style>