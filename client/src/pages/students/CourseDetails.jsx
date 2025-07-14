import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/students/Loading';
import { assets } from '../../assets/asset';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const { allCourses,calculateRating,calculateNoOfLectures,calculateCourseDuration,calculateChapterTime} = useContext(AppContext);

  const fetchCourseData = () => {
    const findCourse = allCourses.find(course => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="relative w-full min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="flex flex-col md:flex-row gap-10 items-start justify-between md:px-36 px-6 pt-28 pb-20">
          
          {/* Left column (content) */}
          <div className="max-w-3xl z-10 text-gray-600">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {courseData.courseTitle}
            </h1>
            <div
              className="pt-4 md:text-base text-sm"
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription.slice(0, 500) + '...',
              }}
            ></div>
            {/* review and ratings*/}
            <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'> 
                      <p>{calculateRating(courseData)}</p>
                      <div className='flex'>
                        {[...Array(5)].map((_, i) => (
                          
                          <img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star_icon : assets.star_blank} alt="rating star" className='w-3.5 h-3.5'/>
                        ))}
                      </div>
                      <p className='text-blue-600'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings':'rating'})</p>
                      <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students':'student'}</p>
                    </div>
                    <p className='text-sm'> Course by <span className='text-blue-600'>Ankit Bhagat</span></p>

                    <div className='pt-8 text-gray-800'> 
                      <h2 className='text-xl font-semibold'>Course Structure</h2>

                      <div className='pt-5'>
                          {courseData.courseContent.map((chapter,index)=>(
                            <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                                <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'>
                                  <div className='flex items-center gap-2'>
                                    <img src={assets.down_arrow_head} alt="" className='w-5 h-5'/>
                                    <p className='font-medium md:text-base text-sm '>{chapter.chapterTitle}</p>
                                  </div>
                                  <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                                </div>
                            </div>
                          ))}
                      </div>


                    </div>
          </div>

          {/* Right column (optional - you can place image/video/etc.) */}
          <div className="w-full md:w-1/3">
            {/* Placeholder for course image or media */}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
