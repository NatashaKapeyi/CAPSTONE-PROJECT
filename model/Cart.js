import {connection as db} from "../config/index.js"
import {hash, compare} from 'bcrypt'


class Cart{
    retrieveCart(req, res){
      const USER_ID = req.params.USER_ID;
        const Qry = `
        SELECT c.PRODUCT_ID, p.PRODUCT_NAME, c.CART_QUANTITY
        FROM CART c
        INNER JOIN products p ON c.PRODUCT_ID = p.PRODUCT_ID
        WHERE c.USER_ID = ?;
      `
        db.query(Qry,[USER_ID],(error, results)=>{
            if(error)throw error
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    async addCart(req, res){
       const { USER_ID, PRODUCT_ID, CART_QUANTITY } = req.body;
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