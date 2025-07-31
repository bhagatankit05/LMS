import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/students/Loading';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyCourses = () => {
  const { currency, backendUrl , isEducator , getToken } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  const fetchEducatorCourses = async () => {
    try {
      const token = await getToken()
      const {data} = await axios.get(backendUrl + '/api/educator/courses' , {headers:{Authorization:`Bearer ${token}`}})
      data.success && setCourses(data.courses)

    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (isEducator) {
       fetchEducatorCourses();
    }
  }, [isEducator]);

  return courses ? (
    <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='w-full'>
        <h2 className='pb-4 text-lg font-medium'>My Courses</h2>

        <div className='overflow-x-auto w-full max-w-4xl rounded-md shadow-md border border-gray-300 bg-white'>
          <table className='min-w-full border-collapse'>
            <thead className='bg-gray-100 text-gray-700 text-sm font-semibold'>
              <tr>
                <th className='px-4 py-3 text-left border-b border-gray-300'>Course</th>
                <th className='px-4 py-3 text-left border-b border-gray-300'>Earnings</th>
                <th className='px-4 py-3 text-left border-b border-gray-300'>Students</th>
                <th className='px-4 py-3 text-left border-b border-gray-300'>Published</th>
              </tr>
            </thead>

            <tbody className='text-sm text-gray-700'>
              {courses.map((course, index) => (
                <tr key={course._id} className='hover:bg-gray-50 transition-colors border-b border-gray-200'>
                  <td className='md:px-4 px-2 py-3 flex items-center gap-3'>
                    <img
                      src={course.courseThumbnail}
                      alt="course-image"
                      className='w-10 h-10 object-cover rounded border border-gray-300'
                    />
                    <span className='truncate'>{course.courseTitle}</span>
                  </td>
                  <td className='px-4 py-3'>
                    {currency} {Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount * course.coursePrice / 100))}
                  </td>
                  <td className='px-4 py-3'>
                    {course.enrolledStudents.length}
                  </td>
                  <td className='px-4 py-3'>
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  ) : <Loading />;
}

export default MyCourses;
