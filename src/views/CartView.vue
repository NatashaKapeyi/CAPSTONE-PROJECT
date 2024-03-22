<template>
    <div class="text-black"  v-for="item in cart" :key="item.CART_ID">
 <h1 class="display-5 mt-4 text-center"> {{ item.USER_NAME }}'s Cart'</h1>
    <div class="row mt-5 justify-content-center">
        <table class="w-50 border">
    <thead>
        <tr>
            
            <th>CART ID</th>
            <th>PRODUCT NAME</th>
            <th>PRODUCT PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
           
        </tr>
    </thead>
    <tbody>
       
        <tr>
        
            <td>{{ item.CART_ID }}</td>
            <td>{{ item.PRODUCT_NAME }}</td>
            <td>{{ item.PRODUCT_PRICE }}</td>
            <td>{{ item.QUANTITY_IN_CART }}</td>
            <td></td>
        
        </tr>
       
    </tbody>
</table>

    </div>
</div>
</template>

<script>
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
export default {
    name: 'CartView',
    components: {

    },

    computed: {
        cart() {
            return this.$store.state.cart
        },
        result() {
            return cookies.get('LegitUser').result
        }
    },
    mounted() {
        
        this.$store.dispatch('retrieveCart')
    }
}
</script>

<style scoped></style>