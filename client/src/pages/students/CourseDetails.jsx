import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/students/Loading';
import { assets } from '../../assets/asset';
import humanizeDuration from 'humanize-duration';
import Footer from '../../components/students/Footer';
import YouTube from 'react-youtube';
import { toast } from 'react-toastify';
import axios from 'axios';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const {
    allCourses,
    calculateRating,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    currency,
    backendUrl ,
    userData,
    getToken
  } = useContext(AppContext);

  const fetchCourseData = async () => {
   try {
    const {data} = await axios.get(backendUrl + '/api/course/' + id)

    if(data.success){
      setCourseData(data.courseData)
    }
    else{
      toast.error(data.message)
    }
   } catch (error) {
     toast.error(error.message)
   }
  };

  //implementing enrollcourse that will allow us to buy course
  const enrollcourse = async () =>{
    try {
      if (!userData) {
        return toast.warn('Login to Enroll!')
      }
      if (isAlreadyEnrolled) {
        return toast.warn('Already Enrolled')
      }
      const token = await getToken();
      const {data} = await axios.post(backendUrl + '/api/user/purchase' , {courseID : courseData._id} , {headers: {Authorization: `Bearer ${token}`}})
      if (data.success) {
        const {session_url} = data
        window.location.replace(session_url)
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }


  useEffect(() => {
    fetchCourseData();
  }, []);

   useEffect(() => {
    if (userData && courseData) {
      setIsAlreadyEnrolled(userData.enrolledCourses.includes(courseData._id))
    }
  }, [userData , courseData]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
                __html: courseData.courseDescription.slice(0, 200) + '...',
              }}
            ></div>

            {/* review and ratings */}
            <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
              <p>{calculateRating(courseData)}</p>
              <div className='flex'>
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star_icon : assets.star_blank} alt="rating star" className='w-3.5 h-3.5' />
                ))}
              </div>
              <p className='text-blue-600'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})</p>
              <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
            </div>
            <p className='text-sm'> Course by <span className='text-blue-600'>{courseData.educator.name}</span></p>

            <div className='pt-8 text-gray-800'>
              <h2 className='text-xl font-semibold'>Course Structure</h2>

              <div className='pt-5'>
                {courseData.courseContent.map((chapter, index) => (
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
                            <img src={assets.play_icon} alt="play-icon" className='w-4 h-4 mt-1' />
                            <div className='flex items-center justify-between w-full text-gray-800 text-sm md:text-default'>
                              <p>{lecture.lectureTitle}</p>
                              <div className='flex gap-2 '>
                                {lecture.isPreviewFree && (
                                  <p onClick={() => setPlayerData({ videoId: lecture.lectureUrl.split('/').pop() })} className='text-blue-500 cursor-pointer'>
                                    Preview
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
                ))}
              </div>
            </div>

            <div className='py-20 text-sm md:text-default'>
              <h3 className='text-xl font-semibold text-gray-800'>Course Description</h3>
              <p className="pt-3 rich-text"
                dangerouslySetInnerHTML={{
                  __html: courseData.courseDescription
                }}></p>
            </div>
          </div>

          {/* Right column */}
          <div className="max-w-[424px] min-w-[300px] sm:min-w-[420px] z-10 shadow-[0px_4px_15px_2px_rgba(0,0,0,0.1)] rounded-t md:rounded-none overflow-hidden bg-white">
            
            {/* YouTube styling */}
            {playerData ? (
              <div className="w-full aspect-video bg-black">
                <YouTube
                  videoId={playerData.videoId}
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: { autoplay: 1 }
                  }}
                  className="w-full h-full"
                />
              </div>
            ) : (
              <img src={courseData.courseThumbnail} alt="" />
            )}

            <div className='p-5'>
              <div className='flex items-center gap-2'>
                <p className='text-red-500'> <span className='font-medium'>5 days</span> left at this price!</p>
              </div>
              <div className='flex gap-3 items-center pt-2'>
                <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>
                  {currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}
                </p>
                <p className='md:text-lg text-gray-500 line-through'>{currency}{courseData.coursePrice}</p>
                <p className='md:text-lg text-gray-500'>{courseData.discount}% off</p>
              </div>

              <div className='flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500'>
                <div className='flex items-center gap-1'>
                  <img className="w-5 h-5" src={assets.star_icon} alt="star_icon" />
                  <p>{calculateRating(courseData)}</p>
                </div>
                <div className='h-4 w-px bg-gray-500/40'> </div>
                <div className='flex items-center gap-1'>
                  <img src={assets.time_clock_icon} alt="time_clock" />
                  <p>{calculateCourseDuration(courseData)}</p>
                </div>
                <div className='h-4 w-px bg-gray-500/40'> </div>
                <div className='flex items-center gap-1'>
                  <img src={assets.lesson_icon} alt="lesson_icon" />
                  <p>{calculateNoOfLectures(courseData)} lectures</p>
                </div>
              </div>

              <button  onClick={enrollcourse} className='md:mt-6 mt-4 w-full py-3 rounded bg-amber-500 text-white font-medium'>
                {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
              </button>

              <div className='pt-6'>
                <p className='md:text-xl text-lg font-medium text-gray-800'>What's in the course?</p>
                <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
                  <li>Lifetime access with free updates.</li>
                  <li>Downloadable resources for offline learning.</li>
                  <li>Interactive quizzes to test your knowledge.</li>
                  <li>Certificate of completion after course ends.</li>
                  <li>Access to expert support and discussion forums.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
