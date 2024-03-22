<template>
    <div class=" row justify-content-center">
        <button type="button" class="btn btn-primary mt-5" id="add" data-bs-toggle="modal" data-bs-target="#addNewUser">
    Register
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
          <input type="text" placeholder="USER_NAME" class="form-control my-2"  v-model="payload.USER_NAME" required>
    <input type="text"  placeholder="USER_LASTNAME" class="form-control my-2" v-model="payload.USER_LASTNAME" required>
    <input type="number" placeholder="USER_AGE" class="form-control my-2" v-model="payload.USER_AGE" required>
    <input type="text" placeholder="USER_GENDER" class="form-control my-2" v-model="payload.USER_GENDER" required>
    <input type="text" placeholder="USER_ROLE" class="form-control my-2" v-model="payload.USER_ROLE" required>
    <input type="t" placeholder="USER_EMAIL" class="form-control my-2" v-model="payload.USER_EMAIL" required>
    <input type="password" placeholder="USER_PASSWORD" class="form-control my-2" v-model="payload.USER_PASSWORD" required>
    <input type="text" placeholder="USER_PROFILE" class="form-control my-2" v-model="payload.USER_PROFILE" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <a @click="addUser()" class="btn btn-primary">Add Button</a>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
    data(){
      return{ 
        searchQry: '',
        payload:{
      USER_NAME:'',
      USER_LASTNAME:'',
      USER_AGE:'',
      USER_GENDER:'',
      USER_ROLE:'',
      USER_EMAIL:'',
      USER_PASSWORD:'',
      USER_PROFILE:'',
        }
    }
    },
    methods: {
    addUser(){
      this.$store.dispatch('addUser',this.payload)
    
    }}
    
  }
  </script>
  
  <style scoped>
  #add{
    justify-content: center;
    width: 70%;
    height: 70%
  }
</style>