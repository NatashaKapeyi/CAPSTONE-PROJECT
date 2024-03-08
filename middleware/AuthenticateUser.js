//login
// import .env from config folder
import { config } from "dotenv";
config()
// new way for config 
// import "dotenv/config"
// import sign, verify from jwt in order to verify the user by creating a token
import jwt from  'jsonwebtoken';
const {sign,verify} = jwt

//to pass an object we use createuser
function createToken(user){
    return  sign({
        emailAdd: user.emailAdd,
        userPwd: user.userPwd
},
process.env.SECRET_KEY,
{
    expiresIn: '1h'
}
)
}
//verify token
function verifyAToken (req, res, next){
    //Retrieve token from the browser
    const token = request.headers['Authorization']
    if(token) {
        if(verify(token, process.env.SECRET_KEY)){
            next()
        }else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials"
            })
        }
    }else {
        res?.json({
            status: res.statusCode,
            msg:"Please login"
        })
    }
}
export{
    createToken,
    verifyAToken
}