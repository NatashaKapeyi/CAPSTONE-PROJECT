import { createStore } from 'vuex'
import router from '@/router'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
import axios from 'axios'
const {cookies} = useCookies()
import AuthenticateUser from '@/service/AuthenticateUser'
const capstoneURL = 'https://capstone-project-tcp1.onrender.com/'


export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    cart:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
    setCart(state, value) {
      state.cart = value
    },

  },
  actions: {
    async addUser(context, payload) {
      try {
     let {msg} = (await axios.post(`${capstoneURL}users/registerUser`,payload)).data 
     if({msg}) {
      context.dispatch('retrieveUsers')
      sweet({
        title: 'Register',
        text: 'User registered',
        icon: "success",
        timer: 3000
      })
     }
      } catch (error) {
        sweet({
          title: 'Error',
          text:error.message,
          icon: "error",
          timer: 3000
        }) 
      }
    },
    async retrieveUsers(context){
      try {
        let {results} =(await axios.get(`${capstoneURL}users`)).data
        if({results}){
          context.commit('setUsers', results)
        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving users.',
          icon: "error",
          timer: 3000
        })
      }
    },
    async retrieveUser(context, payload) {
      try{
        let {result} = (await axios.get(`${capstoneURL}users/${payload.USER_ID}`)).data
        if({result}) {
          context.commit('setUser', result)
        }else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was found',
            icon: "info",
            timer: 3000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'A user was not found.',
          icon: "error",
          timer: 3000
        }) 
      }
    },
    async patchUser(context, payload) {
      try{
        let {msg} = await axios.patch(`${capstoneURL}users/patchUser/${payload.USER_ID}`,payload)
        if({msg}) {
          context.dispatch('retrieveUsers')
          sweet({
            title: 'Updated user',
            text: msg,
            icon: "success",
            timer: 3000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: "error",
          timer: 3000
        }) 
      }
    },
    async deleteUser(context, payload) {
      try{
        let {msg} = await axios.delete(`${capstoneURL}users/deleteUser/${payload.USER_ID}`)
        if({msg}) {
          context.dispatch('retrieveUsers')
          sweet({
            title: 'User removed',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting a user.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async login(context, payload) {
      try{
       let {msg, token, result} = (
        await axios.post(`${capstoneURL}users/login`, payload)).data 
       if(result){
        context.commit('setUser', {msg, result})
        cookies.set('LegitUser', {
          token,msg , result
        })
        AuthenticateUser.applyToken(token)
        sweet({
          title: msg,
          text: `Welcome back, 
          ${result?.USER_NAME} ${result?.USER_LASTNAME}`,
          icon: "success",
          timer: 2000
        })
          router.push({name: 'home'})
        }else {
          sweet({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          })
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to login.',
          icon: "error",
          timer: 2000
        })
      }
   },
   async retrieveProducts(context) {
    try{
      let {results} = 
      (await axios.get(`${capstoneURL}products`)).data
      if(results) {
        context.commit('setProducts', results)
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'An error occurred when retrieving products.',
        icon: "error",
        timer: 2000
      }) 
    }
  },
  async retrieveProduct(context, payload) {
    try{
      let {result} = (await axios.get(`${capstoneURL}products/${payload.USER_ID}`)).data
      if(result) {
        context.commit('setProduct', result)
      }else {
        sweet({
          title: 'Retrieving a single product',
          text: 'Product was found',
          icon: "info",
          timer: 2000
        }) 
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'A product was not found.',
        icon: "error",
        timer: 2000
      }) 
    }
  },
  async patchProduct(context, payload) {
    try{
      let {msg} = await axios.patch(`${capstoneURL}products/patchProduct/${payload.PRODUCT_ID }`,payload)
      if({msg}) {
        context.dispatch('retrieveProducts')
        sweet({
          title: 'Updated ',
          text: msg,
          icon: "success",
          timer: 2000
        }) 
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: e.message,
        icon: "error",
        timer: 2000
      }) 
    }
  },
  async deleteProduct(context, payload) {
    try{
      let {msg} = await axios.delete(`${capstoneURL}products/deleteProduct/${payload.PRODUCT_ID}`)
      if({msg}) {
        context.dispatch('retrieveProducts')
        sweet({
          title: 'Deleted a product',
          text: msg,
          icon: "success",
          timer: 2000
        }) 
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'An error occurred when deleting product.',
        icon: "error",
        timer: 2000
      }) 
    }
  },
  async addProduct(context, payload) {
    try{
      let {msg} = (await axios.post(`${capstoneURL}products/addProduct`,payload))
      if({msg}) {
        context.dispatch('retrieveProducts')
        sweet({
          title: 'successfully added a product',
          text: msg,
          icon: "success",
          timer: 2000
        }) 
      }
    }catch(error) {
      sweet({
        title: 'Error',
        text: 'An error occured when adding a product',
        icon: "error",
        timer: 2000
      }) 
    }
  },
  async patchCart(context, payload) {
    try{
      let {msg} = (await axios.post(`${capstoneURL}cart/patchCart/${payload.USER_ID}`,payload))
      if(msg) {
        context.dispatch('retrieveCart')
        sweet({
          title: 'successfully updated an item',
          text: msg,
          icon: "success",
          timer: 2000
        }) 
        //  
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'Please try again later',
        icon: "error",
        timer: 2000
      }) 
    }
  },
  async retrieveCart(context){
    try {
      let {results} = (await axios.get(`${capstoneURL}cart`)).data
      console.log(results);
      if(results){
        context.commit('setCart', results)
      }
    } catch (error) {
      // 'An error occurred when retrieving cart.'
      sweet({
        title: 'Error',
        text: error.message,
        icon: "error",
        timer: 3000
      })
    }
  },
  async deleteCart(context, payload) {
    try{
      let {msg} = await axios.delete(`${capstoneURL}cart/deleteCart/${payload.USER_ID}`)
      if(msg) {
        context.dispatch('retrieveCart')
        sweet({
          title: 'Delete cart item',
          text: msg,
          icon: "success",
          timer: 2000
        }) 
      }
    }catch(e) {
      sweet({
        title: 'Error',
        text: 'An error occurred when deleting item.',
        icon: "error",
        timer: 2000
      }) 
    }
  },

  },
  modules: {
  }
})
