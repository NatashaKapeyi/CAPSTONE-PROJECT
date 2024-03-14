<template>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="payload.USER_EMAIL" type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="payload.USER_PASSWORD" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="button" class="btn btn-primary" @click.prevent="signIn()">Submit</button>
    </form>
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