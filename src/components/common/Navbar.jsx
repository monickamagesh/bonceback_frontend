import React from 'react'
import { NavLink } from 'react-router-dom'
import PrimaryBtn from './button/PrimaryBtn'


const Navbar = () => {
  return (
    <div className='navbar'>
    <NavLink to="/patient">
      <PrimaryBtn btntext="Your Progress" icon="offline_bolt"/>
    </NavLink>

    <NavLink to="/therapist">
      <PrimaryBtn btntext="Chat" icon="chat"/>
    </NavLink>

    <NavLink to="/patient">
      <PrimaryBtn btntext="Notification" icon="notifications"/>
    </NavLink>

    <NavLink to="/therapist">
      <PrimaryBtn btntext="Resource Library" icon="local_library"/>
    </NavLink>

    <NavLink to="/patient">
      <PrimaryBtn btntext="Your Analytic" icon="analytics"/>
    </NavLink>
    </div>
  )
}

export default Navbar