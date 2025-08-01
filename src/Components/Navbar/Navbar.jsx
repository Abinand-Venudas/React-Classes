import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <>
    <div>
      <nav className='bg-black text-white '>
        <ul className='flex justify-center text-center gap-5'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
           <NavLink to="/contact">Contact</NavLink>

        </ul>
      </nav>
    </div>
    </>
  )
}

export default Navbar