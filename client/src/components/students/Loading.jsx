import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Loading = () => {
  const {path} = useParams()
  const navigate = useNavigate();

  useEffect(()=>{
    if (path) {
      const timer = setTimeout(()=>{
        navigate(`/${path}`)
      },5000)
      return ()=> clearTimeout(timer);
    }
  },[])


  return (
    <div className='min-h-screen flex items-center justify-center'>
     <div className='w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-orange-500 rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading
