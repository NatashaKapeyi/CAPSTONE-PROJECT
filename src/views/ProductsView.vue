<template>
    <div class="container">
        <div class="row justify-content-center  mt-5">
            <div class="col">
                <input type="text" v-model="searchQry" @input="search" placeholder="Search product by name" class="form-control">
            </div>
            <div class="col">
                <button class="btn btn-success" @click="sortByPrice">Sorting by price</button>
            </div>
        </div>
        <div class="row justify-content-center mt-5" v-if="products">
           <Card v-for="product in filterproducts" :key="product.PRODUCT_ID">
                <template #cardHeader>
                    <img :src="product.PRODUCT_IMAGE" class="img-fluid ">
                    <h4 class="card-title">{{ product.PRODUCT_NAME }}</h4>
                </template>
                <template #cardBody>
                    <p class="card-text text-dark bg-gradient bg-success-subtle fw-bold p-2">
                         R{{ product.PRODUCT_PRICE }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-success-subtle p-2">
                         {{ product.PRODUCT_WEIGHT }}ml
                    </p>
                    <div class="d-flex"> <router-link :to="{name: 'product', params: {id: product.PRODUCT_ID}}" class="text-decoration-none btn btn-dark">View More</router-link>
                    <button class="btn btn-success fw-bold text-black"><a @click.prevent="addingCart(product)">Add to cart</a></button></div>
                   
                </template>
            </Card>
        </div>
        <div class="row" v-else>
            <p class="lead">Loading</p>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ProductsView',
    components: {
        Card
    },
    computed:{
        products(){
            return this.$store.state.products
        },
        filterproducts() {
            if (!this.searchQry) {
                return this.products;
            }
            return this.products.filter(product => {
                return product.PRODUCT_NAME.toLowerCase().includes(this.searchQry.toLowerCase());
            });
        }
    },
    data() {
        return {
            searchQry: '',
            sortDirection: 'asc' //initial sort
        };
    },
    mounted() {
        this.$store.dispatch('retrieveProducts')
    },
    props: ['product'],
    methods:{
      addingCart(product){
         console.log("Product object:", product);
        this.$store.dispatch('addCart', product);
        console.log(`Added ${product.PRODUCT_NAME} to cart.`)
      } ,
      search() {
    if (!this.searchQry) {
        // when nothing is being searched , all products will be shown
        this.filterproducts = this.products;
        return;
    }
    // Filter products based on the searchQry
    this.filterproducts = this.products.filter(product => {
        return product.PRODUCT_NAME.toLowerCase().includes(this.searchQry.toLowerCase());
        //else return "search something else"
    });
},
sortByPrice() {
            // Toggle sort direction
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

            // Sort products by price
            this.filterproducts.sort((a, b) => {
                if (this.sortDirection === 'asc') {
                    return a.PRODUCT_PRICE - b.PRODUCT_PRICE;
                } else {
                    return b.PRODUCT_PRICE - a.PRODUCT_PRICE;
                }
            });
        }
    }
}
</script>

<style scoped>
 .d-flex{
    justify-content: space-between;
 }
 .card{
    background-color:rgb(251, 249, 249);
 }
 
</style>