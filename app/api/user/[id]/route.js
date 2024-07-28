import { User } from "@/models/userModels"
import { connectionToDatabase } from "@/utils/dbconnection"
import { NextResponse } from "next/server"




export const PUT=async(req,{params})=>{
    const {id}=params;
    const {name,email,password}=await req.json()
    console.log(id)

    try{
        await connectionToDatabase();
        const isUser=await User.findById(id)
        if(!isUser){
            return new NextResponse({message:'user not found'})
        }

        const editUser=await User.findByIdAndUpdate(id,{
            name,
            password,
            email
        })
        if(editUser){
            return new NextResponse(JSON.stringify({message:'succesfuly edited'}))
        }


    }catch(err){
        return new NextResponse(err.message,{
            status:500
        })
    }

}

export const DELETE=async(req,{params})=>{
    const {id}=params;
   

    try{
        await connectionToDatabase();
        const isUser=await User.findById(id)
        if(!isUser){
            return new NextResponse(JSON.stringify({message:'user not found'}))
        }

        const deleteUser=await User.findByIdAndDelete(id)

        if(deleteUser){
            return new NextResponse(JSON.stringify({message:'deleted',status:true}))
        }


    }catch(err){
        return new NextResponse(err.message,{
            status:500
        })
    }

}
export const GET=async(req,{params})=>{
    const {id}=params;
   

    try{
        await connectionToDatabase();
        const isUser=await User.findById(id)
        if(!isUser){
            return new NextResponse(JSON.stringify({message:'user not found'}))
        }

       

        
            return new NextResponse(JSON.stringify({isUser,status:true}))
        


    }catch(err){
        return new NextResponse(err.message,{
            status:500
        })
    }

}