<template>
 <div class="container-fluid">
        <div class="row mt-5 m-4">
    <div class="col mb-3 d-flex justify-content: space-between ">
          <input type="text" placeholder="search a product" required class="form-control w-25" data-search-product>
          <button class="btn btn-success text-black " data-sort-product>SORT BY PRICE</button>
        </div>

      </div>


       <!-- Button trigger modal -->  
  <button type="button" class="btn btn-primary mt-5" id="add" data-bs-toggle="modal" data-bs-target="#addNewProduct">
    Add Product
  </button>

  <!-- Modal -->
  <div class="modal fade" id="addNewProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">Add a new product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="prod_Name" class="form-control my-2" v-model="prod_Name" required>
          <input type="number" placeholder="quantity" class="form-control my-2" v-model="quantity" required>
          <input type="number"  placeholder="amount" class="form-control my-2" v-model="amount" required>
          <input type="text" placeholder="category" class="form-control my-2" v-model="category" required>
          <input type="text" placeholder="prod_URL" class="form-control my-2" v-model="prod_URL" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <a @click="addProduct()" class="btn btn-success">Add</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal , only what to edit and close then press the button after-->
  <div class="modal fade" id="editProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-block">
          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">Edit a product</h1>
          <p class="text-black">Specify what you want to edit , close the modal and press edit button after that.</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="prod_Name" class="form-control my-2" v-model="prod_Name" required>
          <input type="number" placeholder="quantity" class="form-control my-2" v-model="quantity" required>
          <input type="number"  placeholder="amount" class="form-control my-2" v-model="amount" required>
          <input type="text" placeholder="category" class="form-control my-2" v-model="category" required>
          <input type="text" placeholder="prod_URL" class="form-control my-2" v-model="prod_URL" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
      <table class=" table table-responsive mt-5 m-5 container-fluid">
        <tr class="thead">
          <th>id</th>
          <th>Product Name</th>
          <th>quantity</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        <tbody v-for="item in products" :key="item.PRODUCT_ID" class="mt-3">
          <td>{{item.PRODUCT_ID}}</td>
          <td>{{item.PRODUCT_NAME}}</td>
          <td>{{item.PRODUCT_QUANTITY}}</td>
          <td>{{item.PRODUCT_PRICE}}</td>
          <td>{{item.PRODUCT_CATEGORY}}</td>
          <td>{{item.PRODUCT_IMAGE}}</td>
        
          <td><a data-bs-toggle="modal" data-bs-target="#editProduct" id="edit" class="btn btn-outline-success">Edit form</a>
          <a @click="editProd(item.PRODUCT_ID)" id="edit" class="btn btn-outline-success">Edit</a>
          <a @click="deleteProd(item.PRODUCT_ID)" id="delete" class="btn btn-outline-danger">Delete</a></td>
          
        </tbody>
      </table>


      <button type="button" class="btn btn-primary mt-5" id="add" data-bs-toggle="modal" data-bs-target="#addNewUser">
    Add User
  </button>

  <!-- Modal for user -->
  <div class="modal fade" id="addNewUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-block">
          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">Add a new user</h1>
          <p class="text-black">Specify what you want to add</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="USER_NAME" class="form-control my-2" v-model="USER_NAME" required>
    <input type="text"  placeholder="USER_LASTNAME" class="form-control my-2" v-model="USER_LASTNAME" required>
    <input type="number" placeholder="USER_AGE" class="form-control my-2" v-model="USER_AGE" required>
    <input type="text" placeholder="USER_GENDER" class="form-control my-2" v-model="USER_GENDER" required>
    <input type="text" placeholder="USER_ROLE" class="form-control my-2" v-model="USER_ROLE" required>
    <input type="text" placeholder="USER_EMAIL" class="form-control my-2" v-model="USER_EMAIL" required>
    <input type="text" placeholder="USER_PASSWORD" class="form-control my-2" v-model="USER_PASSWORD" required>
    <input type="text" placeholder="USER_PROFILE" class="form-control my-2" v-model="USER_PROFILE" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <a @click="addUser()" class="btn btn-primary">Add Button</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal for user -->
  <div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">Edit form</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
    <input type="text" placeholder="USER_NAME" class="form-control my-2" v-model="USER_NAME" required>
    <input type="text"  placeholder="USER_LASTNAME" class="form-control my-2" v-model="USER_LASTNAME" required>
    <input type="number" placeholder="USER_AGE" class="form-control my-2" v-model="USER_AGE" required>
    <input type="text" placeholder="USER_GENDER" class="form-control my-2" v-model="USER_GENDER" required>
    <input type="text" placeholder="USER_ROLE" class="form-control my-2" v-model="USER_ROLE" required>
    <input type="text" placeholder="USER_EMAIL" class="form-control my-2" v-model="USER_EMAIL" required>
    <input type="text" placeholder="USER_PASSWORD" class="form-control my-2" v-model="USER_PASSWORD" required>
    <input type="text" placeholder="USER_PROFILE" class="form-control my-2" v-model="USER_PROFILE" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
 </div>



     
    

     <table class=" table table-responsive m-5 container-fluid">
      <tr class="thead">
        <th>id</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Role</th>
        <th>Email</th>
        <th>Password</th>
        <th>Profile</th>
        <th>Action</th>
      </tr>
      <tbody v-for="item in users" :key="item.USER_ID" >
        <td>{{item.USER_ID}}</td>
        <td>{{item.USER_NAME}}</td>
        <td>{{item.USER_LASTNAME}}</td>
        <td>{{item.USER_AGE}}</td>
        <td>{{item.USER_GENDER}}</td>
        <td>{{item.USER_ROLE}}</td>
        <td>{{item.USER_EMAIL}}</td>
        <td>{{item.USER_PASSWORD}}</td>
        <td>{{item.USER_PROFILE}}</td>
        <td><a  id="edit"  data-bs-toggle="modal" data-bs-target="#editUser" class="btn btn-outline-success">Edit User Form</a>
        <a @click="patchUser(item.USER_ID)" id="edit" class="btn btn-outline-success bg-black">Edit</a>
        <a @click="deleteUser(item.USER_ID)" id="delete" class="btn btn-outline-danger">Delete</a></td>
        
      </tbody>
    </table>
