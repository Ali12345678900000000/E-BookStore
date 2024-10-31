import React, { useEffect } from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Courses from './courses/Courses'
import Contactpage from './contact/Contactpage'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider'

const App = () => {

  const [authUser] = useAuth()
  const location = useLocation();

  useEffect(() => {
    if (location.state?.openSignup) {
      document.getElementById("my_modal_4").showModal();
    }
  }, [location]);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/" state={{ openSignup: true }}/>} />
          <Route path='/contacts' element={<Contactpage />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
