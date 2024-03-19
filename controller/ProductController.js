import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'
import { verifyToken } from '../middleware/AuthenticateUser.js'
//Routing
const Router = express.Router()

//Fetching products,product
Router.get('/',verifyToken,(req, res)=>{
    try {
        products.retrieveProducts(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to retrieve products '
        })
    }
})
Router.get('/:id',verifyToken,(req, res)=>{
    try {
        products.retrieveProduct(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to retrieve product '
        })
    }
})
Router.post('/addProduct',bodyParser.json(),(req, res)=>{
    try {
        products.addProduct(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to add a product item '
        })
    }
})
Router.patch('/patchProduct/:id',bodyParser.json(),(req, res)=>{
    try {
        products.patchProduct(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to edit product '
        })
    }
})
Router.delete('/deleteProduct/:id',bodyParser.json(),(req, res)=>{
    try {
        products.deleteProduct(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to delete '
        })
    }
})
export{
    Router
}
