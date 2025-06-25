import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Cross from "../assets/icons8-cross-50.png";
import { JobCategories, JobLocations, jobsData } from "../assets/assets.js";
import LeftArrow from "../assets/icons8-left-arrow-32.png";
import JobCard from "./JobCard.jsx";
import { useState } from "react";
import RightArrow from "../assets/icons8-right-arrow-30.png";
const JobListing = () => {
  const { isSearched, searchFilter, setsearchFilter, jobs } =
    useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const[selectedCategories,setSelectedCategories]=useState([])

  const[selectedLocations,setSelectedLocations] = useState([])
  const[filteredJobs,setFilteredJobs] = useState(jobsData)
  const handleCategoryChange = (Category) =>{
setSelectedCategories(
  prev=>prev.includes(Category) ? prev.filter(c=>c!== Category) :[...prev,Category]
)
  }

   const handleLocationsChange = (Location) =>{
setSelectedLocations(
  prev=>prev.includes(Location) ? prev.filter(c=>c!== Location) :[...prev,Location]
)
  }

//   useEffect(()=>{
//     const matchesCategory = jobsData => selectedCategories.length ===0 || selectedCategories.includes(jobsData.Category)

//       const matchesLocations = jobsData => selectedLocations.length ===0 || selectedLocations.includes(jobsData.Location)

//       const matchesTitle = jobsData => searchFilter.title ==="" || jobsData.toLowerCase().includes(searchFilter.title.toLowerCase())
//       const matchesSearchLocation = jobsData => searchFilter.Location ===""||  jobsData.Location.toLowerCase().includes(searchFilter.Location.toLowerCase())

//  const newFilteredJobs = jobsData.slice().reverse().filter(
//   jobsData => matchesCategory(jobsData) && matchesLocations(jobsData) && matchesTitle(jobsData) && matchesSearchLocation(jobsData)
//  )
//       setFilteredJobs(newFilteredJobs)
//       setCurrentPage(1)

//   },[jobsData,selectedCategories ,selectedLocations , searchFilter])




useEffect(() => {
  const matchesCategory = job =>
    selectedCategories.length === 0 || selectedCategories.includes(job.category)

  const matchesLocation = job =>
    selectedLocations.length === 0 || selectedLocations.includes(job.location)

  const matchesTitle = job =>
    searchFilter.title === "" ||
    job.title.toLowerCase().includes(searchFilter.title.toLowerCase())

  const matchesSearchLocation = job =>
    searchFilter.location === "" ||
    job.Location.toLowerCase().includes(searchFilter.location.toLowerCase())

  const newFilteredJobs = jobsData
    .slice()
    .reverse()
    .filter(
      job =>
        matchesCategory(job) &&
        matchesLocation(job) &&
        matchesTitle(job) &&
        matchesSearchLocation(job)
    )

  setFilteredJobs(newFilteredJobs);
  setCurrentPage(1);
}, [jobs, selectedCategories, selectedLocations, searchFilter]);

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
        <button
          onClick={(e) => setShowFilter((prev) => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "close" : "Filter"}
        </button>
        {/* Category */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((Category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" name=""
                onChange={() => handleCategoryChange (Category)}
                checked = {selectedCategories.includes(Category)}  />
                {Category}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}

        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 pt-14">
            Search by JobLocations
          </h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((Location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox"
                 onChange={() => handleLocationsChange (Location)}
                checked = {selectedLocations.includes(Location)}
                 />
                {Location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}

      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest jobs
        </h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredJobs
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
        </div>

        {/* Pagination */}

        {filteredJobs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <a href="#job-list">
              <img
                onClick={() => setCurrentPage(Math.max(currentPage - 1), 1)}
                src={LeftArrow}
                alt=""
              />
            </a>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map(
              (_, index) => (
                <a href="#job-list">
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-100 text-blue-500"
                        : "text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </button>
                </a>
              )
            )}

            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage(
                    Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6))
                  )
                }
                src={RightArrow}
                alt=""
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
