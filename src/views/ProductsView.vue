<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <input type="text" v-model="searchQry" @input="search" placeholder="Search product by name" class="form-control">
            </div>
            <div class="col">
                <button class="btn btn-success" @click="sortByPrice">Sorting by price</button>
            </div>
        </div>
        <div class="row" v-if="products">
           <Card v-for="product in filterproducts" :key="product.PRODUCT_ID">
                <template #cardHeader>
                    <h4 class="card-title">{{ product.PRODUCT_NAME }}</h4>
                </template>
                <template #cardBody>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Quantity: {{ product.PRODUCT_QUANTITY }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Amount: R{{ product.PRODUCT_PRICE }}
                    </p>
                    <router-link :to="{name: 'product', params: {id: product.PRODUCT_ID}}">View More</router-link>
                    <button><a @click="addCart(product)">Add to cart</a></button>
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
      addCart(product){
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

</style>