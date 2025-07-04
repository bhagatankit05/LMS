import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from '../../components/students/Companies'
import CourseSection from '../../components/students/CourseSection'
import TestiMonialSection from '../../components/students/TestiMonialSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies/>
      <CourseSection/>
      <TestiMonialSection/>
    </div>
  )
}

export default Home
