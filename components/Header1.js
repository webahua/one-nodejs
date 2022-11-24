import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../image/logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faRegular} from '@fortawesome/free-regular-svg-icons'
import {faEarth} from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner'
function Header() {
  return (
    <>
    <div className='fixed md:h-[96px] bg-[#1c1e53] '>
      <div className='md:flex h-full md:h-[96px] items-center justify-between mx-auto py-9 '>
        <a href='#' className='flex '><Image src={Logo} className="md:h-[1.9rem] h-[1.5rem]" alt="logo"></Image></a>

        <nav className='md:flex ml-8'>
          <div className=''>
            <ul className='md:flex md:items-center'>
                <li className='md:flex w-full h-6 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                  <a href='#' className='flex'>
                  Features
                  <img className='ml-[10px] ' src='https://spyx.com/assets/images/nav-down.svg'></img>
                  </a>
                </li>
                <li className='flex w-[100px] h-[50px] items-center text-[16px] text-[#bbbbcb] justify-center hover:bg-white hover:text-black rounded-md'>
                <a href='#' className='flex'>
                  Demo
                </a>
                </li>
                <li className='flex w-[100px] h-[50px] items-center text-[16px] text-[#bbbbcb] justify-center hover:bg-white hover:text-black rounded-md'>
                <a href='#' className='flex'>
                  Support
                  <img className='ml-[10px]' src='https://spyx.com/assets/images/nav-down.svg'></img>
                </a>
                </li>
                <li className='flex w-[100px] h-[50px] items-center text-[16px] text-[#bbbbcb] justify-center hover:bg-white hover:text-black rounded-md'>
                <a href='#' className='flex'>  
                  Pricing
                </a>
                </li>
                <li className='flex md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center hover:bg-white hover:text-black md:rounded-md'>
                <a href='#' className='flex'>
                  Blog
                  <img className='ml-[10px]' src='https://spyx.com/assets/images/nav-down.svg'></img>
                </a>
                </li>
                <li className='flex w-[100px] h-[50px] items-center text-[16px] text-[#bbbbcb] justify-center hover:bg-white hover:text-black rounded-md'>
                <a href='#' className='flex items-center'>
                  <FontAwesomeIcon icon={faUser} className="mr-[5px]" />
                  Login
                  </a>
                </li>
                <li className='flex w-[100px] h-[50px] items-center text-[17px] text-[#bbbbcb] justify-center hover:bg-white hover:text-black rounded-md'>
                <a href='#' className='flex items-center'>
                  <FontAwesomeIcon icon={faEarth} className="mr-[8px]" />
                  EN
                </a>
                </li>
            </ul>
          </div>
          <div className='flex ml-[35px] w-[129px] h-[45px] text-white items-center text-[14px] rounded-3xl border-[1px] border-white border-opacity-30 hover:bg-[#fcd980] hover:text-black'>
            <a href='#' className='mx-auto'>111TRY NOW</a>
          </div>
        </nav>
      </div>
    </div>
    <Banner/>
    </>
  )
}

export default Header