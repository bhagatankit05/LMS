import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js';

//Initialize Express
const app = express();

//Connect to DataBase.
await connectDB()

//middleware
app.use(cors());

//Routes
app.get('/',(req,res)=> res.send("API is Working"))

//port
const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{console.log(`Server is Running on Port ${PORT}`)})