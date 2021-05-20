<template>
    <v-container grid-list-xs>
        <h2>Stock Edit {{$route.params.id}}</h2>
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
    data: () => ({
        imageURL: null,
        products: {
            name: '',
            price: '',
            stock: '',
            image: null
        }
    }),
    async mounted() {
        const { data } = await axios.get(`/products/${this.$route.params.id}`)
        this.products = data.product
        this.imageURL = this.products.image
    },
    methods: {
        onChange(e) {
            const fs = new FileReader()
            fs.onload = event => {
                this.imageURL = event.target.result
            }
            fs.readAsDataURL(e.target.files[0])
            this.products.image = e.target.files[0]
        },
        async handleSubmit() {
            const { name, price, stock } = this.products
            let formData = new FormData()
            formData.append('name', name)
            formData.append('price', price)
            formData.append('stock', stock)
            if (this.products.image != this.imageURL) {
                formData.append('image', this.products.image)
            }

            await axios.put(`/products/${this.$route.params.id}`, formData)
            this.$router.back()
        }
    }
}
</script>

<style>
</style>