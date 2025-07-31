import React, { useContext } from 'react'
import { assets } from '../../assets/asset'
import { Link, useLocation } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Navbar = () => {
  // This is the Navbar component for the student side of the application.

  const {navigate , isEducator , backendUrl ,setIsEducator, getToken} = useContext(AppContext); 
  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async ()=>{
    try {
      if (isEducator) {
        navigate('/educator')
        return
        
      }
      const token = await getToken();
      const {data} = await axios.get(backendUrl + '/api/educator/update-role' , {headers: {Authorization: `Bearer ${token}`}})

      if (data.success) {
        setIsEducator(true)
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-200 py-4 ${isCourseListPage ? 'bg-white' : 'bg-orange-50'}`}>
      <img onClick={()=>navigate('/')} src={assets.gyaansetu_logo} alt="LOGO" className='w-28 lg:w-32 cursor-pointer rounded' />

      <div className='hidden md:flex items-center gap-5 text-gray-500 '>
        {/* For desktop screen*/}
        <div className='flex items-center gap-5'>
          {user && <>

            <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
            | <Link to="/my-enrollments">My Enrollments</Link>
          </>
          }
        </div>
        {user ? <UserButton /> :

          <button onClick={() => { openSignIn() }} className='bg-orange-400 text-white px-5 py-2 rounded-full'>Create Account</button>}
      </div>

      {/* For mobile screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-2 sm:gap-5 max-sm:text-xs'>
          {user && <>

            <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
            | <Link to="/my-enrollments">My Enrollments</Link>
          </>
          }
        </div>
        {
          user ? <UserButton /> :
            <button onClick={()=>openSignIn()}><img src={assets.user} alt="" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 " /></button>

        }
      </div>
    </div>

  )
}

export default Navbar
