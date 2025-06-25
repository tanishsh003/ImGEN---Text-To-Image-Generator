import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
const GenerateBtn = () => {
  const {user, setShowLogin}=useContext(AppContext)
  const nevigate=useNavigate()
  const onClickHandler = () => {
    if(user){
      nevigate('/result')
    }
    else{
      setShowLogin(true);
    }
  }
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1 , y:0}}
    viewport={{once:true}}className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>Try Now to See the Magic</h1>
      <button onClick={onClickHandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500 '>Generate Images <img className='h-6' src={assets.star_group} alt="" /></button>

      
    </motion.div>
  )
}

export default GenerateBtn
