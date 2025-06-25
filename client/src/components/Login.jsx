import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import React, { useContext, useEffect, useState } from 'react'
/* eslint-disable no-unused-vars */
import {motion} from 'framer-motion'

import axios from 'axios'
import { toast } from 'react-toastify'


const Login = () => {
  const [state, setState]=useState('Login')
  const {setShowLogin, user,backendUrl, setToken, setUser}=useContext(AppContext)
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")



  const onSubmitHandler= async (e)=>{
    e.preventDefault()

    try{
      if(state === 'Login'){
        const {data}=await axios.post(backendUrl+'/api/user/login', {email, password})
        console.log("fetched data", data.user);
        

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)

          setShowLogin(false)
          console.log("user is" ,user);
          
        }
        else{
          toast.error(data.message)

        }
      }
      else{
        const {data}=await axios.post(backendUrl+'/api/user/register', {name,email, password})

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)

          setShowLogin(false)
        }
        else{
          toast.error(data.message)

        }

      }

    }
    catch(error){
        toast.error(error.message)
    }

  }

  useEffect(()=>{
    document.body.style.overflow='hidden'
    return  ()=>{
      document.body.style.overflow='unset'
    }

  })
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/40 flex justify-center items-center'>

      <motion.form onSubmit={onSubmitHandler}
       initial={{opacity:0, y:50}}
       transition={{duration:0.5}}
       whileInView={{opacity:1 , y:0}}
       viewport={{once:true}}
      className='relative bg-white p-10 rounded-xl text-zinc-800 flex-col items-center justify-center' >
        <h1 className='text-center text-2xl text-neutral-900 font-medium'>{state}</h1>
        <p className='text-sm text-center'>Welcome, back! Please Sign in</p>

        {state!=='Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          {/* <img src={assets.use} alt="" /> */}
          <input className='outline-none text-sm' type="text"  placeholder='Full Name' required name="" id="" onChange={(e)=>setName(e.target.value)} value={name} />
        </div>}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.email_icon} alt="" />
          <input className='outline-none text-sm' type="email"  placeholder='Enter Email' required name="" id="" onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>


        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.lock_icon} alt="" />
          <input className='outline-none text-sm' type="password"  placeholder='Password' required name="" id="" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer '>Forgot Password?</p>

        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state==='Login' ? 'Login' : 'Create Account'}</button>

        {state==='Login' && <p className='mt-5 text-center' >Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=> setState('Sign Up')} >Sign up</span></p>}


        {state==='Sign Up' && <p className='mt-5 text-center' >Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=> setState('Login')} >Login</span></p>}

        <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />

      </motion.form>
      
    </div>
  )
}

export default Login
