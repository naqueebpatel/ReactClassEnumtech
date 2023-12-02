import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    const [user,setUser]=useState([])

    const {id}=useParams()
    console.log(id)

    useEffect(()=>{
        fetchUser(id)
    },[])

    const fetchUser=async(id)=>{
        try {
            const response=await fetch(`https://reqres.in/api/users/${id}`)
            const data=await response.json()
            console.log(data)
            setUser([data])
        } catch (error) {
            console.log(error)
        }
    }
    console.log(user)

  return (
    <div style={{display:'flex',justifyContent:"space-around"}}>
    {
        user?.map((user)=>(
            <div key={user?.data?.id} style={{border:'2px solid black'}}>
                <img src={user?.data?.avatar} alt={user?.data?.first_name}/>
                <p>ID::{user?.data?.id}</p>
                <p>NAME:{user?.data?.first_name} {user?.data?.last_name}</p>
                <p>EMAIL:{user?.data?.email}</p>
                <h1>SUPPORT</h1>
                <p>{user?.support?.text}</p>
                <p>{user?.support?.url}</p>
                </div>
        ))
    }
    </div>
  )
}

export default UserDetails