import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <section className=' h-screen w-full text-black'>
      <Outlet />
    </ section >
  )
}

export default App