</template>

<script>
export default {
    data(){
      return{ 
        payload:{
      USER_ID:'',
      USER_NAME:'',
      USER_LASTNAME:'',
      USER_AGE:'',
      USER_GENDER:'',
      USER_ROLE:'',
      USER_EMAIL:'',
      USER_PASSWORD:'',
      USER_PROFILE:''
      }
    }
    },
    methods: {
    addUser(){
      this.$store.dispatch('addUser',this.$data)
    },
    deleteUser(USER_ID) {
      this.$store.dispatch('deleteUser',{ id: USER_ID})
    },
    patchUser(USER_ID){
    let patch = {
      USER_ID:USER_ID,
      USER_NAME: this.USER_NAME,
      USER_LASTNAME: this.USER_LASTNAME,
      USER_AGE: this.USER_AGE,
      USER_GENDER: this.USER_GENDER,
      USER_ROLE: this.USER_ROLE,
      USER_EMAIL:this.USER_EMAIL,
      USER_PASSWORD:this.USER_PASSWORD,
      USER_PROFILE: this.USER_PROFILE
      }  
      this.$store.dispatch('patchUser',patch)
      

    }
    },
  
    computed: {
      products(){
        return this.$store.state.products
      },
      retrieveProducts(){
        return this.$store.dispatch('retrieveProducts')
      },
      users(){
      return this.$store.state.users
    },
    retrieveUsers(){
     return this.$store.dispatch('retrieveUsers')
    },
  
      
    },
    mounted(){
      this.retrieveProducts
      this.retrieveUsers
    },
    
  }
  </script>
  <style>
  .table {
    width: 96%;
    border-collapse: collapse;
    margin-top: 20px;
    align-content: center;
    /* margin: 2.3rem; */
    
  }
  
  .table th, .table td {
    border: 1px solid #e00b0b;
    padding: 1px;
    text-align: left;
  }
  
  .thead {
    background-color:inherit;
    color: rgb(255, 0, 0);
  }
  
  .table img {
    max-width:400px;
    max-height: 50px;
    border-radius: 5px;
    background-color: inherit;
  }
  
  #edit, #delete {
    color: rgb(255, 0, 0);
   background-color: inherit;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 2px;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 10px;
  }
  
  .table #edit:hover {
    background-color: #39983d;
  }
  .table #delete:hover {
    background-color: #dc5957;
  }
  
  #add{
    margin-left: 2.5rem;
    display: grid;
  }

  .d-flex{
  justify-content: space-between
}

@media screen and (max-width: 1080px) {
    .container-fluid {
      padding: 0 15px; 
    }

    .table {
      width: 100%;
    }

    .d-flex {
      flex-direction: column;
    }

    #add {
      margin-left: 0; 
    }
  }

  @media screen and (max-width: 720px) {
    .container-fluid {
      padding: 0 10px; 
    }

    .table {
      width: 100%;
    }

    .d-flex {
      flex-direction: column;
    }

    #add {
      margin-left: 0; 
    }

    .modal-dialog {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 300px) {
    .container-fluid {
      padding: 0 5px; 
    }

    .table {
      width: 100%;
    }

    .d-flex {
      flex-direction: column;
    }

    #add {
      margin-left: 0; 
    }

    .modal-dialog {
      max-width: 100%;
    }

    .modal-body input {
      width: 100%;
    }

  }


  </style>