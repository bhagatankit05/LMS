import React from 'react'
import { assets } from '../../assets/asset'

const CallToActions = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className="text-gray-500 sm:text-sm">
        Interactive courses, real-world projects, and instant feedback—everything you need to master new skills at your own pace.
      </p>

      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-orange-500'>Get Started</button>
        <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="arrow_icon" className='w-4 h-4 md:w-5 md:h-5 object-contain' /></button>
      </div>
    </div>
  )
}

export default CallToActions
