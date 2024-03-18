//Executing the connection
import {connection as db} from "../config/index.js"

class Products{
    retrieveProducts(req, res){
        const Qry = `SELECT PRODUCT_ID,PRODUCT_NAME,PRODUCT_CATEGORY,PRODUCT_PRICE,PRODUCT_QUANTITY,PRODUCT_WEIGHT,PRODUCT_IMAGE
        FROM PRODUCTS;
         `
         db.query(Qry,(error, results)=>{
            if(error)throw error
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    retrieveProduct(req, res){
        const Qry = `SELECT * FROM brqcfllnm5g5ug2wsedr.PRODUCTS
        WHERE PRODUCT_ID =${req.params.id};
         `
         db.query(Qry,(error, result)=>{
            if(error)throw error
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        })
    }
    //CRUD SYSTEM
    addProduct(req,res){
        const Qry =`INSERT INTO PRODUCTS
        SET ?;
        `
        db.query(Qry,[req.body],(error, )=>{
            if(error)throw error
            res.json({
                status: res.statusCode,
                msg: 'Successfully added a product'
            })
        })
    }
    patchProduct(req,res){
        const Qry =`UPDATE PRODUCTS SET? WHERE PRODUCT_ID =${req.params.id};
        `
        db.query(Qry,[req.body],(error, )=>{
            if(error)throw error
            res.json({
                status: res.statusCode,
                msg: 'Successfully edited a product'
            })
        })
    }
    deleteProduct(req,res){
        const Qry=`DELETE FROM PRODUCTS WHERE PRODUCT_ID=${req.params.id};`
        db.query(Qry,[req.body],(error)=>{
          if(error) throw error
          res.json({
            status: res.statusCode,
            msg:'Successfully deleted a product item'
          })
        })
      }

}

export{
    Products 
}