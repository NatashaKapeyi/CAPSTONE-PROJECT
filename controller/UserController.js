//
import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js'

const userRouter = express.Router()
//Fetch users
userRouter.get('/',(req, res)=>{
    try {
        users.retrieveUsers(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to retrieve users '
        })
    }
})
// fetch user
userRouter.get("/:id", (req, res) => {
    try {
      users.retrieveUser(req, res);
    } catch (e) {
      res.json({
        status: res.statusCode,
        msg: "Failed to fetch user",
      });
    }
  });

//Add a user
userRouter.post('/register',bodyParser.json(),(req, res)=>{
    try {
        users.addUser(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to add a new user '
        })
    }
})
//update a user
userRouter.patch('/patch/:id',bodyParser.json(),(req, res)=>{
    try {
        users.patchUser(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to update '
        })
    }
})
userRouter.post('/login',bodyParser.json(),(req, res)=>{
    try {
        users.login(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg:'Failed to login '
        })
    }
})
export{
    userRouter,express
}