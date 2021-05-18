<template>
    <v-container>
        <v-row class="justify-center">
            <v-card style="width:350px;">
                <v-img class="white--text align-end" height="200" src="@/assets/login_header.jpg">
                    <v-card-title primary-title>Login</v-card-title>
                </v-img>
                <v-card-text>
                    <v-form @submit.prevent="onSubmit">
                        <v-text-field
                            name="email"
                            label="email"
                            id="email"
                            :type="'email'"
                            v-model="account.email"
                            :rules="emailRules"
                        />
                        <v-text-field
                            name="password"
                            label="password"
                            id="password"
                            :append-icon="isShowPassword ? 'visibility':'visibility_off'"
                            :type="isShowPassword?'text':'password'"
                            @click:append="isShowPassword=!isShowPassword"
                            v-model="account.password"
                            :rules="passwordRules"
                        />

                        <v-row class="justify-space-between pa-3 pt-5">
                            <v-btn text @click.prevent="$router.push('/register')">Register</v-btn>
                            <v-btn type="submit" color="success">Login</v-btn>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        isShowPassword: false,
        account: { email: '', password: '' },
        emailRules: [v1 => !!v1 || 'email is required'],
        passwordRules: [v1 => !!v1 || 'password is required']
    }),
    methods: {
        onSubmit() {
            // console.log(this.account.email)
            // console.log(this.account.password)
            this.$store.dispatch({ type: 'doLogin', email: this.account.email, password: this.account.password })
        }
    }
}
</script>
