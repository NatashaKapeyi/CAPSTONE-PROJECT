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
        USER_EMAIL: user.USER_EMAIL,
        USER_PASSWORD: user.USER_PASSWORD
},
process.env.SECRET_KEY,
{
    expiresIn: '2h'
}
)
}
//verifying token
// function verifyToken (req, res, next){
//     //Retrieve token from the browser
//     const token = req?.headers['authorization']
//     if(token) {
//         if(verify(token, process.env.SECRET_KEY)){
//             next()
//         }else {
//             res?.json({
//                 status: res.statusCode,
//                 msg: "Please provide the correct credentials"
//             })
//         }
//     }else {
//         res?.json({
//             status: res.statusCode,
//             msg:"Please login"
//         })
//     }
// }
// export{
//     createToken,
//     verifyToken
// }
function verifyToken(req, res, next) {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    if (token) {
        // If token exists, verify it using the SECRET_KEY
        if (verify(token, process.env.SECRET_KEY)) {
            // If token is valid, proceed to the next middleware function
            next();
        } else {
            // If token is invalid, send an error response
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials"
            });
        }
    } else {
        // If no token is found in local storage, send an error response
        res?.json({
            status: res.statusCode,
            msg: "Please login"
        });
    }
}
export{
    createToken,
    verifyToken
}