
import mongoose from "mongoose"

export const connectionToDatabase=async()=>{
    try{
        const connect=await mongoose.connect(process.env.DB_CONNECTION);
        if(connect){
            return console.log('mongodb connected')
        }

    }catch(err){
        console.log(err)

    }
}