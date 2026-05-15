import { useState } from 'react'
import Navbar  from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'

function App() {
 

  return (
    <div>
      <Navbar />                                        
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Home />}/>
      </Routes>
     
      
    </div>
   
  )
}

export default App
