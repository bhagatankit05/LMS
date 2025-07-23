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
      </div>
    </div>
  ) : <Loading />;
}

export default Dashboard;
