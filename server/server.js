import express, { json } from "express";

const port = 8081
const app = express()
app.use(json())

app.get("/",(req,res)=>{
    res.status(200).json({
        message : "hello world"
    })
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})