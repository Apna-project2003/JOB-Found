import React, { useContext, useEffect, useState } from 'react'
import { jobsApplied, jobsData } from '../assets/assets'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
const MangeJobs = () => {

  const navigate = useNavigate()

  const [jobs,setJobs] = useState([])

  const {backendUrl , companyToken} = useContext(AppContext)


 

  // Function to Fetch company Job  Applications data


  const fetchCompanyJobs =async () => {


    try{

      const {data} = await axios.get(backendUrl+'/api/company/list-jobs',{headers:{token:companyToken}})

      if(data.success) {

        setJobs(data.jobsData.reverse())
console.log(data.jobsData);


      }else{
        toast.error(data.message)
      }
    }
    catch (error) {
      toast.error(error.message)
    }
   
  }
useEffect(() => {
if(companyToken) {
fetchCompanyJobs()
}

},[companyToken])



// const changeJobVisibility = async (id) => {
//   try {
//     const { data } = await axios.post(
//    backendUrl+'/api/company/change-visibility',
//       { id },
//       { headers: { token: companyToken } }
//     );

//     if (data.success) {
//       // 👇 Replace the updated job in jobs state
//       // setJobs((prevJobs) =>
//       //   prevJobs.map((job) =>
//       //     job._id === data.job._id ? data.job : job

//       toast.success(data.message)
//       fetchCompanyJobs()
//       //   )
//       // );

//       // toast.success("Visibility changed!");
//     } else {
//       toast.error(data.message);
//     }
//   } catch (error) {
//     toast.error(error.message);
//   }
// };







const toggleVisibility = async (jobId) => {
  try {
    const { data } = await axios.post(
      `${backendUrl}/api/company/change-visibility`,
      { id: jobId },
      { headers: { token: companyToken } }
    );

    if (data.success) {
      // 👇 Replace the updated job in jobs state
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === data.job._id ? data.job : job
        )
      );

      toast.success("Visibility changed!");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};






  let count =1;
  return (
    <div className='container p-4 max-w-5xl'>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
              <th className='py-2 px-4 border-b text-left'>Job Title</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Date</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Location</th>
              <th className='py-2 px-4 border-b text-center'>Applicants</th>
              <th className='py-2 px-4 border-b text-left'>Visible</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job,index) =>(

<tr key = {index} className='text-gray-700'>
<td className='py-2 px-4 border-b max-sm:hidden'>{count++}</td>
<td  className='py-2 px-4 border-b'>{job.title}</td>
<td  className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
<td  className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
<td  className='py-2 px-4 border-b text-center'>{job.applicants}</td>
<td className='py-2 px-4 border-b'>
 


  <input
    className='scale-125 ml-4 cursor-pointer'
    type="checkbox"
    checked={job.visible}
   
    onChange={() => toggleVisibility(job._id)}
  />




</td>

</tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-4 flex justify-end'>
        <button  onClick={() => navigate('/dashboard/add-jobs')}className='bg-black text-white py-2 px-4 rounded'>Add new job</button>
      </div>
    </div>
  )
}

export default MangeJobs

