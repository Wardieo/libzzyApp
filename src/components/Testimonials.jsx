import React from 'react'
import qoute from '../asset/Quote.png'
import client from '../asset/pak.png'

const Testimonials = () => {
  return (
    <div className=' bg-[#EAEAEA] h-full'>
        <div className='max-w-[1440px] mx-auto py-36 grid place-content-center md:flex justify-between px-4'>
            <div className='sm:w-[70%] md:w-[46%]'>
                <h1 className='text-[#565656] text-[30px] md:text-[40px] lg:text-[50px] font-semibold '>Our Customers Love what we do</h1>
                <p className='text-[#797979] font-medium'>Over 2,300+ clients use Libzzy to easily manage their books and overall productivity</p>
                <button className='text-[#9ED886] my-10 md:mt-14 hover: bg-white px-3 py-4 rounded-sm drop-shadow-md'>Read the success stories</button>
            </div>
            <div className='flex justify-between bg-white md:w-[50%] rounded-md px-7'>
                <div className='flex flex-col p-6 sm:w-[100%] md:w-[80%] gap-6'>
                    <img src={qoute} alt="quote" width={60}/>
                    <h2 className='mt-8 lg:text-[15px]'>Wow! Using Libzzy has helped our library constantly improve.</h2>
                    <h1 className='font-bold text-[#51893A] text-[15px]'>Manny D. Pacquiao</h1>
                </div>
                <div className='flex items-center'>
                    <img src={client} alt="sy" className='rounded-full w-50' />
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Testimonials