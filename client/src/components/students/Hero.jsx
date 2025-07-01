import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-orange-50 to-white py-10'>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 max-w-2xl mx-auto">
  Your journey, your path, your knowledge <span className="text-orange-500">-GyaanSetu.</span>
</h1>


      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto '>GyaanSetu brings together expert instructors, engaging content, and a vibrant learning community—all designed to support your personal growth and professional success. Whether you're upskilling for a career move or exploring a new passion, we are here to guide your learning journey.</p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring together expert instructors, engaging content to support your personal growth and professional success. </p>
    </div>
  )
}

export default Hero
