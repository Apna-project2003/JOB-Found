import React from "react";
import searcIcon from "../assets/icons8-search-50.png";
import LocationIcon from "../assets/icons8-location-48.png";
import Amazon from "../assets/icons8-amazon-48.png";
import Facebook from "../assets/icons8-facebook-48.png";
import Adobe from "../assets/icons8-Adobe-48.png";
import Microsoft from "../assets/icons8-microsoft-48.png";
import Google from "../assets/icons8-google-48.png";
import Meta from "../assets/icons8-meta-48.png";
const Hero = () => {
  return (
    <div className="container 2xl: px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:max-auto">
          <div className="flex items-center">
            <img src={searcIcon} className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="max-sm: text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 bg-white p-2 rounded shadow w-full max-w-sm">
              <img src={LocationIcon} className="w-5 h-5" alt="location" />
              <input
                type="text"
                placeholder="Location for jobs"
                className="text-sm max-sm:text-xs p-1 outline-none w-full"
              />
            </div>
          </div>
          <button className="bg-blue-600 px-6 py-2 rounded text-white m-1">
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">Trusted by</p>
          <img className="h-6" src={Google} alt="google" />
          <img className="h-6" src={Microsoft} alt="" />
          <img className="h-6" src={Meta} alt="" />
          <img className="h-6" src={Adobe} alt="" />
          <img className="h-6" src={Facebook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from 'react'
// // import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'

// const Hero = () => {
//   return (
//     <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-12 px-4 rounded-2xl">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//           Over 10,000+ jobs to apply
//         </h2>
//         <p className="text-sm sm:text-base mb-8">
//           Your Next Big Career Move Starts Right Here – Explore the Best Job Opportunities and
//           Take the First Step Toward Your Future!
//         </p>

//         Search Bar
//         <div className="bg-white rounded-lg p-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 max-w-3xl mx-auto">
//           {/* Job Input */}
//           <div className="flex items-center w-full sm:w-auto flex-1 px-3 py-2 border rounded-md">
//             <FaSearch className="text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Search for jobs"
//               className="w-full outline-none text-gray-700"
//             />
//           </div>

//           {/* Location Input */}
//           <div className="flex items-center w-full sm:w-auto flex-1 px-3 py-2 border rounded-md">
//             <FaMapMarkerAlt className="text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Location"
//               className="w-full outline-none text-gray-700"
//             />
//           </div>

//           {/* Search Button */}
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero
