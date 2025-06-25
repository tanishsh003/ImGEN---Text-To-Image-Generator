import React from 'react'
import {assets} from '../assets/assets'
/* eslint-disable no-unused-vars */

import {motion} from 'framer-motion'

function Discription() {
  return (
    <motion.div 
    initial={{opacit:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your Imagination into Visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img className='w-80 xl:w-96 rounded-lg ' src={assets.sample_img_1} alt="" />
            <div className='' >
                <h2 className='text-3xl font-medium max-w-lg mb-4'>AI-Powered Text to image Generator</h2>
                <p className='text-gray-600 mb-4'>Unleash your ideas with the power of artificial intelligence. From wild concepts to realistic scenes, simply describe what you want to see, and watch it turn into a work of art in seconds.</p>
                <p className='text-gray-600'>This tool uses cutting-edge AI to generate images from natural language prompts. Whether you're a designer, storyteller, or just curious, it's the easiest way to bring your vision to life.</p>

            </div>
        </div>
      
    </motion.div>
  )
}

export default Discription
