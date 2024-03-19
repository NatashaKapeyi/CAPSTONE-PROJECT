import {connection as db} from "../config/index.js"
import {hash, compare} from 'bcrypt'


class Cart{
    retrieveCart(req, res){
        const Qry = `
        SELECT 
    USERS.USER_ID,
    USERS.USER_NAME,
    PRODUCTS.PRODUCT_ID,
    PRODUCTS.PRODUCT_NAME,
    PRODUCTS.PRODUCT_PRICE
    FROM 
    USERS
  INNER JOIN 
   CART ON USERS.USER_ID = CART.USER_ID
   INNER JOIN 
   PRODUCTS ON CART.PRODUCT_ID =PRODUCTS.PRODUCT_ID;
        
        `
        db.query(Qry,(error, results)=>{
            if(error)throw error
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    async addCart(req, res){
        let data =req.body;
        const Qry = `INSERT INTO CART
        SET ?;
        `
        db.query(Qry, [data],(error)=>{
            if(error){
            res.json({
                status: res.statusCode,
                msg:`Try again `
            })
          }
        })
    }
    deleteCart(req,res){
        const Qry=`DELETE FROM CART WHERE USER_ID=${req.params.id} ;`
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