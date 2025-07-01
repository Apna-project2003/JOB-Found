import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import JobLogo from '../assets/joblogojpg.jpg';
import Logo from '../assets/logo .png'
import AddIcon from '../assets/icons8-add-48.png'
import homeIcon from '../assets/icons8-home-24.png'
import TickTack from '../assets/icons8-tick-tick-48.png'
const Dashboard = () => {

    const navigate = useNavigate()
  return (
    <div className='min-h-screen'>

        {/* Navabr for Recruiter Panel */}


     <div className='shadow py-4'>
 <div className='px-5 flex justify-between items-center'>

    <img onClick={e =>navigate('/') } src={JobLogo}   className="w-16 h-auto object-contain cursor-pointer"   />

    <div className='flex items-center gap-3'>
        <p className='max-sm:hidden'>Welcom,My job</p>

        <div className='relative group'>
            <img src={Logo} alt="" className="w-110 h-12"  />
            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                    <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
            </div>
        </div>
    </div>
 </div>
<div className='flex items-start'>
    {/* Left Sidebar with option to add job, manage jobs , view applies */}

    <div className='inline-block min-h-screen border-r-2'>
<ul className='flex flex-col items-start pt-5 text-gray-800'>
        <NavLink className={(isActive) =>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && `bg-blue-100 border-r-4 border-blue-500`}`} to={'/dashboard/add-jobs'}>
        <img src={homeIcon} alt=""  className="w-5 h-5" />
        <p className='max-sm:hidden'>Add Job</p>

        </NavLink>

        <NavLink className={(isActive) =>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && `bg-blue-100 border-r-4 border-blue-500`}`}  to={'/dashboard/manage-jobs'}>
        <img src={AddIcon}  className="w-5 h-5" />
        <p className='max-sm:hidden'>Manage jobs</p></NavLink>

          <NavLink className={(isActive) =>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && `bg-blue-100 border-r-4 border-blue-500`}`}  to={'/dashboard/view-applications'}>
        <img src={TickTack} alt=""   className="w-5 h-5"   />
        <p className='max-sm:hidden'>View Applications</p>

        </NavLink>
</ul>
    </div>
</div>                       
     </div>
    
      <Outlet/>
    </div>
  )
}

export default Dashboard
//4.06
