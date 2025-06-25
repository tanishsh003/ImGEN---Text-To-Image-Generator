import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const Navbar = () => {

    const {user, setShowLogin, logout, credit}=useContext(AppContext)
    const nevigate = useNavigate();
    return (
        <div className='flex justify-between py-4'>
            <Link to='/'> <img src={assets.logo} alt=" " className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>

                {user ?
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button onClick={()=>nevigate('/buycredit')}   className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                            <img className='w-5' src={assets.credit_star} alt="" /><p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left : {credit}</p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4 '>Hi, {user.name}</p>
                        <div className='relative group '>
                            <img className='w-10 drop-shadow' src={assets.profile_icon} alt="" />
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounted pt-12 '>
                                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm '>
                                    <li className='py-1 px-2 cursor-pointer pr-10 ' onClick={logout}>LogOut</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-5'>
                        <p onClick={() => nevigate('/buycredit')} className='cursor-pointer'>Pricing</p>
                        <button className='bg-zinc-800 text-white px-10 py-2 sm:px-8
             text-sm rounded-full' onClick={()=>setShowLogin(true)}>Login</button>

                    </div>}




            </div>

        </div>
    )
}

export default Navbar
