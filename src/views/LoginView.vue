<template>
    <div>
    LOGIN
    </div>
</template>

<script>
  export default {
    name: 'LoginView',
    components: {

    },

    computed: {
    
    },
    mounted() {    },
    methods:{
        login() {
            return this.$store.state.login
        }
    }
}
</script>

<style scoped>

</style>