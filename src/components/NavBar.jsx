import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavData=[
    {
    path:'/',
    label:'Home'
    },
    {
        path:'/about',
        label:'About'
    },
    {
        path:'/contact',
        label:'Contact'
    },
    {
        path:'/user',
        label:'User'
    },
    {
        path:'/footer',
        label:'Footer'
    },
]

const defaultStyle={
    textDecoration:'none',
    color:'black'
}

const activeStyle={
    textDecoration:'none',
    color:'yellow'
}

const NavBar = () => {
  return (
    <div style={{display:'flex',
                 justifyContent:'space-around',
                 padding:'15px',
                 background:'pink'
    }}>
      {
        NavData.map((link)=>(
            <NavLink to={link.path}
            style={({isActive})=>{return isActive?activeStyle:defaultStyle}}
            >{link.label}</NavLink>
        ))
      }
    </div>
  )
}

export default NavBar