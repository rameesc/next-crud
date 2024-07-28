"use client"
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const UserId = () => {
    const {userId}=useParams()
     const [data,setData]=useState({
        name:'',
        email:''
     })
     const [newUser,setnewUser]=useState({
        newName:'',
        newEmail:'',
        newPassword:''
     })
     const {newEmail,newName,newPassword}=newUser
     
     const router=useRouter()
     const {name,email}=data

    const fetchUser=async()=>{
        try{
            const {data}=await axios.get(`/api/user/${userId}`)

            if(data.status){
              const {name,email}=data.isUser
              setData({name:name,email:email})
            }


        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchUser()

    },[])


    //inputHandler(e)

    const inputHandler=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value})

    }
//editeHadnler()
const editeHadnler=async()=>{

    try{
        const {data}=await axios.put(`/api/user/${userId}`,{
            name:name,
            email:email
        });
        router.push('/')

        

    }catch(err){
        console.log(err)
    }

}

//createHadnler
const createHadnler=async()=>{
    try{
        const {data}=await axios.post(`/api/user`,{
            name:newName,
            email:newEmail,
            password:newPassword
        })
        console.log(data)

    }catch(err){
        console.log(err)
    }

}

//newinputHandler
const newinputHandler=(e)=>{
    const {name,value}=e.target;
    console.log(name,value)

    setnewUser({...newUser,[name]:value});
}

  return (
    <div className='user_container'>
        <div className='cart_body'>
            <div className='name'>
                <label htmlFor="">Name</label>
                <input type="text" value={name||''} name='name'  onChange={(e)=>inputHandler(e)}/>
            </div>
            <div className='email'>
                <label htmlFor="">Email</label>
                <input type="text" value={email||''} name='email'  onChange={(e)=>inputHandler(e)} />
            </div>
            <div className='btn'>
                <button onClick={()=>editeHadnler()}>Sumbit</button>
            </div>

        </div>
        <div className='create_user'>
        <div className='name'>
            <h1>Create New User</h1>
                <label htmlFor="">Name</label>
                <input type="text" value={newName} name='newName'  onChange={(e)=>newinputHandler(e)}/>
            </div>
            <div className='email'>
                <label htmlFor="">Email</label>
                <input type="text" value={newEmail} name='newEmail'  onChange={(e)=>newinputHandler(e)} />
            </div>
            <div className='password'>
                <label htmlFor="">Password</label>
                <input type="text" value={newPassword} name='newPassword'  onChange={(e)=>newinputHandler(e)} />
            </div>
            <div className='btn'>
                <button onClick={()=>createHadnler()}>New User</button>
            </div>


        </div>
        
    </div>
  )
}

export default UserId