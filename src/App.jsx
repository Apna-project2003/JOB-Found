import React, { useContext } from 'react'
import{Route,Routes} from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import Home from './pages/Home'
import Navbar from './components/Navbar'

import { AppContext } from './context/AppContext'
import RecruiterLogin from './components/RecruiterLogin'
import Dashboard from './pages/Dashboard'
import AddJobs from './pages/AddJobs'
import MangeJobs from './pages/MangeJobs'
import ViewApplications from './pages/ViewApplications'
const App = () => {
  const{showRecruiterLogin} = useContext(AppContext)
  return (
  <div>
   {showRecruiterLogin &&  <RecruiterLogin/>}
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/apply-job/:id' element={<ApplyJob/>} />
      <Route path='/Applications'element={<Applications/>} />
      <Route path='/dashboard' element ={<Dashboard/>} />
       <Route path='/add-job' element ={<AddJobs/>} />
        <Route path='/manage-jobs' element ={<MangeJobs/>} />

         <Route path='/view-applications' element ={<ViewApplications/>} />
       
    </Routes>

  </div>

  )
}

export default App
