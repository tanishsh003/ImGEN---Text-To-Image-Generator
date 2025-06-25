import React, { useContext } from 'react'
/* eslint-disable no-unused-vars */

import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
const Header = () => {
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
    <motion.div className='flex flex-col justify-center items-center text-center my-20 '
    initial={{opacity:0.3, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
      <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
      initial={{opacity:0, y:1-20}}
      animate={{opacity:1, y:0}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8, delay:0.2}}
      ><p>
        Best Text to Image Generator
        </p>
        <img src={assets.star_icon} alt="" />
        </motion.div>
        <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center '
        initial={{opacity:0}}  
        animate={{opacity:1}}
        transition={{delay:0.4, duration:2}}
        >Turn Text to <span className='text-blue-600'>Image</span>, in seconds</motion.h1>
        <motion.p className='text-center max-w-xl mx-auto mt-5'
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.6, duration:0.8}}
        > Our AI-powered text-to-image generator turns your imagination into art. Just type a prompt, and instantly get high-quality images created from your text — perfect for storytelling, design, and creativity.</motion.p>

        <motion.button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full '
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{default:{duration:0.2}, opacity:{delay:0.8}, duration:1}}
        onClick={onClickHandler}
        >Generate Images <img className='h-6' src={assets.star_group} alt="" /></motion.button>

        <motion.div className='flex flex-wrap justify-center items-center gap-3 mt-16'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1, duration:1}}
        >
            {Array(6).fill('').map((item, index)=>(
                <motion.img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 '
                whileHover={{ scale: 1.05 }}
                transition={{ scale: { duration: 0.01 } }}
                src={index % 2 ===0 ? assets.sample_img_1 : assets.sample_img_2} key={index} width={70} />
            ))}
        </motion.div>

        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2, duration:0.8}}
        className='mt-2 text-neutral-600'>Generated Images from <span className='text-blue-600'>Im-Gen</span></motion.p>
    </motion.div>
  )
}

export default Header
