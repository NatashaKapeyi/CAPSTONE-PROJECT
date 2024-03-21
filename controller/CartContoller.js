import express from 'express'
import bodyParser from 'body-parser'
import { cart } from '../model/index.js'
import { verifyToken } from '../middleware/AuthenticateUser.js'

const CartRouter = express.Router()

//Fetch cart items
CartRouter.get('user/:id/cart',(req, res)=>{
    try {
        cart.retrieveCart(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to retrieve cart items'
        })
    }
})
CartRouter.post('/user/:id/addCart',bodyParser.json(),(req, res)=>{
    try {
        const USER_ID = req.params.id;
        cart.addCart(USER_ID, req.body, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to add a product item '
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