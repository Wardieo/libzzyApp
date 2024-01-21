import React, { useState } from 'react'
import logo from '../asset/libzzy.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const NavBar = () => {
  const [nav, setNav] = useState(false); 

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='max-w-[1440px] mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <img 
          className='w-36 md:w-48 cursor-pointer'
          src={logo} 
          alt="logo" />
          <div className='hidden md:flex'>
            <ul className='flex gap-7 md:text-[12px] lg:text-sm'>
              <li className='hover:text-[#70B156] duration-300'><a href="/">How it Works</a></li>
              <li className='hover:text-[#70B156] duration-300'><a href="/">About Us</a></li>
              <li className='hover:text-[#70B156] duration-300'><a href="/">Pricing</a></li>
              <li className='hover:text-[#70B156] duration-300'><a href="/">Download app</a></li>
            </ul>
          </div>
          <div className='hidden md:flex items-center md:text-[12px] lg:text-sm'>
            <a href="/" className='font-semibold pr-5'>Login</a>
            <button className='bg-[#232833] text-white px-5 py-2 rounded-md hover:bg-[#2e3a50] duration-300'>Start for free</button>
          </div>
          <div onClick={handleNav} className='cursor-pointer md:hidden'>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
          </div>
          <div className={nav ? 'fixed z-[1] left-0 top-0 w-[60%] h-full border-r border-gray-300 bg-white ease-in-out duration-500' : 'fixed z-[1] h-screen top-0 left-[-100%] duration-500'}>
              <img 
              className='w-36 mx-4 md:w-48'
              src={logo} 
              alt="logo" />
              <ul className='text-sm pt-10 px-6 uppercase'>
                <li className='py-4 border-b border-gray-500'><a href="/">How it Works</a></li>
                <li className='py-4 border-b border-gray-500'><a href="/">About Us</a></li>
                <li className='py-4 border-b border-gray-500'><a href="/">Pricing</a></li>
                <li className='py-4 border-b border-gray-500'><a href="/">Download app</a></li>
                <div className='text-sm py-4 items-center justify-center text-center border-b border-gray-500'>
                  <a href="/" className='pr-5'>Login</a>
                  <button className='bg-[#70B156] text-white px-5 py-2 rounded-md '>Start for free</button>
                </div>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default NavBar