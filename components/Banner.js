<<<<<<< HEAD
import Image from 'next/image'
import React from 'react'
import Img from '../image/1.webp'
import Icon from '../image/icon.svg'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

const Banner = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <div className='md:flex bg-[#1c1e53] '>
    <div className=' md:p-16 '>
        <div className='flex text-[#fff] items-center justify-center sm:pt-10'>
            <h1 className='text-[32px] md:text-[50px] font-semibold'>
              Robust Phone Tracker
              <br/>
              <span className='flex text-[20px] md:text-[33px] items-center justify-center md:-ml-[140px]'>without App Installation</span>
            </h1>
        </div>
        <div className='pt-6 felx mx-auto sm:text-center  text-[15px] text-white text-opacity-70 md:hidden w-wull'>
          <span className='break-words leading-loose '>Spyx is the best choice for parental control and employee survelliance. It can track target iPhone without being detected.</span>
        </div>
        <div className=' text-white text-[14px] text-opacity-70 md:pt-10 sm:hidden'>
          <div className='flex items-center'>
          <Image src={Icon} className='w-[20px]' alt=''></Image>
          <span className='ml-2'>Track text messages, WhatsApp and soical apps chats.</span>
          </div>
          
          <div className='flex items-center mt-3'>
          <Image src={Icon}  className='w-[20px]' alt=''></Image>
          <span className='ml-2'>View photos, videos, emails, contacts, call logs.</span>
          </div>
          
          <div className='flex items-center mt-3'>
          <Image src={Icon}  className='w-[20px]' alt=''></Image>
          <span className='ml-2'>Track current GPS locations and location history.</span>
          </div>
          
          <div className='flex items-center mt-3'>
          <Image src={Icon}  className='w-[20px]' alt=''></Image>
          <span className='ml-2'>No access to target device, 100% safe without being detected.</span>
          </div>
          
          <div  className='flex items-center mt-3'>
          <Image src={Icon}  className='w-[20px]' alt=''></Image>
          <span className='ml-2'>Monitor updated content 24/7 remotely and secretly.</span>
          </div>
          
        </div> 
        <div className='md:flex md:items-center mt-3 md:pt-[140px] md:pl-[40px] sm:pt-4'>
            <Link href={`${auth.isLogged===false?'/signup':'/pricing'}`} className='flex md:w-[230px] h-[50px] sm:w-[200px] sm:mx-auto text-[16px] rounded-3xl bg-[#fcd980] items-center justify-center hover:bg-[#ecc45f]'>TRY NOW</Link>
            <Link href={`${auth.isLogged===false?'/signup':'/pricing'}`} className='flex h-[50px]  text-[15px] md:ml-14 text-white hover:text-[#e5bd5a] items-center justify-center'>View Demo</Link>
        </div>
        
    </div>
    <div className="md:flex md:mt-[60px] md:pl-[80px] h-[510px] sm:flex justify-center">
    <Image src={Img} alt="1"/>
    </div>
    </div>
  )
}

=======
import Image from 'next/image'
import React from 'react'
import Img from '../image/1.webp'
import Icon from '../image/icon.svg'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

const Banner = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <div className='md:flex bg-[#1c1e53] '>
    <div className=' md:p-16 '>
        <div className='flex text-[#fff] items-center justify-center sm:pt-10'>
            <h1 className='text-[32px] md:text-[50px] font-semibold'>
              Robust Phone Tracker
              <br/>
              <span className='flex text-[20px] md:text-[33px] items-center justify-center md:-ml-[140px]'>without App Installation</span>
            </h1>
        </div>
        <div className='pt-6 felx mx-auto sm:text-center  text-[15px] text-white text-opacity-70 md:hidden w-wull'>
          <span className='break-words leading-loose '>Spyx is the best choice for parental control and employee survelliance. It can track target iPhone without being detected.</span>
        </div>
        <div className=' text-white text-[14px] text-opacity-70 md:pt-10 sm:hidden'>
          <div className='flex items-center'>
          <Image src={Icon} className='w-[20px]' alt=''></Image>
          <span className='ml-2'>Track text messages, WhatsApp and soical apps chats.</span>
          </div>
          
          <div className='flex items-center mt-3'>
          <Image src={Icon}  className='w-[20px]' alt=''></Image>
          <span className='ml-2'>View photos, videos, emails, contacts, call logs.</span>
          </div>
          
          <div className='flex items-center mt-3'>
          <Image src={Icon}  className='w-[20px]' alt=''></Image>
          <span className='ml-2'>Track current GPS locations and location history.</span>
          </div>
          
          <div className='flex items-center mt-3'>
          <Image src={Icon}  className='w-[20px]' alt=''></Image>
          <span className='ml-2'>No access to target device, 100% safe without being detected.</span>
          </div>
          
          <div  className='flex items-center mt-3'>
          <Image src={Icon}  className='w-[20px]' alt=''></Image>
          <span className='ml-2'>Monitor updated content 24/7 remotely and secretly.</span>
          </div>
          
        </div> 
        <div className='md:flex md:items-center mt-3 md:pt-[140px] md:pl-[40px] sm:pt-4'>
            <Link href={`${auth.isLogged===false?'/signup':'/pricing'}`} className='flex md:w-[230px] h-[50px] sm:w-[200px] sm:mx-auto text-[16px] rounded-3xl bg-[#fcd980] items-center justify-center hover:bg-[#ecc45f]'>TRY NOW</Link>
            <Link href={`${auth.isLogged===false?'/signup':'/pricing'}`} className='flex h-[50px]  text-[15px] md:ml-14 text-white hover:text-[#e5bd5a] items-center justify-center'>View Demo</Link>
        </div>
        
    </div>
    <div className="md:flex md:mt-[60px] md:pl-[80px] h-[510px] sm:flex justify-center">
    <Image src={Img} alt="1"/>
    </div>
    </div>
  )
}

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default Banner