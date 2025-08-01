import React from 'react'
import Homepage from './Components/Homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'


const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/"  element={<Homepage/>}/>
         <Route path="/about"  element={<About/>}/>
          <Route path="/contact"  element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App