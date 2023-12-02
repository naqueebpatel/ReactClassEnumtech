import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import User from './User'
import UserDetails from './UserDetails'
import NotFound from './NotFound'


const AllRoutes = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path='/userDetails/:id' element={<UserDetails/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes