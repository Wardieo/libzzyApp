import React from 'react'
import ok from '../asset/Ok.png'
import white from '../asset/white.jpg'
const Pricing = () => {
  const services = [
    {
      title: 'Admin Dashboard',
      standard: ok,
      professional: ok,
      custom: ok
    },
    {
      title: 'Resource Availability',
      standard: ok,
      professional: ok,
      custom: ok
    },
    {
      title: 'User Support',
      standard: ok,
      professional: ok,
      custom: ok,
    },
    {
      title: 'API Access',
      standard: ok,
      professional: ok,
      custom: ok
    },
    {
      title: 'Advanced Catalog Management',
      standard: ok,
      professional: ok,
      custom: ok
    },
    {
      title: 'Comprehensive Reporting and Analytics',
      standard: ok,
      professional: ok,
      custom: ok
    },
    {
      title: 'Maximum of 5000 books to Store in Cloud',
      standard: ok,
      professional: ok,
      custom: ok
    },
    {
      title: 'Maximum of 7000 books to Store in Cloud',
      standard: white,
      professional: ok,
      custom: ok
    },
    {
      title: 'Customize storage limit',
      standard: white,
      professional: white,
      custom: ok,
    }
  ]
  return (
    <div className='max-w-[1440px] mx-auto px-4 h-full mt-28'>
      <div className='flex text-center items-center gap-3 justify-center flex-col'>
        <h1 className='text-[50px] font-semibold'>Plan & Pricing</h1>
        <p className='w-[500px] text-[#555555]'>Straightforward Pricing with No Concealed Charges. Pricing for Advanced Features Tailored to Meet Your Library's Needs.</p>
      </div>
        <div className='grid gap-10 md:flex items-center justify-around my-16'>
            <div className='bg-[#FBFBFB] drop-shadow-lg rounded-lg py-7 px-6 text-[#737373] w-80 gap-4  flex flex-col hover:-translate-y-1 duration-500'>
              <h2 className='text-[14px] md:text-[16px]'>Standard</h2>
              <h1 className='font-semibold text-[40px] md:text-[50px]'>$ 89 <span className='font-normal text-[13px]'>/ month</span></h1>
              <p className='text-[11px] text-center w-36 mx-auto'>Ideal for small or starting library</p>
              <div className='text-center border-t-2 pt-5'>
                <button className='bg-[#8BB876] px-5 py-2 text-white text-[12px] rounded-md hover:bg-[#618052] duration-300'>Start your 7-days free trial</button>
              </div>
            </div>
            <div className='bg-[#8BB876] drop-shadow-lg rounded-lg py-7 px-6 text-white w-80 gap-4  flex flex-col hover:-translate-y-1 duration-500'>
              <div className='flex justify-between items-center gap-2'>
                <h2 className='text-[14px] md:text-[16px]'>Professional</h2>
                <p className='text-[8px] md:text-[10px] bg-[#44474B] px-4 py-1 rounded-[4px]'>Popular</p>
              </div>
              <h1 className='font-semibold text-[40px] md:text-[50px]'>$ 129 <span className='font-normal text-[13px]'>/ month</span></h1>
              <p className='text-[11px] text-center w-36 mx-auto'>Everything you need for growing library</p>
              <div className='text-center border-t-2 pt-5'>
                <button className='bg-white px-5 py-2 text-[#6D6A6A] text-[12px] rounded-md hover:bg-[#dae1d6] duration-300'>Start your 7-days free trial</button>
              </div>
            </div>
            <div className='bg-[#FBFBFB] drop-shadow-lg rounded-lg py-7 px-6 text-[#737373] w-80 gap-4  flex flex-col hover:-translate-y-1 duration-500'>
              <h2 className='text-[14px] md:text-[16px]'>Custom</h2>
              <h1 className='font-semibold text-[40px] md:text-[50px]'>Contact</h1>
              <p className='text-[11px] text-center w-44 mx-auto'>Special Customization services and unlimited featured</p>
              <div className='text-center border-t-2 pt-5'>
                <button className='bg-[#8BB876] px-5 py-2 text-white text-[12px] rounded-md hover:bg-[#618052] duration-300'>Start your 7-days free trial</button>
              </div>
            </div>  
        </div>
        <div className=''>
          <div className='flex justify-between text-[#737373] text-[15px] md:text-[17px] lg:text-[20px] font-bold border-b-2 pb-5'>
            <h2 className=''>Libbzy Services</h2>
            <div className='flex text-center justify-end gap-5 md:gap-20 lg:gap-32 '>
              <h2>Standard</h2>
              <h2>Professional</h2>
              <h2>Custom</h2>
            </div>
          </div>
          <div className='my-6'>
            {services.map((service => (
              <div className='flex py-5 justify-between text-[#10670E] text-[20px] items-center font-semibold'>
                <h2 className='text-[13px] md:text-[15px] lg:text-[17px] font-medium'>{service.title}</h2>
                <div className='flex text-center justify-end w-5 md:w-7 lg:w-9 gap-20 md:gap-36 lg:gap-52 mx-3'>
                  <img src={service.standard} alt="standard"  />
                  <img src={service.professional} alt="pro" />
                  <img src={service.custom} alt="custom" />
                </div>
              </div>
            )))}
          </div>
        </div>
    </div>
  )
}

export default Pricing