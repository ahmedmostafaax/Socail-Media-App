import React from 'react'
import Footer from '../Components/Footer.jsx'
import Navbar from '../Components/Navbar.jsx'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
  return <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen pt-4">

      <Outlet />

    </div>

    <Footer />

  </>
}
