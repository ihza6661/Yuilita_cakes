import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import List from './pages/List'
import Orders from './pages/Orders'
import Add from './pages/Add'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const backEndUrl = import.meta.env.VITE_BACKEND_URL
export const currency = 'Rp. '

const App = () => {

  // const [token, setToken] = useState('2');
  // const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
  // useEffect(() => {
  //   localStorage.setItem('token', token)
  // }, [token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {

        // <Login /> :
        <>
          <Navbar />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/orders' element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default App
