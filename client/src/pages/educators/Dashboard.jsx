import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { assets, dummyDashboardData } from '../../assets/asset';
import Loading from '../../components/students/Loading';

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashbaordData = async () => {
    setDashboardData(dummyDashboardData);
  }

  useEffect(() => {
    fetchDashbaordData();
  }, []);

  return dashboardData ? (
    <div className='min-h-screen flex flex-col items-start gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='space-y-5'>
        <div className='flex flex-wrap gap-5 items-center'>

          {/* Card 1 - Total Enrollments */}
          <div className='flex items-center gap-4 shadow-card border border-orange-400 p-4 w-60 rounded-md bg-white'>
            <img src={assets.patients_icon} alt="patients_icon" className='w-12 h-12 object-contain' />
            <div>
              <p className='text-2xl font-medium text-gray-600'>
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p className='text-base text-gray-500'>Total Enrollments</p>
            </div>
          </div>

          {/* Card 2 - Total Courses */}
          <div className='flex items-center gap-4 shadow-card border border-orange-400 p-4 w-60 rounded-md bg-white'>
            <img src={assets.appointments_icon} alt="appointments_icon" className='w-12 h-12 object-contain' />
            <div>
              <p className='text-2xl font-medium text-gray-600'>
                {dashboardData.totalCourses}
              </p>
              <p className='text-base text-gray-500'>Total Courses</p>
            </div>
          </div>

          {/* Card 3 - Total Earnings */}
          <div className='flex items-center gap-4 shadow-card border border-orange-400 p-4 w-60 rounded-md bg-white'>
            <img src={assets.earning_icon} alt="earning_icon" className='w-12 h-12 object-contain' />
            <div>
              <p className='text-2xl font-medium text-gray-600'>
                {currency} {dashboardData.totalEarnings}
              </p>
              <p className='text-base text-gray-500'>Total Earnings</p>
            </div>
          </div>

        </div>

        <div>
          <h2 className='pb-4 text-lg font-medium'>Latest Enrollments</h2>
          <div className='overflow-x-auto w-full max-w-4xl rounded-md shadow-md border border-gray-300 bg-white'>
            <table className='min-w-full border-collapse'>
              <thead className='bg-gray-100 text-gray-700 text-sm font-semibold'>
                <tr>
                  <th className='px-4 py-3 text-center hidden sm:table-cell border-b border-gray-300'>#</th>
                  <th className='px-4 py-3 text-left border-b border-gray-300'>Student Name</th>
                  <th className='px-4 py-3 text-left border-b border-gray-300'>Course Title</th>
                </tr>
              </thead>

              <tbody className='text-sm text-gray-700'>
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50 transition-colors border-b border-gray-200'>
                    <td className='px-4 py-3 text-center hidden sm:table-cell'>
                      {index + 1}
                    </td>
                    <td className='md:px-4 px-2 py-3 flex items-center gap-3'>
                      <img
                        src={item.student.imageUrl}
                        alt="Profile"
                        className='w-9 h-9 rounded-full object-cover border border-gray-300'
                      />
                      <span className='truncate'>{item.student.name}</span>
                    </td>
                    <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : <Loading />;
}

export default Dashboard;
