import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/asset.js';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';
import Footer from '../../components/students/Footer.jsx';
import Rating from '../../components/students/Rating.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../components/students/Loading.jsx';

const CoursePlayer = () => {
  const {enrolledCourses ,calculateChapterTime ,backendUrl , getToken , userData , fetchUserEnrolledCourses} = useContext(AppContext);
  const {courseID} = useParams(); // Fixed: parameter name should match the route
  const [courseData,setCourseData] = useState(null);
  const [openSections,setOpenSections] = useState({});
  const [playerData,setPlayerData] = useState(null);
  const [progressData , setProgressData] = useState(null);
  const [initialRating ,setInitialRating] = useState(0);






  const getCourseData = () => {
    enrolledCourses.map((course) =>{
      if(course._id === courseID){
        setCourseData(course)
        course.courseRatings.map((item)=>{
          if (item.userId === userData._id) {
            setInitialRating(item.rating)
          }
          
        })
      }
    })
  };


  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(()=>{
    if (enrolledCourses.length > 0) {
      getCourseData();
    }
  },[enrolledCourses]);

  const markLectureAsCompleted = async (lectureId)=>{
    try {
      const token  = await getToken()
      const {data} = await axios.post(backendUrl + '/api/user/update-course-progress' , {courseID , lectureId}, {headers:{Authorization:`Bearer ${token}`}})

      if (data.success) {
        toast.success(data.message)
        getCourseProgress();
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getCourseProgress = async ()=>{
    try {
      const token = await getToken()
      const {data} = await axios.post(backendUrl + '/api/user/get-course-progress' ,{courseID} , {headers:{Authorization: `Bearer ${token}`}})

      if (data.success) {
        setProgressData(data.progressData)
        
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
      
    }
  }

  const handleRate = async (rating) =>{
    try {
      const token = await getToken()
      const {data} = await axios.post(backendUrl + '/api/user/add-rating' , {courseID , rating }, {headers :{Authorization: `Bearer ${token}`}})

      if(data.success){
        toast.success(data.message)
        fetchUserEnrolledCourses();
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
        toast.error(error.message)
    }
  }

  useEffect(()=>{
    getCourseProgress();

  },[])


  return courseData ? (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36 min-h-screen'>
        {/*Left column */}
        <div className='text-gray-800'>
          <h2 className='text-xl font-semibold mb-4'>
            {courseData ? courseData.courseTitle : 'Loading...'}
          </h2>
          <h3 className='text-lg font-medium mb-4'>Course Structure</h3>

          <div className='pt-5'>
            {courseData && courseData.courseContent ? courseData.courseContent.map((chapter, index) => (
              <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={() => toggleSection(index)}>
                  <div className='flex items-center gap-2'>
                    <img src={assets.down_arrow_head} alt="" className={`w-5 h-5 transition-transform ${openSections[index] ? 'rotate-180' : ''}`} />
                    <p className='font-medium md:text-base text-sm '>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? 'max-h-96' : ' max-h-0'} `}>
                  <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className='flex items-start gap-2 py-1'>
                        <img src={progressData && progressData.lectureCompleted.includes(lecture.lectureId)  ? assets.blue_tick_icon : assets.play_icon} alt="play-icon" className='w-4 h-4 mt-1' />
                        <div className='flex items-center justify-between w-full text-gray-800 text-sm md:text-default'>
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-2 '>
                            {lecture.lectureUrl && (
                              <p onClick={() => setPlayerData({ 
                                ...lecture,chapter:index + 1 , lecture:i+1
                               })} className='text-blue-500 cursor-pointer'>
                                Watch
                              </p>
                            )}
                            <p>
                              {humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )) : (
              <div className='text-center py-8'>
                <p className='text-gray-500'>Loading course content...</p>
              </div>
            )}
          </div>
          <div className='flex items-center gap-2 py-3 mt-10'>
            <h1 className='text-xl font-bold'>Rate This Course:</h1>
            <Rating initialRating={initialRating} onRate={handleRate}/>
          </div>
        </div>

        {/*Right column */}
        <div className='md:mt-10'>
            {playerData && playerData.lectureUrl ? (
              <div>
                  <YouTube
                  videoId={playerData.lectureUrl.split('/').pop()}
                  iframeClassName='w-full aspect-video'
                  />
                  <div className='flex justify-between items-center mt-1'>
                    <p>{playerData.chapter}.{playerData.lecture}{playerData.lectureTitle}</p>
                    <button onClick={()=>markLectureAsCompleted(playerData.lectureId)} className='text-blue-600'>{progressData && progressData.lectureCompleted.includes(playerData.lectureId) ? 'Completed' : 'Mark Complete'}</button>
                  </div>
              </div>
            ) : (
              <div className='w-full aspect-video bg-gray-200 flex items-center justify-center'>
                {courseData ? (
                  <img src={courseData.courseThumbnail} alt="Course thumbnail" className='w-full h-full object-cover' />
                ) : (
                  <p className='text-gray-500'>Loading...</p>
                )}
              </div>
            )}
            
        </div>
      </div>
      <Footer/>
    </>
  ):<Loading/>
}

export default CoursePlayer
