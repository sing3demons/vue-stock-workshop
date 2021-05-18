<template>
    <v-container>
        <v-row class="justify-center">
            <v-card style="width:350px;">
                <v-img class="white--text align-end" height="200" src="@/assets/login_header.jpg">
                    <v-card-title primary-title>Login</v-card-title>
                </v-img>
                <v-card-text>
                    <v-form @submit.prevent="register">
                        <v-text-field name="name" label="name" v-model="account.name" text />
                        <v-text-field name="email" label="email" v-model="account.email" :type="'email'" />
                        <v-text-field
                            name="password"
                            label="password"
                            v-model="account.password"
                            :append-icon="isShowPassword ? 'visibility':'visibility_off'"
                            :type="isShowPassword?'text':'password'"
                            @click:append="isShowPassword=!isShowPassword"
                        />

                        <v-row class="justify-space-between pb-3 pt-5">
                            <v-btn text @click.prevent="$router.back">Cancel</v-btn>
                            <v-btn type="submit" color="success">Comfirm</v-btn>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        async register() {
            const url = '/auth/register'
            const { data } = await axios.post(url, {
                name: this.account.name,
                email: this.account.email,
                password: this.account.password
            })
            console.log(data)
        }
    },
    data: () => ({
        isShowPassword: false,
        account: { name: '', email: '', password: '' }
    })
}
</script>