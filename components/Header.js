import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../image/logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faRegular} from '@fortawesome/free-regular-svg-icons'
import {faEarth,faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner'
const Header = () => {
  const [open,setOpen] = useState(true)
  const openul = () => {
    if(open===false){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }
  return (
    <>
    <div className=' h-[96px]  '>
      <div className='flex w-full fixed h-[96px] items-center justify-between bg-[#1c1e53] z-10'>
        <a href='#' className='-ml-4 md:ml-6'><Image src={Logo} className="h-[1.5rem] md:h-[1.9rem]" alt="logo"></Image></a>
        <a href='#' className='md:hidden'>
          <div className='flex w-[100px] h-[30px] text-[#fcd980] rounded-2xl items-center justify-center border border-[#fcd980] ml-[100px]'>TRY NOW</div>
        </a>
        <FontAwesomeIcon onClick={openul} icon={faBars} className="w-20 h-7 text-white md:hidden"/>
        <nav className={`${open===false ? 'sm:hidden' : 'md:flex pl-4  absolute md:px-0 md:pb-0 pb-10 md:static  md:w-auto w-full bg-[#1c1e53] top-[70px] duration-700 ease-in'}`}>
          <div className=''>
            <ul className='md:flex md:items-center '>
                <li className='md:hidden w-full py-4 h-2 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                  <a href='#' className='flex'>
                  Home
                  </a>
                </li>
                <li className='md:flex  w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                  <a href='#' className='flex'>
                  Features
                  <img src='https://spyx.com/assets/images/nav-down.svg' className="ml-[10px] pl-2 sm:hidden"></img>
                  </a>
                  <ul className='sm:hidden absolute mt-[270px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[50px] rounded-md invisible md:shadow-2xl'>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts dfd</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contactsdsf</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts sfsdf</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>
                  </ul>
                </li>
                <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                <a href='#' className='flex'>
                  Demo
                </a>
                </li>
                <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                <a href='#' className='flex'>
                  Support
                  <img src='https://spyx.com/assets/images/nav-down.svg' className="ml-[10px] pl-2 sm:hidden"></img>
                </a>
                <ul className='sm:hidden md:shadow-2xl absolute mt-[270px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[50px] rounded-md invisible'>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts edvd</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts fv</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts fff</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>
                  </ul>
                </li>
                <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                <a href='#' className='flex'>  
                  Pricing
                </a>
                </li>
                <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                <a href='#' className='flex'>
                  Blog
                  <img src='https://spyx.com/assets/images/nav-down.svg' className="ml-[10px] pl-2 sm:hidden"></img>
                </a>
                <ul className='sm:hidden md:shadow-2xl absolute mt-[270px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[50px] rounded-md invisible'>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts ewe</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts dd</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>
                    <li className='mt-4 ml-4 hover:text-blue-400'><a href='#'>Contacts</a></li>

                  </ul>
                </li>
                <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                <a href='#' className='flex items-center'>
                  <FontAwesomeIcon icon={faUser} className="mr-[5px] sm:hidden" />
                  Login
                  </a>
                </li>
                <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                <a href='#' className='flex items-center'>
                  <FontAwesomeIcon icon={faEarth} className="mr-[8px] sm:hidden" />
                  EN
                </a>
                </li>
            </ul>
          </div>
          <div className='sm:mt-6  md:mr-14 md:flex w-[130px]  h-[45px] md:ml-8 items-center text-[14px] text-white md:justify-center hover:bg-[#fcd980] border-[1px] border-opacity-30 border-white hover:text-black rounded-3xl '>
            <a href='#' className='flex justify-center sm:mt-3'>TRY NOW</a>     
          </div>
        </nav>
      </div>
    </div>
    <Banner/>
    </>
  )
}

export default Header