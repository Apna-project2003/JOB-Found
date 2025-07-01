import React, { useContext } from 'react'
import JobLogo from '../assets/joblogojpg.jpg'; 
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const Navbar = () => {

  const{openSignIn} = useClerk();
const{user} = useUser();
const navigate = useNavigate()

const{setshowRecruiterLogin} = useContext(AppContext)
  return (
    <div className='shadow py-4'>
      <div className='container px-4 2Xl:px-20 mx-auto flex justify-between'>
        <img  onClick={()=> navigate('/') } src ={JobLogo} className="w-16 h-auto object-contain cursor-pointer"  />
        {

          user ?
        <div className='flex items-center gap-2'>
<Link to={'/applications'}>Applied Jobs</Link>
<p className="text-gray-600 text-sm max-w-xs">
        Welcome back! Aryan.
      </p>
<p className='max-sm:hidden'>Hi , {user.firstName + " " +user.lastName}</p>
<UserButton/>
</div>
        :
        
        
        <div className='flex gap-4 max-sm:text-xs'>
           
            <button onClick = {e => setshowRecruiterLogin (true)}className='text-gray-600'>Recruiter Login</button>
            <button onClick={e => openSignIn()} className='bg-blue-600 text-white px-4 py-1.5 rounded-full'>Login</button>
        </div>
        }

        
      </div>


    </div>
  )
}

export default Navbar

