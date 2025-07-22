import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/educators/Navbar'

const Educator = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/> 
      <div>
            {<Outlet />  }    {/* This is where the nested routes will be rendered */}
      </div>
    </div>
  )
}

export default Educator
