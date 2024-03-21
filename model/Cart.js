import {connection as db} from "../config/index.js"
import {hash, compare} from 'bcrypt'


class Cart{
    retrieveCart(req, res){
        const Qry = `
        SELECT 
        p.PRODUCT_ID,
        p.PRODUCT_NAME,
        p.PRODUCT_CATEGORY,
        p.PRODUCT_PRICE,
        p.PRODUCT_QUANTITY AS PRODUCT_AVAILABLE_QUANTITY,
    c.CART_QUANTITY AS QUANTITY_IN_CART,
        u.USER_ID,
        u.USER_NAME,
        u.USER_EMAIL
    FROM 
        CART c
    INNER JOIN 
        PRODUCTS p ON c.PRODUCT_ID = p.PRODUCT_ID
    INNER JOIN 
        USERS u ON c.USER_ID = u.USER_ID
    ;
        
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
        const { PRODUCT_ID, CART_QUANTITY, USER_ID } = data;
        const Qry = `INSERT INTO CART (PRODUCT_ID, CART_QUANTITY, USER_ID) VALUES (?, ?, ?);`
        db.query(Qry,[PRODUCT_ID, CART_QUANTITY, USER_ID],(error)=>{
            if(error){
            res.json({
                status: res.statusCode,
                msg:error.message
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