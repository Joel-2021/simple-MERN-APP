import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from './routes/users.js'
import cors from 'cors'
const PORT=8000
const app=express();


mongoose.connect('mongodb://localhost/users')
const db=mongoose.connection

db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log("connected to database"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());


app.use('/users',userRouter)


app.listen(PORT,()=>{
    console.log("Server is running on "+ PORT)
})