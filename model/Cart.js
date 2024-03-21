import {connection as db} from "../config/index.js"
import {hash, compare} from 'bcrypt'


class Cart{
    retrieveCart(req, res){
      const USER_ID = req.params.id;
        const Qry = `
        SELECT P.PRODUCT_ID, P.PRODUCT_NAME, P.PRODUCT_CATEGORY, P.PRODUCT_PRICE, P.PRODUCT_QUANTITY, P.PRODUCT_WEIGHT, P.PRODUCT_IMAGE, C.CART_QUANTITY
        FROM CART C
                    INNER JOIN PRODUCTS P ON C.PRODUCT_ID = P.PRODUCT_ID
        WHERE C.USER_ID =${USER_ID};
      `
      db.query(Qry, (error, results) => {
        if (error) throw error;
        res.json({
            status: res.statusCode,
            results
            })
        })
    }
    async addCart(req, res){
      const { USER_ID } = req.params; // Extract USER_ID from req.params
      const { PRODUCT_ID, CART_QUANTITY } = req.body; // Extract PRODUCT_ID and CART_QUANTITY from req.body
  
        const Qry = 'INSERT INTO CART (USER_ID, PRODUCT_ID, CART_QUANTITY) VALUES (?, ?, ?)';
        db.query(Qry, [USER_ID, PRODUCT_ID, CART_QUANTITY],(error)=>{
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