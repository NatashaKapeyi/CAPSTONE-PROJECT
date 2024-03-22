<template>
 <div class="container">
  <div class="row justify-content-center">
    <form class="mt-5 w-50">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="payload.USER_EMAIL" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="payload.USER_PASSWORD" type="password" class="form-control" id="exampleInputPassword1">
      </div>
     <p>Don't have an account , <router-link link to="/register">Sign up here</router-link> </p>
      <button type="button" class="btn btn-primary" @click.prevent="signIn()">Submit</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            payload: {
                USER_EMAIL: '',
                USER_PASSWORD: '',
            }


        }

    },
    components: {

    },

    computed: {

    },
    mounted() { },
    methods: {
        signIn() {
            this.$store.dispatch("login", this.payload)
        }
    }
}
</script>

<style scoped></style>