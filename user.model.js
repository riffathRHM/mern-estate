import mongoose from "mongoose";
// create an array
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        // mongoDB check username is unique or already exists
    },
    email:{
        type:String,
        required:true,
        unique:true,
        // mongoDB check email is unique or already exists
    },
    password:{
        type:String,
        required:true,
       // two user can have same password
    },
    // add timestamp is true-mongoDB to report two extra informations,1.time of creation of the user , Time of UPDATE of the user
},{timestamps:true});

// after this create the MODEL
 const User = mongoose.model('User',userSchema);
 export default User;
 