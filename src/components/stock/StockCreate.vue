<template>
    <v-container grid-list-xs>
        <v-row class="justify-center">
            <v-col lg="8" md="12" sm="12">
                <v-card class="mx-auto pa-5" outlined>
                    <v-form @submit.prevent="handleSubmit">
                        <v-text-field v-model="products.name" label="Name" :counter="10" required />
                        <v-text-field v-model="products.price" label="Price" suffix="THB" type="number" required />
                        <v-text-field v-model="products.stock" label="Stock" suffix="PCS" type="number" required />
                        <input @change="onChange" type="file" />
                        <br />
                        <v-img v-if="imageURL" :src="imageURL" style="width:200px;height:200px;" class="mt-3" />
                        <v-row>
                            <v-spacer />
                            <v-btn class="mr-4" @click="$router.back()">Cancle</v-btn>
                            <v-btn type="submit" color="success">Confirm</v-btn>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        async handleSubmit() {
            const { name, price, stock } = this.products
            let formData = new FormData()
            formData.append('name', name)
            formData.append('price', price)
            formData.append('stock', stock)
            formData.append('image', this.products.image)

            await axios.post('/products', formData)
            this.$router.back()
        },
        onChange(e) {
            const fs = new FileReader()
            fs.onload = event => {
                this.imageURL = event.target.result
            }
            fs.readAsDataURL(e.target.files[0])
            this.products.image = e.target.files[0]
        }
    },
    data: () => ({
        imageURL: null,
        products: {
            name: '',
            price: '',
            stock: '',
            image: null
        }
    })
}
</script>

<style>
</style>