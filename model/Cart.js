import {connection as db} from "../config/index.js"
import {hash, compare} from 'bcrypt'


class Cart{
    retrieveCart(req, res){
        const Qry = `
        SELECT * FROM brqcfllnm5g5ug2wsedr.CART;
        
        `
        db.query(Qry,(error, results)=>{
            if(error)throw error
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    // retrieveUser(req, res){
    //     const Qry =` SELECT USER_ID,USER_NAME,USER_LASTNAME,USER_AGE,USER_GENDER,USER_ROLE,USER_EMAIL,USER_PASSWORD,USER_PROFILE
    //     FROM USERS
    //     WHERE USER_ID = ${req.params.id};
    //     `
    //     db.query(Qry,(error, result)=>{
    //         if(error)throw error
    //         res.json({
    //             status: res.statusCode,
    //             result
    //         })
    //     })
    // }
    // async addUser(req, res){
    //     //Payload
    //     let data =req.body
    //     data.userPwd = await hash(data?.userPwd,10)
    //     let user ={
    //         emailAdd:data.emailAdd,
    //         userPwd:data.usrPwd
    //     }
    //     const Qry = `INSERT INTO USERS
    //     SET ?;
    //     `
    //     db.query(Qry, [data],(error)=>{
    //         if(error){
    //         res.json({
    //             status: res.statusCode,
    //             msg:`Try another email please`
    //         })
    //         console.log(err);
    //     }else {
    //         //create token
    //         let token =createToken(user)
    //         res.json({
    //             status: res.statusCode,
    //             token,
    //             msg:'You are registered'
    //         })
    //     }
    //     })
    // }
    deleteCart(req,res){
        const Qry=`DELETE FROM CART WHERE CART_ID=${req.params.id} ;`
        // const user = req.body
        db.query(Qry, (error)=>{
          if(error) throw error
          res.json({
            status: res.statusCode,
            msg:'Cart deleted'
          })
        })
      }
      async patchCart(req,res){
        let data = req.body;
        if(data?.userPwd){
          data.userPwd = await hash(data?.userPwd, 8);
        }
        const Qry=`
        UPDATE CART
        SET ?
        WHERE CART_ID = ${req.params.id};`
        db.query(Qry, [data], (error)=>{
          if(error) throw error
          res.json({
            status: res.statusCode,
            msg:'item updated'
          })
        })
      }


}

export{
    Cart
}