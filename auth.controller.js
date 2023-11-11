import User from "../models/user.model.js";
//encrypt the password from bcryptjs package
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";





// asynchrones for await because of the internet speed
export const signup = async(req,res,next)=>{
  // database conectivity
  const{username,email,password} = req.body;
  //password encrypt
  const hashedPassword = bcryptjs.hashSync(password,10);
  const  newUser = new User({username,email,password:hashedPassword});
  // save inside the database
  // when use same name and email it will get an error in saver now error show in fromtend
  try{
    await newUser.save();
    res.status(201).json("user created sucessfully");
  }
  catch(error){
    next(error);
  }
  
};