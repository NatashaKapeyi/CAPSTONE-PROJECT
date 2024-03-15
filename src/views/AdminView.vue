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
        <td>{{item.USER_PASSORD}}</td>
        <td>{{item.USER_PROFILE}}</td>
        <td><a  id="edit"  data-bs-toggle="modal" data-bs-target="#editUser" class="btn btn-outline-success">Edit User Form</a>
        <a @click="(item.USER_ID)" id="edit" class="btn btn-outline-success">Edit</a>
        <a @click="(item.USER_ID)" id="delete" class="btn btn-outline-danger">Delete</a></td>
        
      </tbody>
    </table>
</template>

<script>
    export default {
    name: 'AdminView',
    components: {
        Card
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('retrieveProducts')
    }
}
</script>

<style scoped>

</style>