import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js';
import courseRouter from './routes/courseRoute.js';
import userRouter from './routes/userRoutes.js';

//Initialize Express
const app = express();

//Connect to DataBase.
await connectDB()
await connectCloudinary()

app.use(express.json()); // Global JSON parsing

//middleware
app.use(cors());
app.use(clerkMiddleware())


//Routes
app.get('/',(req,res)=> res.send("API is Working"))

app.post('/clerk', clerkWebhooks)

app.use('/api/educator',educatorRouter);
app.use('api/course',courseRouter);
app.use('api/user',userRouter)

//port
const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{console.log(`Server is Running on Port ${PORT}`)})