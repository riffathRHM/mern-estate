import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import autheRouter from './routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then (()=>{
  console.log('connected to MongoDB');
}).catch((err)=>{
   console.log(err);
})
// we have to encrypt that link so in .env file
const app = express();

//allow to use JSON as a input from the saver
app.use(express.json());

app.listen(3000,()=>{
   console.log('server is running on port 3000');
});

// create a API Route
//send object using json
//we export router from user.route.js and we imoprt name as userRouter
app.use("/api/user",userRouter);
app.use("/api/auth",autheRouter);