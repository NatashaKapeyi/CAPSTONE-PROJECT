<template>
    <footer class="bg-white text-center text-lg-start text-black mt-5 fixed-bottom">
      <!-- Copyright -->
      <div class="text-center" style="background-color:#58641D">
        <p class="lead">MY GARDEN&copy;<span>{{ currYear }}</span></p>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- End of .container -->
    </template>
    
    <script>
        export default {
            name:'Footer',
         data(){
            return {
                currYear:new Date().getFullYear( )
            }
         }    
        }
    </script>
    
    <style scoped>
  p{
    margin-bottom: 0;
  }
    </style>