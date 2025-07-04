import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { jobsData } from '../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'


export const AppContext = createContext()

export const AppContextProvider =(props) =>{
 const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [searchFilter , setsearchFilter] = useState({
        title:'',
        location:''
    })


    const [isSearched , setissearched] = useState(false);

    const [jobs,setJobs] =useState([])

    const[showRecruiterLogin,setshowRecruiterLogin] = useState(false)
    
    const [companyToken , setCompanyToken] = useState(null)
    const [companyData , setCompanyData] = useState(null)
   // Function to fetch jobs

   const fetchJobs = async () =>{
 setJobs(jobsData)
   }
   // Function to Fetch  company  data

   const fetchCompanyData = async () => {

    try {

        const { data} = await axios.get(backendUrl+ '/api/company/company',{headers:{token:companyToken}})

        if(data.success) {
            setCompanyData(data.company)
            console.log(data);
        }
        else{
            toast.error(data.message)
        }
    }catch (error) {
        toast.error(error.message)
    }
   }
   useEffect(() =>{
    fetchJobs()

    const storedCompanyToken = localStorage.getItem('companyToken')

    if(storedCompanyToken) {

        setCompanyToken(storedCompanyToken)
    }
   },[])


   useEffect ( () => {
if(companyToken) {
    fetchCompanyData()
}
   },[companyToken])
    const value = {
setsearchFilter,searchFilter,
isSearched,setissearched,jobs,setJobs,setshowRecruiterLogin,showRecruiterLogin,
companyToken , setCompanyToken,companyData,setCompanyData,backendUrl
    }
    return (<AppContext.Provider value ={value}>
        {props.children}
    </AppContext.Provider>)
}