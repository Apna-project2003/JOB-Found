import React from 'react'
import{Route,Routes} from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import Home from './pages/Home'
import Navbar from './components/Navbar'
const App = () => {
  return (
  <div>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/apply-job/:id' element={<ApplyJob/>} />
      <Route path='/Applications'element={<Applications/>} />
    </Routes>

  </div>

  )
}

export default App
