import React from 'react'
import TestApi from './components/TestApi'
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <h1>Header here if needed</h1>
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App