<template>
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
     USER_ID:'',
      USER_NAME:'',
      USER_AGE:'',
      USER_GENDER:'',
      USER_ROLE:'',
      USER_EMAIL:'',
      USER_PASSWORD:'',
      USER_PROFILE:''
      }
    },
    methods: {
    addUser(){
      this.$store.dispatch('addUser',this.$data)
    },
    deleteUser(USER_ID) {
      this.$store.dispatch('deleteUser',USER_ID)
    },
    patchUser(USER_ID){
      let edit = {
      USER_ID:USER_ID,
      USER_NAME: this.USER_NAME,
      USER_LASTNAME: this.USER_LASTNAME,
      USER_AGE: this.USER_AGE,
      USER_AGE: this.USER_AGE,
      USER_ROLE: this.USER_ROLE,
      USER_EMAIL:this.USER_EMAIL,
      USER_PASSWORD:this.USER_PASSWORD,
      USER_PROFILE: this.USER_PROFILE
      }
      this.$store.dispatch('patchUser',edit)

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