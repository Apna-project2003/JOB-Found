import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { jobsData } from '../assets/assets'


export const AppContext = createContext()

export const AppContextProvider =(props) =>{

    const [searchFilter , setsearchFilter] = useState({
        title:'',
        location:''
    })


    const [isSearched , setissearched] = useState(false);

    const [jobs,setJobs] =useState([])

    
   // Function to fetch jobs

   const fetchJobs = async () =>{
 setJobs(jobsData)
   }

   useEffect(() =>{
    fetchJobs()
   },[])


    const value = {
setsearchFilter,searchFilter,
isSearched,setissearched,jobs,setJobs

    }
    return (<AppContext.Provider value ={value}>
        {props.children}
    </AppContext.Provider>)
}