"use client"
import React, { Suspense, useEffect, useState } from 'react'

import './table.scss'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Table = () => {
    const [data,setData]=useState([])
    const router = useRouter()
    const fetchUser=async()=>{
        try{
            const {data}=await axios.get('/api/user')
          setData(data?.user)

        }catch(err){
            console.log(err)
        }

    }

    useEffect(()=>{
        fetchUser()
        

       

    },[])

    //deleteItem(item._id)
    const deleteItem=async(id)=>{
        try{
            const {data}=await axios.delete(`/api/user/${id}`)
            if(data.status){
                fetchUser()

            }

        }catch(err){
            console.log(err)
        }

    }

    //editeItem(item._id)
    const editeItem=(id)=>{
        router.push(`/edite/${id}`)

    }
  return (
    <div className='containet'>
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>name</td>
                    <td>email</td>
                    <td>Delete</td>
                    <td>Edite</td>
                </tr>
            </thead>
            <tbody>
                {data?.map((item,index)=>{
                    return(
                        
                         <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={()=>deleteItem(item._id)} id='delete'>Delete</button></td>
                            <td><button  onClick={()=>editeItem(item._id)} id='edite'>Edite</button></td>
                         </tr>
                       
                    )
                })}
              
            </tbody>
        </table>
    </div>
  )
}

export default Table