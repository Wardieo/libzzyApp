import React from 'react'
import app from '../asset/app.png'
import book from '../asset/books.png'
import ach1 from '../asset/logo1.jpg'
import ach2 from '../asset/logo2.jpg'
import ach3 from '../asset/logo3.jpg'
import pic1 from '../asset/urios.jpg'
import pic2 from '../asset/csu.jpg'
import pic3 from '../asset/up.png'
import pic4 from '../asset/sjit.png'
import pic5 from '../asset/nu.png'
import pic6 from '../asset/aclc.png'


const Home = () => {
    const clients = [pic1, pic2, pic3, pic4, pic5,]
  return (
    <div className='max-w-[1440px] mx-auto px-4'>
        <div className='bg-[#CAEEB9] shadow-lg h-full rounded-lg grid justify-center text-center md:flex md:justify-between relative'>
            <div className='flex flex-col px-5 gap-8 py-28 justify-center items-center md:items-start md:text-start'>
                <h1 className='font-bold md:text-[60px] lg:text-[70px] w-[400px] md:w-[500px] text-[30px]'>Track it, Read it using <span className='text-[#70B156]'>Libzzy</span></h1>
                <p className='bg-[#9ED886] md:w-[360px] w-[330px] text-[13px] md:text-[15px] rounded-full px-4'>Use <span className='text-white'>Libzzy</span> to track the book your looking</p>
                <img src={app} alt="app" width={250} className='cursor-pointer'/>
            </div>
            <div className='hidden lg:block'>
                <img src={book} alt="boo10" width={510} className='absolute right-10 bottom-0'/>
                <img src={ach1} alt="pic1" width={100} className='absolute right-[490px] animate-pulse bottom-5'/>
                <img src={ach2} alt="pic2" width={100} className='absolute right-[450px] top-5 animate-pulse'/>
                <img src={ach3} alt="pic3" width={100} className='absolute right-10 top-20 animate-pulse'/>
            </div>
        </div>
        <div className='text-center justify-center flex flex-col my-20 overflow-hidden'>
            <h1 className='text-[40px] text-[#555555] font-medium'>Our Clients</h1>
            <p className='text-[#555555] pt-5'>We have been working with some Universities & Public Libraries and over 2,300+ clients.</p>
            <div className='grid grid-cols-3 place-content-center md:flex md:justify-between items-center'>
                {clients.map((client) => (
                    <img src={client} width={79} alt='pic' className='mt-8'/>
                ))}
                <img src={pic6} alt="aclc" width={210} className='mt-8 h-16 md:h-20'/>
            </div>
        </div>
    </div>
  )
}

export default Home