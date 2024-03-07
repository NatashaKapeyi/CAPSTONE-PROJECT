import {Router,express} from "./controller/ProductController.js"
import cookieParser from "cookie-parser"
import {errHandling} from "./middleware/error.js"
import path from 'path'
import cors from 'cors'
import {config} from "dotenv"
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
app.get('^/$|/lifechoices',(req, res)=>{
    res.status(200).sendFile(path.join(__dirname,"./static/index.html"))
})
app.use('/products',Router)
app.use(errHandling)
app.listen(port, ()=>{       
    console.log(`Server is running on port ${port}`);
})