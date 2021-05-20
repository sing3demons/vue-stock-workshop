<template>
    <v-container>
        <!-- 'title', 'subTitle', 'avatar_color', 'avatar_icon' -->
        <v-row>
            <v-col lg="3" md="6" sm="12" cols="12">
                <StockCard title="TOTAL" subTitle="1,800" avatar_color="#00a65a" avatar_icon="mdi-cart-outline" />
            </v-col>
            <v-col lg="3" md="6" sm="12" cols="12">
                <StockCard title="SOLD-OUT" subTitle="12" avatar_color="#f39c12" avatar_icon="mdi-flask-empty-outline" />
            </v-col>
            <v-col lg="3" md="6" sm="12" cols="12">
                <StockCard title="RETURN" subTitle="2" avatar_color="#dd4b39" avatar_icon="mdi-keyboard-return" />
            </v-col>
            <v-col lg="3" md="6" sm="12" cols="12">
                <StockCard title="DISCOUNT" subTitle="101" avatar_color="#00c0ef" avatar_icon="mdi-gift-outline" />
            </v-col>
        </v-row>

        <!-- Table section -->

        <v-card class="mt-10">
            <v-data-table :search="search" :headers="headers" :items="mDataArray">
                <!-- table top section -->

                <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title>Stock</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical />
                        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details />
                        <v-spacer />
                        <v-btn @click="$router.push('/stock-create')" color="primary" dark class="mb-2">
                            <v-icon left>add</v-icon>
                            <span>New Product</span>
                        </v-btn>
                    </v-toolbar>
                </template>

                <!-- table tr section -->
                <template v-slot:item="{ item }">
                    <tr>
                        <td>{{ item.id }}</td>
                        <td>
                            <!-- lazy-src="http://www.codemobiles.com/biz/images/cm_logo.png?ref=10" -->
                            <v-img :src="item.image" aspect-ratio="1" max-width="50" max-height="50" />
                        </td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.stock }} pcs.</td>
                        <td>
                            <v-icon class="mr-2" @click="editStock(item)">edit</v-icon>
                            <span class="ma-1"></span>
                            <v-icon @click="deleteItem(item)">delete</v-icon>
                        </td>
                    </tr>
                </template>
            </v-data-table>

            <v-dialog v-model="confirmDeleteDlg" max-width="290">
                <v-card>
                    <v-card-title primary-title>Confirm Delete</v-card-title>

                    <v-card-text class="body">
                        Are you sure to delete this product? You cannot restore it after
                        clicking confirm.
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="confirmDeleteDlg = false">Cancel</v-btn>

                        <v-btn color="error" text @click="confirmDelete">Confirm</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios'
import StockCard from './StockCard.vue'
export default {
    components: { StockCard },
    data: () => ({
        search: '',
        mDataArray: [],
        headers: [
            {
                text: 'Id',
                align: 'left',
                sortable: false,
                value: 'id'
            },
            { text: 'Image', value: 'image' },
            { text: 'Name', value: 'name' },
            { text: 'Price', value: 'price' },
            { text: 'Stock', value: 'stock' },
            { text: 'Action', value: 'action' }
        ],
        confirmDeleteDlg: false,
        productID: ''
    }),
    mounted() {
        this.loadProducts()
    },
    methods: {
        async loadProducts() {
            const { data } = await axios.get('/products')
            this.mDataArray = data.products
        },
        editStock(item) {
            this.$router.push(`/stock-edit/${item.id}`)
        },
        deleteItem({ id }) {
            this.confirmDeleteDlg = true
            this.productID = id
        },
        async confirmDelete() {
            await axios.delete(`/products/${this.productID}`)
            this.confirmDeleteDlg = false
            this.loadProducts()
        }
    }
}
</script>

<style>
</style>