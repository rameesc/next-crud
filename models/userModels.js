import mongoose from "mongoose";

const schemaUser=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:[true,'email already exists']
        
    },
    password:{
        type:String,
        required:true
    }
})
export const User=mongoose.models.User||mongoose.model('User',schemaUser)
