import express, { json } from "express";
import db from "./src/config/db.js";

const port = 8081
const app = express()
app.use(json())

app.get("/",async(req,res)=>{
    const resData = await db.query("SELECT 1+1 AS solution");
    console.log("db test",resData)
    res.status(200).json({
        message : "hello world"
    })
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})