import React from 'react'
import { Outlet } from 'react-router-dom'

const Educator = () => {
  return (
    <div>
      <h1>Educator page</h1>
      <div>
            {<Outlet />  }    {/* This is where the nested routes will be rendered */}
      </div>
    </div>
  )
}

export default Educator
