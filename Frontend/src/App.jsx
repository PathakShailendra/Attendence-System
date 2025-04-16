import React from 'react'
import TestApi from './components/TestApi'
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div>
      <h1>Header here if needed</h1>
      <Outlet />
      <h1>Footer here if needed</h1>
      <Toaster />
    </div>
  )
}

export default App