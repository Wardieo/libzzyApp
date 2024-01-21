import React from 'react'
import dash from '../asset/dash.jpg'
const Overview = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <div className=' rounded-md px-4 bg-gradient-to-b from-white to-[#BEEAA9] h-[1000px] mb-[230px]  md:mb-[500px]'>
            <div className='relative flex flex-col items-center text-center justify-center gap-8'>
                <h1 className='font-semibold text-[40px] lg:text-[60px] w-[400px] md:w-[800px] lg:w-[990px] md:text-[50px]'>Use <span className='text-[#70B156]'>Libzzy</span> to Manage your library's books</h1>
                <p className='font-light text-[#555555] lg:w-[990px] text-[17px] lg:text-[20px]'>Dashboard platform designed to revolutionize the way libraries efficiently manage their vast collections of books, streamline statistical analysis, and generate comprehensive reports. Our platform redefines the library experience, ensuring an effortless and effective approach to book cataloging, data tracking, and report generation, thereby enhancing the overall functionality and productivity of libraries.</p>
                <button className='bg-[#232833] text-white p-3 rounded-lg hover:bg-transparent border-2 border-black hover:text-black shadow-xl duration-500 hover:translate-y-2'>Start your 7-days free trial</button>
                <img src={dash} alt="dashboard" className='border-[5px] border-black rounded-xl shadow-2xl absolute top-[500px] z-[1px]' />
            </div>
        </div>
    </div>
  )
}

export default Overview