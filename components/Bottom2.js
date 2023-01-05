import React from 'react'
import Link from 'next/link'

function Bottom2() {
  return (
    <div className=' bg-[#1c1e53]'>
        <div className='sm:h-[280px] flex bg-[#1c1e53] md:h-[587px] justify-center items-center border-b border-white border-opacity-10'>
        <div className='sm:h-[200px] mx-auto md:h-[420px] md:bg-gradient-to-r md:from-blue-700 sm:bg-[rgb(0,122,255)] w-3/4 rounded-2xl hover:bg-[rgb(0,122,255)]'>
           <div className=' items-center justify-center text-center sm:pt-4 md:mt-12'>
              <h1 className='md:text-[46px] font-bold text-white text-opacity-90 '>Spyx keeps everything</h1>
              <h1 className='md:text-[46px] font-bold text-white text-opacity-90 '>under control.</h1>
           </div>
           <div className='md:flex md:ml-[100px] md:w-[620px] md:items-center mt-3 md:pt-[60px] md:pl-[40px] md:justify-center'>
            <Link href='#' className='flex md:w-[230px] h-[50px] text-[18px] rounded-3xl bg-[#fcd980] items-center justify-center hover:bg-[#ecc45f] sm:w-[230px]  sm:mx-auto'>TRY NOW</Link>
            <Link href='#' className='flex md:w-[230px] h-[50px]  text-[16px] md:ml-14 text-white hover:text-blue-900 sm:w-[230px]  items-center justify-center sm:mt-2 sm:mx-auto hover:rounded-3xl hover:border-1px hover:border-blue-900 border rounded-3xl'>View Demo
            </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom2