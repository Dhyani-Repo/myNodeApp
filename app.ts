import express, {Request, Response,Express} from 'express'
import * as dotenv from 'dotenv';
import rout from './src/router/main.router';

dotenv.config()
const port = process.env.PORT || 3000
const app:Express = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1", rout)
app.listen(port,() => {
    console.log("Server is running on port: ",port)
})
