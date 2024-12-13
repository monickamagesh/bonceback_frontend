import React from 'react'
import Navbar from './Navbar'
import logo from '../../assets/logo.png'
import RewardCard from './RewardCard'
import SecondaryBtn from './button/SecondaryBtn'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className='bblogo' src={logo} alt="bb logo" />
      <Navbar/>
      <RewardCard/>
      <SecondaryBtn btntext="Logout" icon="logout" />
    </div>
  )
}

export default Sidebar