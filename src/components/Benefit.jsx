import React from 'react'
import approve from '../asset/Approval.png'
import stats from '../asset/stats.jpg'

const Benefit = () => {
    const benefits = [{
        title: 'Disaster Recovery and Redundancy',
        description: "Libzzy solution often include built-in disaster recovery and redundancy mechanisms, ensuring that your library's data is safe",
    },{
        title: 'Sustainability',
        description: "By adopting Libzzy services, libraries can reduce their environmental footprint, as they require fewer physical servers and infrastructure, contributing to a more sustainable future."
    },{
        title: 'Collaborative Tools',
        description: "This can lead to improved resource management and a more responsive approach to user needs."
    },{
        title: 'Data Analytics and Insights',
        description: "We provide powerful data analytics tools, helping you gain deep insights into library usage, popular resources, and user behavior."
    }

]
  return (
    <div className='max-w-[1440px] mx-auto '>
        <div className='mt-16 h-full px-4'>
                <h1 className='font-semibold text-[30px] md:text-[40px] lg:text-[60px] lg:w-[900px] mx-auto text-center'>Here's how <span className='text-[#70B156]'>Libzzy</span> can benefit your library</h1>
                <div className='flex justify-between items-center gap-10'>
                    <div className='mt-4 md:w-[60%] grid grid-cols-2 md:flex flex-col'>
                        {benefits.map((benefit, index) => (
                            <div key={index} className=''>
                                <div className='flex items-center gap-3'>
                                    <img src={approve} alt="approve" className='w-10'/>
                                    <h1 className='font-semibold'>{benefit.title}</h1>
                                </div>
                                <p className='text-[#555555] ml-14 text-sm'>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                    <img src={stats} alt="stat" className='hidden md:flex w-[260px] lg:w-[560px] md:w-[360px]'/>
                </div>
        </div>
    </div>
  )
}

export default Benefit