import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const [data,setData]=useState([])

  
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        try {
            const response=await fetch('https://reqres.in/api/users?page=1')
            const data=await response.json()
            console.log(data.data)
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div style={{display:'flex',justifyContent:"space-around"}}>
    {
        data.map((user)=>(
            <div key={user.id} style={{border:'2px solid black'}}>
                <img src={user.avatar} alt={user.first_name}/>
                <p>NAME:::{user.first_name}</p>
                <button><Link to={`/userDetails/${user.id}`}>MORE DETAILS</Link></button>
                </div>
        ))
    }
    </div>
  )
}

export default User