import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo .png";
import { jobsData } from "../assets/assets";
import Suitcase from "../assets/suitcase.png";
import LocationIcon from "../assets/location.png";
import Personlogo from "../assets/user.png";
import SalaryIcon from "../assets/salary.png";
import kconvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard";
import { toast } from "react-toastify";
import axios from "axios";
const ApplyJob = () => {
  const { id } = useParams();

  const [jobdata, setjobdata] = useState(null);

  const { jobs , backendUrl,userData,userApplications} = useContext(AppContext)


  const fetchJob = async () => {
    


    try{

      const {data} = await axios.get(backendUrl+`/api/jobs/${id}`)


    if(data.success){
      setjobdata(data.job)

    }

    else{

      toast.error(data.message)
    }

    } catch(error) {
 toast.error(error.message)

    }
    
  };

  const applyHandler = async () => {
    try {

      if(!userData) {
        return toast.error("Login to apply for jobs")
      }


      if(!userData.resume) {
        return  toast.error ('Upload resume to apply') 

      }
    }catch(error) {
       return toast.error(error.message)
    }
  }

  useEffect(() => {
   
      fetchJob();
    
  }, [id]);
  return jobdata ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
            <div className="flex flex-col md:flex-row items-center ">
              <img
                src={jobdata.companyId.image}
                alt=""
                className="h-10 w-auto bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"
              />
              <div className="text-center md:text-left text-neutral-700 ">
                <h1 className="text-2xl sm:text-4xl font-medium ">
                  {jobdata.title}
                </h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2 ">
                  <span className="flex items-center gap-1">
                    <img src={Suitcase} alt="" className="h-6 w-6" />
                    {jobdata.companyId.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={LocationIcon} alt="" className="h-5 w-5" />
                    {jobdata.Location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={Personlogo} alt="" className="h-5 w-5" />
                    {jobdata.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={SalaryIcon} alt="" className="h-5 w-5" />
                    CTC:{kconvert.convertTo(jobdata.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button onClick={applyHandler} className="bg-blue-600 p-2.5 px-10 text-white  rounded">Apply Now</button>
              <p className="mt-1 text-gray-600">Posted {moment(jobdata.data).fromNow()}</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start ">
            <div className="w-full lg:w-2/3 ">
              <h2 className="font-bold text-2xl mb-4">Job Description</h2>

              <div className="rich-text" dangerouslySetInnerHTML={{__html:jobdata. description}}></div>
             <button onClick={applyHandler} className="bg-blue-600 p-2.5 px-10 text-white  rounded mt-10">Apply Now</button>
            </div>

            {/* Right section more Jobs */}

            <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
              <h2>More jobs from{jobdata.companyId.name}</h2>

              {jobsData.filter(job=>job._id !== jobdata._id && job.companyId === jobdata.companyId._id).filter (job =>true).slice(0,4).map((job,index)=><JobCard key={index} job={job} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJob;
