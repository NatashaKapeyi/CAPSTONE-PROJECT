<template>
    <div>
        <h1>2</h1>
        <h1 class=" lead fs-6 " v-for="item in cart" :key="item.CART_ID">
            {{ item.USER_ID }}
            <p class="d-block pt-2 ">{{ item.PRODUCT_ID }}</p>
            <p>{{ item.PRODUCT_PRICE }}</p>
        </h1>

    </div>
</template>

<script>
export default {
    name: 'CartView',
    components: {

    },

    computed: {
        cart() {
            return this.$store.state.cart
        }
    },
    mounted() {
        this.$store.dispatch('retrieveCart')
    }
}
</script>

<style scoped></style>