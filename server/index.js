const express=require('express')
const app=express()
const port=5000;
const mongoDB=require('./db')

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
//     res.header("Access-Control-Allow-Headers","Origin,x-Requested-with,Content-Type,Accept")
//     next()
// })
mongoDB()
app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.use(express.json())
app.use(cors())
app.use("/api",require("./Routes/CreateUser"))
app.use("/api",require("./Routes/DisplayData"))
app.use("/api",require("./Routes/OrderData"))


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})