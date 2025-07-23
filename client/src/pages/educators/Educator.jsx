import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/educators/Navbar'
import Sidebar from '../../components/educators/Sidebar'

const Educator = () => {
  return (
    <div className='text-default min-h-screen bg-white '>
      <Navbar/> 
      <div className='flex'>
        <Sidebar/>
          <div className='flex-1'>
            {<Outlet />  }    {/* This is where the nested routes will be rendered */}
            </div>
      </div>
    </div>
  )
}

export default Educator
