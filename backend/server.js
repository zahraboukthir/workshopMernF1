const express=require('express')
const app=express()
require('dotenv').config({path:"./config/.env"})
app.use(express.json())
const port=process.env.PORT||5000
const cors=require('cors')

const connectdb=require('./config/connectdb')
connectdb()





app.use("/uploads",express.static(__dirname+"/uploads"))
app.use(cors())
app.use("/auth",require("./Routes/authRoute"))
app.use("/product",require("./Routes/productRoutes"))
app.use("/user",require("./Routes/userRoutes"))
app.listen(port,err=>err?console.log(err):console.log(`server is running on port ${port}`))
