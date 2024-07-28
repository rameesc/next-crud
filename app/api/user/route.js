import { connectionToDatabase } from "@/utils/dbconnection"
import { User } from "@/models/userModels"
import { NextResponse } from "next/server";

export async function GET(req){

    try{
    await connectionToDatabase()

    const getUser=await User.find({});
    if(getUser){
        return new NextResponse(JSON.stringify({message:'user is created',user:getUser}),{status:200})


    }

    }catch(err){
        return Response.json(err.message)


    }


}
export async function POST(req){
    const {name,email,password}=await req.json()
    
    try{
   await connectionToDatabase()

    const createUser=await User.create({
        name,
        email,
        password
        
    })
    if(createUser){
        return new NextResponse(JSON.stringify({message:'user is created',user:getUser}),{status:200})
       


    }

    }catch(err){
        return new NextResponse(err.message)


    }


}