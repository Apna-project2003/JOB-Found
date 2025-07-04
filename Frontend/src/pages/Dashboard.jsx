// 

import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import JobLogo from '../assets/joblogojpg.jpg';
import Logo from '../assets/logo .png'
import AddIcon from '../assets/icons8-add-48.png'
import homeIcon from '../assets/icons8-home-24.png'
import TickTack from '../assets/icons8-tick-tick-48.png'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
  const navigate = useNavigate()
const {companyData} = useContext(AppContext)
  return (
    <div className='min-h-screen'>

      {/* Navbar */}
      <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
          <img onClick={() => navigate('/')} src={JobLogo} className="w-16 h-auto object-contain cursor-pointer" />

          
{companyData && (
  
   <div className='flex items-center gap-3'>




            <p className='max-sm:hidden'>Welcome, {companyData.name}</p>
            <div className='relative group'>
              <img src={companyData.image} alt="" className="w-110 h-12" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
)}

         
        </div>
      </div>

      {/* Main dashboard layout: Sidebar + Main content */}
      <div className='flex'>
        {/* Sidebar */}
        <div className='w-64 min-h-screen border-r-2'>
          <ul className='flex flex-col items-start pt-5 text-gray-800'>
            <NavLink
              to='/dashboard/add-jobs'
              className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`}
            >
              <img src={homeIcon} alt="" className="w-5 h-5" />
              <p className='max-sm:hidden'>Add Jobs</p>
            </NavLink>

            <NavLink
              to='/dashboard/manage-jobs'
              className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`}
            >
              <img src={AddIcon} className="w-5 h-5" />
              <p className='max-sm:hidden'>Manage Jobs</p>
            </NavLink>

            <NavLink
              to='/dashboard/view-applications'
              className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`}
            >
              <img src={TickTack} alt="" className="w-5 h-5" />
              <p className='max-sm:hidden'>View Applications</p>
            </NavLink>
          </ul>
        </div>

        {/* Main content from nested routes */}
        <div className='flex-1 p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
