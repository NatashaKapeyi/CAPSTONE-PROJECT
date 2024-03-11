import express from 'express'
import bodyParser from 'body-parser'
import { cart } from '../model/index.js'
import { verifyToken } from '../middleware/AuthenticateUser.js'

const CartRouter = express.Router()

//Fetch cart items
CartRouter.get('/',(req, res)=>{
    try {
        cart.retrieveCart(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to retrieve cart items'
        })
    }
})
//editing cart items
CartRouter.patch('/patchCart/:id',bodyParser.json(),(req, res)=>{
    try {
        cart.patchCart(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to update cart item'
        })
    }
})
CartRouter.delete('/deleteCart/:id',bodyParser.json(),(req, res)=>{
    try {
        cart.deleteCart(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to update cart item'
        })
    }
})

export{
    CartRouter
}