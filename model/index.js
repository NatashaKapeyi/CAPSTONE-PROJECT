//importing essential files

import {Users} from "./Users.js"
import { Products } from "./Products.js";
import {Cart} from "./Cart.js"


//Creating objects

let users= new Users()
let products = new Products()
let cart = new Cart()
export{
    users,
    products,
    cart
}