import React from 'react'
import GooglePlay from "../assets/icons8-google-play-store-48.png"
import AppStore from "../assets/icons8-app-store-50.png"
import Pointingmen from "../assets/pexels-thirdman-5256523.jpg"
const AppDownload = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto my-20'>
      <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md'>Download Mobile App For Better Experience</h1>
        <div className='flex gap-4'>
            <a href="#" className='inline-block'>
                <img className='h-12' src={GooglePlay} alt="" />
            </a>
            <a href="#" className='inline-block'>
                <img className='h-12' src={AppStore} alt="" />
            </a>
        </div>

       <div className='flex justify-center'>
          <img src={Pointingmen} alt="Pointing Man" className='w-80 rounded-lg shadow-lg' />
        </div>

      </div>
       
    </div>
  )
}

export default AppDownload
