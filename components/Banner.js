import Image from 'next/image'
import React from 'react'
import Img from '../image/1.webp'

const Banner = () => {
  return (
    <div className='md:flex bg-[#1c1e53] '>
    <div className=' md:p-16 '>
        <div className='flex text-[#fff] items-center justify-center'>
            <h1 className='text-[32px] md:text-[50px] font-semibold'>
              Robust Phone Tracker
              <br/>
              <span className='flex text-[20px] md:text-[33px] items-center justify-center md:-ml-[140px]'>without App Installation</span>
            </h1>
        </div>
        <div className='pt-6 felx mx-auto w-[450px] text-[15px] text-white text-opacity-70 md:hidden'>
          <span className='break-words leading-loose'>Spyx is the best choice for parental control and employee survelliance. It can track target iPhone without being detected.</span>
        </div>
        <div className=' text-white text-[14px] text-opacity-70 md:pt-10 sm:hidden'>
          <div className='flex items-center'>
          <img src='https://spyx.com/assets/images/icon_yes-succ.svg' className='w-[20px]'></img>
          <span className='ml-2'>Track text messages, WhatsApp and soical app’s chats.</span>
          </div>
          
          <div className='flex items-center mt-3'>
          <img src='https://spyx.com/assets/images/icon_yes-succ.svg' className='w-[20px]'></img>
          <span className='ml-2'>View photos, videos, emails, contacts, call logs.</span>
          </div>
          
          <div className='flex items-center mt-3'>
          <img src='https://spyx.com/assets/images/icon_yes-succ.svg' className='w-[20px]'></img>
          <span className='ml-2'>Track current GPS locations and location history.</span>
          </div>
          
          <div className='flex items-center mt-3'>
          <img src='https://spyx.com/assets/images/icon_yes-succ.svg' className='w-[20px]'></img>
          <span className='ml-2'>No access to target device, 100% safe without being detected.</span>
          </div>
          
          <div  className='flex items-center mt-3'>
          <img src='https://spyx.com/assets/images/icon_yes-succ.svg' className='w-[20px]'></img>
          <span className='ml-2'>Monitor updated content 24/7 remotely and secretly.</span>
          </div>
          
        </div> 
        <div className='md:flex md:items-center mt-3 md:pt-[140px] md:pl-[40px] sm:pt-4'>
            <a href='#' className='flex md:w-[230px] h-[50px] sm:w-[400px] sm:mx-auto text-[16px] rounded-3xl bg-[#fcd980] items-center justify-center hover:bg-[#ecc45f]'>TRY NOW</a>
            <a href='#' className='flex h-[50px]  text-[15px] md:ml-14 text-white hover:text-[#e5bd5a] items-center justify-center'>View Demo</a>
        </div>
        
    </div>
    <div className="md:flex md:mt-[60px] md:pl-[80px] h-[510px]">
    <Image src={Img} />
    </div>
    </div>
  )
}

export default Banner