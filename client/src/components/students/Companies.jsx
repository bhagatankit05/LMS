import React from 'react'
import { assets } from '../../assets/asset'

const Companies = () => {
  return (
    <div className='pt-16'>
        <p className='text-base text-gray-500'>Empowering learners from</p>
        <div className='flex flex-wrap items-center justify-center gap-6 mg:gap-16 md:mt-10 mt-5'>
          <img src={assets.devsync} alt="" className='w-20 md:w-28'/>
          <img src={assets.Capgemini_Logo} alt="" className='bg-white w-20 md:w-28'/>
          <img src={assets.infosys} alt="" className='w-20 md:w-28'/>
          <img src={assets.tcs_icon} alt="" className='w-20 md:w-28'/>
          



        </div>
    </div>
  )
}

export default Companies
