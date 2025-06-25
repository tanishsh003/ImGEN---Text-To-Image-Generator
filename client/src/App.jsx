import React,{useContext} from 'react'
import Home from './pages/Home'

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { AppContext } from './context/AppContext'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px28  min-h-screen bg-gradient-to-b from-teal-50 to-orange-100'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}

      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/result' element={<Result/>} />

        <Route path='/buycredit' element={<BuyCredit/>} />
      
      
      </Routes>

      <Footer/>.
    </div>
  )
}

export default App
