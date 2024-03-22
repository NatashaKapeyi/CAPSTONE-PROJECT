<template>
    <section class="container mt-5 text-black">
      <div class="card ml-0 mt-5" v-if="product">
        <div class="card-body">
          <div class="row justify-content-center align-items-center text-center">
            <div class="col-md-6"><img :src="product.PRODUCT_IMAGE" class="img-fluid"></div>
            <div class="col-md-6">
              <h2 class="text-uppercase card-title card-title mt-5">{{ product.PRODUCT_NAME }}</h2>
              <h4 class="card-text">{{ product.PRODUCT_CATEGORY }}ml</h4>
              <!-- Assuming item.amount belongs to product -->
              <h5>{{ product.PRODUCT_PRICE }}</h5>
              <router-link :to="{ name: 'products', params: { id: item.PRODUCT_ID }}"><a class="btn">Go back to Products</a></router-link>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    computed: {
      // Rename the computed property to "products" to avoid conflict
      products() {
        return this.$store.state.product;
      },
    },
    mounted() {
   
      this.$store.dispatch('retrieveProduct',this.$route.params);
    },
  };
  </script> 
    
    