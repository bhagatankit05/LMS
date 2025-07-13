import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/students/Loading';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const { allCourses } = useContext(AppContext);

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
