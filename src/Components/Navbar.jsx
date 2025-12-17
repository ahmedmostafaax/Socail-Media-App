import React, { useContext } from 'react'
import {Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../Context/AuthContext.jsx';
// import {useState} from 'react-router-dom'


 export default function Navbar() {

 
  let {isLoggedIn, setIsLoggedIn , userData, setUserData} =  useContext(AuthContext)

  // const [isLoggedIn , setIsLoggedIn] = useState(localStorage.getItem('token') != null)
  const Navigate = useNavigate()

  function logOut (){
    setIsLoggedIn(null)
    userData = (null)
    localStorage.removeItem('token')
    Navigate('/login')
  }


 
  return (
    <HeroNavbar shouldHideOnScroll>
      <NavbarBrand>
        <NavLink to={'/'} className="font-bold text-inherit text-red-800">GODZ</NavLink>
      </NavbarBrand>
      
      <NavbarContent justify="end">

        {isLoggedIn?  <NavbarItem onClick={logOut} className='font-bold text-red-800 cursor-pointer' >Log Out</NavbarItem>
         : <>
         <NavbarItem >
           <NavLink className='font-bold text-red-800' to={'/Login'}> Sign In </NavLink>
           </NavbarItem>
           <NavbarItem>
           <NavLink className='font-bold text-red-800' to={'/register'}> Sign Up </NavLink>
           </NavbarItem>
         </>
       }


         
       

      </NavbarContent>
    </HeroNavbar>
  )
}
