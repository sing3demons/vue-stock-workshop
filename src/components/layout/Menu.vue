 <template>
    <!-- <v-sheet app height="400" class="overflow-hidden" style="position: relative;"> -->
    <v-navigation-drawer app permanent absolute dark src="@/assets/background_menu.jpg">
     <router-link to="/" exact>
        <!-- <v-list-item>
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
        </v-list-item>-->
       
            <img src="@/assets/vue_display.jpg" alt width="100%" />
        </router-link>

        <v-divider></v-divider>

        <v-list shaped>
            <v-list-item-group v-model="selectedMenu" mandatory color="primary">
                <v-list-item v-for="({icon,title,route},index) in menus" :key="index" link @click="onClickMenu(route)">
                    <v-list-item-icon>
                        <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    <!-- </v-sheet> -->
</template>

<script>
export default {
    // props: ['toggle'],
    methods: {
        onClickMenu(link) {
            this.$router.push(link)
        }
    },
    data: () => ({
        selectedMenu: 0,
        items: [
            { title: 'Home', icon: 'mdi-home-city' },
            { title: 'My Account', icon: 'mdi-account' },
            { title: 'Users', icon: 'mdi-account-group-outline' }
        ],
        menus: [
            { icon: 'mdi-apps-box', title: 'Stock', route: '/stock' },
            { icon: 'mdi-chart-areaspline', title: 'Report', route: '/report' },
            { icon: 'mdi-text-box-check-outline', title: 'About', route: '/about' }
        ]
    })
}
</script>

<style>
</style>