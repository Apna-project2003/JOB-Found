import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Cross from "../assets/icons8-cross-50.png";
import { JobCategories, JobLocations, jobsData } from "../assets/assets.js";
import JobCard from "./JobCard.jsx";
import { useState } from "react";
const JobListing = () => {
  const { isSearched, searchFilter, setsearchFilter,jobs } = useContext(AppContext);
  const[showFilter,setShowFilter]  = useState(false)
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}

      <div className="w-full lg:w-1/4 bg-white px-4">
        <div>
          {/* Search Filter from Hero Component */}
          {isSearched &&
            (searchFilter.title !== "" || searchFilter.location !== "") && (
              <>
                <h3 className="font-medium text-lg mb-4">Current Search</h3>
                <div className="mb-4 text-gray-600  ">
                  {searchFilter.title && (
                    <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                      {searchFilter.title}
                      <img
                        onClick={(e) =>
                          setsearchFilter((prev) => ({ ...prev, title: "" }))
                        }
                        className="cursor-pointer"
                        src={Cross}
                      />
                    </span>
                  )}
                  {searchFilter.location && (
                    <span className="ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded">
                      {searchFilter.location}
                      <img
                        onClick={(e) =>
                          setsearchFilter((prev) => ({ ...prev, location: "" }))
                        }
                        src={Cross}
                        className="cursor-pointer"
                      />
                    </span>
                  )}
                </div>
              </>
            )}
        </div>
<button onClick={e => setShowFilter(prev => !prev)} className="px-6 py-1.5 rounded border border-gray-400 lg:hidden">
  {showFilter ? "close" : "Filter"}
</button>
        {/* Category */}
        <div className={showFilter ?"": "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((Category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" name="" id="" />
                {Category}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}



         <div  className={showFilter ?"": "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 pt-14">Search by JobLocations</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((Location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" name="" id="" />
                {Location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}

      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
         <h3 className="font-medium text-3xl py-2" id="job-list">Latest jobs</h3>
         <p className="mb-8">Get your desired job from top companies</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

{jobsData.map((job,index)=>(
    <JobCard  key={index} job ={job} />
))}
         </div>
      </section>
    </div>
  );
};

export default JobListing;
