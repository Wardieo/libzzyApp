import React from 'react'
import logo from '../asset/libzzy.png'
import app from '../asset/app.png'
import phone from '../asset/Phone.png'
import email from '../asset/Email.png'
import ig from '../asset/Instagram.png'
import fb from '../asset/Facebook.png'
import x from '../asset/TwitterX.png'

const Footer = () => {
  return (
    <div className='bg-[#F6F6F6] pb-12'>
        <div className='flex justify-around py-6 px-10'>
            <div className='flex flex-col w-36 sm:w-48 md:w-52 lg:w-64'>
                <img src={logo} alt="logo" />
                <img src={app} alt="app" width={250} className='cursor-pointer'/>
            </div>
            <div className='lg:flex sm:grid sm:grid-cols-2 gap-3 lg:gap-10 overflow-hidden'>
                <div className='flex flex-col gap-3 pt-8 text-lg sm:text-[12px] md:text-[15px] lg:text-[19px]'>
                    <h1 className='font-semibold'>Information</h1>
                    <ul className='flex flex-col gap-3 text-[#7A7A7A] font-semibold'>
                        <li className='cursor-pointer hover:text-[#9ED886] duration-300'>How it Works</li>
                        <li className='cursor-pointer hover:text-[#9ED886] duration-300'>About Us</li>
                        <li className='cursor-pointer hover:text-[#9ED886] duration-300'>Pricing</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 pt-8 text-lg sm:text-[12px] md:text-[15px] lg:text-[19px]'>
                    <h1 className='font-semibold'>Helpful Links</h1>
                    <ul className='flex flex-col gap-3 text-[#7A7A7A] font-semibold'>
                        <li className='cursor-pointer hover:text-[#9ED886] duration-300'>Supports</li>
                        <li className='cursor-pointer hover:text-[#9ED886] duration-300'>Terms & Conditions</li>
                        <li className='cursor-pointer hover:text-[#9ED886] duration-300'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 pt-8 text-lg sm:text-[12px] md:text-[15px] lg:text-[19px]'>
                    <h1 className='font-semibold'>Our Services</h1>
                    <ul className='flex flex-col gap-3 text-[#7A7A7A] font-semibold'>
                        <li className='cursor-pointer hover:text-[#9ED886] duration-300'>Standard</li>
                        <li className='cursor-pointer hover:text-[#9ED886] duration-300'>Professional</li>
                        <li className='cursor-pointer hover:text-[#9ED886] duration-300'>Custom</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 pt-8 text-lg sm:text-[12px] md:text-[15px] lg:text-[19px]'>
                    <h1 className='font-semibold'>Contact</h1>
                    <ul className='flex flex-col gap-3 text-[#7A7A7A] font-semibold'>
                        <li className='flex'><img className='pr-2 w-8' src={phone} />+ 639 639091652</li>
                        <li className='flex'><img className='pr-2 w-8' src={email}/>libzzy@hotmail.com</li>
                    </ul>
                    <div className='flex gap-2'>
                        <img src={fb} alt="fb" className='cursor-pointer w-8 h-8' />
                        <img src={x} alt="x" className='cursor-pointer w-8 h-8' />
                        <img src={ig} alt="ig" className='cursor-pointer w-8 h-8' />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex text-center justify-center text-[#7A7A7A] text-[8px] md:text-[11px] lg:text-[15px] items-center  md:mx-20 mt-20 border-t-2 pt-4'>
            <h1>2023 @ Libzzy.Ltd | All Rights reserved</h1>
            <div className='flex absolute right-0 mr-5 md:mx-20 gap-4 text-[6px] md:text-[7px] lg:text-[9px]'>
                <p className='cursor-pointer hover:text-[#9ED886] duration-300'>FAQ</p>
                <p className='cursor-pointer hover:text-[#9ED886] duration-300'>Privacy Policy</p>
                <p className='cursor-pointer hover:text-[#9ED886] duration-300'>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer