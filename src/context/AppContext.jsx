import React, { useState } from 'react'
import { createContext } from 'react'


export const AppContext = createContext()

export const AppContextProvider =(props) =>{

    const [searchFilter , setsearchFilter] = useState({
        title:'',
        location:''
    })


    const [isSearched , setissearched] = useState(false);

    


    const value = {
setsearchFilter,searchFilter,
isSearched,setissearched,

    }
    return (<AppContext.Provider value ={value}>
        {props.children}
    </AppContext.Provider>)
}