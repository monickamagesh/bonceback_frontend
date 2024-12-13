import React from 'react'
import Navbar from './Navbar'
import logo from '../../assets/logo.png'
import RewardCard from './RewardCard'
import SecondaryBtn from './button/SecondaryBtn'

const PatientSidebar = () => {
  return (
    <div className='sidebar space-y-5  bg-white p-4 flex flex-col justify-between h-[80%]'>
      <img className='bblogo mb-12  ' src={logo} alt="bb logo" />
      <Navbar/>
      <RewardCard/>
      <SecondaryBtn btntext="Logout" icon="logout"  />
    </div>
  )
}

export default PatientSidebar