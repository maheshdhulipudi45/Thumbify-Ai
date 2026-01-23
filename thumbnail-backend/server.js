// const express=require('express')
// const  app=express()
// const ConnectDB=require('./configs/db')

// require('dotenv').config()

// app.use(express.json())
// ConnectDB()


// app.get('/',(req,res)=>{
//     res.send("Server runing on online")
// })

// const port= process.env.PORT|| 5000
// app.listen(port,()=>{
//     console.log(`server runing on ${port}`)
// })



import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from './routes/userRoutes.js';
import contactRoutes from "./routes/contactRoutes.js"

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user",userRoutes);
console.log("🔥 Contact route registered");
app.use("/api/contact", contactRoutes);


app.get("/", (req, res) => {
  res.send("API running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
