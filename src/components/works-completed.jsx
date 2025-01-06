import React from 'react'

export const WorksCompleted = () => {
  return (
    <div className='bg-colorDark flex flex-col justify-center md:flex-row ~pb-1/16 gap-8 px-10'>

      <div className="border-x-2 flex items-center border-gradient-to-br from-indigo-300 to-violet-300 rounded-full ~py-3/5 px-10">
        <h2 className='~text-4xl/6xl font-semibold text-gradient-to-br from-indigo-300 to-violet-300'>75+</h2>
        <div className='border-r-2 w-[1px] mx-4 h-[60%]'/>
        <h3 className='~text-xl/3xl text-gradient-to-br from-indigo-300 to-violet-300 '>Projects <br/>Completed</h3>
      </div>

      <div className="border-x-2 flex items-center border-gradient-to-br from-indigo-300 to-violet-300 rounded-full ~py-3/5 px-10">
        <h2 className='~text-4xl/6xl font-semibold text-gradient-to-br from-indigo-300 to-violet-300'>30+</h2>
        <div className='border-r-2 w-[1px] mx-4 h-[60%]'/>
        <h3 className='~text-xl/3xl text-gradient-to-br from-indigo-300 to-violet-300 '>Startups <br/>Developed</h3>
      </div> 

      <div className="border-x-2 flex items-center border-gradient-to-br from-indigo-300 to-violet-300 rounded-full ~py-3/5 px-10">
        <h2 className='~text-4xl/6xl font-semibold text-gradient-to-br from-indigo-300 to-violet-300'>120+</h2>
        <div className='border-r-2 w-[1px] mx-4 h-[60%]'/>
        <h3 className='~text-xl/3xl text-gradient-to-br from-indigo-300 to-violet-300 '>Happy <br/>Customers</h3>
      </div> 
    </div>
  )
}
