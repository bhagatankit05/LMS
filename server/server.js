import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

//Initialize Express
const app = express();

//Connect to DataBase.
await connectDB()

app.use(express.json()); // Global JSON parsing

//middleware
app.use(cors());

//Routes
app.get('/',(req,res)=> res.send("API is Working"))

app.post('/clerk', clerkWebhooks)

//port
const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{console.log(`Server is Running on Port ${PORT}`)})