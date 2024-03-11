import {userRouter, express} from "./controller/UserController.js"
import {Router} from "./controller/ProductController.js"
import { CartRouter } from "./controller/CartContoller.js"
import cookieParser from "cookie-parser"
import {errHandling} from "./middleware/error.js"
import path from 'path'
import cors from 'cors'
import {config} from "dotenv"
import { CartRouter } from "./controller/CartContoller.js"
config()

const app= express()
const port = +process.env.PORT || 4000
//Middleware
app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Credentials", "true");
    res.header("Acess-Control-Allow-Methods", "*");
    res.header("Acess-Control-Request-Methods","*");
    res.header("Acess-Control-Allow-Headers", "*"); // save our cookies in the header 
    res.header("Acess-Control-Expose-Headers", "Authorization");
    next();
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended:true,
   }),
   cookieParser(),
   cors()
)
app.get('^/$|/capstone-project',(req, res)=>{
    res.status(200).sendFile(path.join(__dirname,"./static/index.html"))
})
app.use('/users',userRouter)
app.use('/products',Router)
app.use('/cart',CartRouter)
app.use(errHandling)
app.listen(port, ()=>{         //listen
    console.log(`Server is running on port ${port}`);
})