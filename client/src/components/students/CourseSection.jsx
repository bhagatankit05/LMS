import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CourseSection = () => {

  const {allCourses} = useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8'>
        <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
        <p className='text-sm md:text-base text-gray-500 mt-3'>Browse our top-performing courses across diverse fields. From programming and design to business and wellness, each course is thoughtfully developed to ensure impactful learning.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-14 md:grid-cols-3 lg:mt-16 lg:grid-cols-4" >
          {allCourses.slice(0,4).map((course , index)=><CourseCard key={index} course={course}/>)}
        </div>

        <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses </Link>
    </div>
  )
}

export default CourseSection
