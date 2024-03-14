<template>
    <div>
        <div id="ship" class="container-fluid justify-content-center d-flex text-white fw-bold">
            <router-link class="navbar-brand" to="/cart">ENJOY FREE SHIPPING FOR ORDERS OVER R500. T’S &C’S APPLY <i
                    class="bi bi-truck text-black fs-3"></i></router-link>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <router-link class="navbar-brand me-auto" to="/"><img src="https://i.ibb.co/4FYfXtW/Frame-1-2.png" alt="logo" loading="lazy" class="img-fluid"></router-link>
      <ul class="navbar-nav mb-lg-0 mx-auto fw-bolder p-2">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link " to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">
            Products
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin"> Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart"> Checkout</router-link>
        </li>
        <li>
        <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li>
        <router-link class="nav-link" to="/login">Login</router-link>
        </li>
      </ul>
      <form class="d-flex " role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>















<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Serif&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital@0;1&display=swap');
#ship{
    background-color: #58641D;
    padding:3px;
    font-family:  "Kanit", sans-serif;
}
.bi::before, [class^="bi-"]::before, [class*=" bi-"]::before {
    vertical-align: -.29em;

}

.navbar-brand{
    white-space: wrap;
}

nav div{
   justify-content: space-between; 
   font-family:"Kanit", sans-serif ;
   background-color: #FFFFFF;
}
.navbar{
    background-color: #FFFFFF;
}


img[alt='logo']{
width: 9rem;
bottom: -28%;
position: absolute;
}


</style>