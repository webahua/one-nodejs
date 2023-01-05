<<<<<<< HEAD
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../image/logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faRegular} from '@fortawesome/free-regular-svg-icons'
import {faEarth,faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import Img from '../image/13.svg'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../lib/authSlice'
import  Router, { useRouter } from 'next/router'

const Header = ({show,onci,onci2,onci3}) => {
  const router = useRouter();
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [open,setOpen] = useState(true)
  const openul = () => {
    if(open===false){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }

  const logou = () => {
    dispatch(logout())
    router.push('/login')
  }
  return (
    <>
    <div className=' h-[96px]  '>
      <div className='flex w-full fixed h-[96px] items-center justify-between bg-[#1c1e53] z-10'>
        <Link href='/' className='-ml-4 md:ml-6'><Image src={Logo} className="h-[1.5rem] md:h-[1.9rem]" alt=""></Image></Link>
        {show === false ?
        <></>
         :
         <>
                         <Link href='/' className='md:hidden'>
                <div className='flex w-[100px] h-[30px] text-[#fcd980] rounded-2xl items-center justify-center border border-[#fcd980] ml-[100px]'>TRY NOW</div>
              </Link>
              <FontAwesomeIcon onClick={openul} icon={faBars} className="w-20 h-7 text-white md:hidden"/>
              <nav className={`${open===false ? 'sm:hidden' : 'md:flex pl-4  absolute md:px-0 md:pb-0 pb-10 md:static  md:w-auto w-full bg-[#1c1e53] top-[70px] duration-700 ease-in'}`}>
                <div className=''>
                  <ul className='md:flex md:items-center '>
                      <li className='md:hidden w-full py-4 h-2 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                        <Link href='/' className='flex'>
                        Home
                        </Link>
                      </li>
                      <li className='md:flex  w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                        <Link href='/' className='flex'>
                        Features
                        <Image alt='' src={Img} className="w-5 ml-[10px] pl-2 sm:hidden"></Image>
                        </Link>
                        <ul className='sm:hidden absolute mt-[270px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[50px] rounded-md invisible md:shadow-2xl'>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts dfd</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contactsdsf</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts sfsdf</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts</Link></li>
                        </ul>
                      </li>
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='#' className='flex'>
                        Demo
                      </Link>
                      </li>
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='#' className='flex'>
                        Support
                        <Image alt='' src={Img} className="w-5 ml-[10px] pl-2 sm:hidden"></Image>
                      </Link>
                      <ul className='sm:hidden md:shadow-2xl absolute mt-[270px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[50px] rounded-md invisible'>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts edvd</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts fv</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts fff</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Contacts</Link></li>
                        </ul>
                      </li>
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='/' className='flex'>  
                        Pricing
                      </Link>
                      </li>
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='/' className='flex'>
                        Blog
                        <Image alt='' src={Img} className="w-5 ml-[10px] pl-2 sm:hidden"></Image>
                      </Link>
                      <ul className='sm:hidden md:shadow-2xl absolute mt-[270px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[50px] rounded-md invisible'>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts ewe</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts dd</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
      
                        </ul>
                      </li>
                      {auth.isLogged === false ?
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='/login' className='flex items-center'>
                        <FontAwesomeIcon icon={faUser} className="mr-[5px] sm:hidden" />
                        Login
                        </Link>
                      </li>
                      :
                      <li className='md:flex w-full py-6 h-4 md:w-[190px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='/' className='flex items-center'>
                       {auth.user.email}
                      </Link>
                      <ul className='sm:hidden md:shadow-2xl absolute mt-[160px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[40px] rounded-md invisible'>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='/'>Change Password</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href=''>Contact Us</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400' onClick={logou}><p>Logout</p></li>
      
                        </ul>
                      </li>
      }
      
      
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='/' className='flex items-center'>
                        <FontAwesomeIcon icon={faEarth} className="mr-[8px] sm:hidden" />
                        EN
                      </Link>
                      </li>
      
                  </ul>
                </div>
                <div className='sm:mt-6  md:mr-14 md:flex w-[130px]  h-[45px] md:ml-8 items-center text-[14px] text-white md:justify-center hover:bg-[#fcd980] border-[1px] border-opacity-30 border-white hover:text-black rounded-3xl '>
                  <Link href={`${auth.isLogged===false?'/signup':'/pricing'}`} className='flex justify-center sm:mt-3'>TRY NOW</Link>     
                </div>
              </nav>
         </>
        }

      </div>
    </div>
    
    </>
  )
}

=======
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../image/logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faRegular} from '@fortawesome/free-regular-svg-icons'
import {faEarth,faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import Img from '../image/13.svg'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../lib/authSlice'
import  Router, { useRouter } from 'next/router'

const Header = ({show,onci,onci2,onci3}) => {
  const router = useRouter();
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [open,setOpen] = useState(true)
  const openul = () => {
    if(open===false){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }

  const logou = () => {
    dispatch(logout())
    router.push('/login')
  }
  return (
    <>
    <div className=' h-[96px]  '>
      <div className='flex w-full fixed h-[96px] items-center justify-between bg-[#1c1e53] z-10'>
        <Link href='/' className='-ml-4 md:ml-6'><Image src={Logo} className="h-[1.5rem] md:h-[1.9rem]" alt="logo"></Image></Link>
        {show === false ?
        <></>
         :
         <>
                         <Link href='#' className='md:hidden'>
                <div className='flex w-[100px] h-[30px] text-[#fcd980] rounded-2xl items-center justify-center border border-[#fcd980] ml-[100px]'>TRY NOW</div>
              </Link>
              <FontAwesomeIcon onClick={openul} icon={faBars} className="w-20 h-7 text-white md:hidden"/>
              <nav className={`${open===false ? 'sm:hidden' : 'md:flex pl-4  absolute md:px-0 md:pb-0 pb-10 md:static  md:w-auto w-full bg-[#1c1e53] top-[70px] duration-700 ease-in'}`}>
                <div className=''>
                  <ul className='md:flex md:items-center '>
                      <li className='md:hidden w-full py-4 h-2 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                        <Link href='#' className='flex'>
                        Home
                        </Link>
                      </li>
                      <li className='md:flex  w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                        <Link href='#' className='flex'>
                        Features
                        <Image alt='' src={Img} className="w-5 ml-[10px] pl-2 sm:hidden"></Image>
                        </Link>
                        <ul className='sm:hidden absolute mt-[270px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[50px] rounded-md invisible md:shadow-2xl'>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts dfd</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contactsdsf</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts sfsdf</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                        </ul>
                      </li>
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='#' className='flex'>
                        Demo
                      </Link>
                      </li>
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='#' className='flex'>
                        Support
                        <Image alt='' src={Img} className="w-5 ml-[10px] pl-2 sm:hidden"></Image>
                      </Link>
                      <ul className='sm:hidden md:shadow-2xl absolute mt-[270px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[50px] rounded-md invisible'>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts edvd</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts fv</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts fff</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                        </ul>
                      </li>
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='#' className='flex'>  
                        Pricing
                      </Link>
                      </li>
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='#' className='flex'>
                        Blog
                        <Image alt='' src={Img} className="w-5 ml-[10px] pl-2 sm:hidden"></Image>
                      </Link>
                      <ul className='sm:hidden md:shadow-2xl absolute mt-[270px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[50px] rounded-md invisible'>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts ewe</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts dd</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contacts</Link></li>
      
                        </ul>
                      </li>
                      {auth.isLogged===false ?
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href={'/login'} className='flex items-center'>
                        <FontAwesomeIcon icon={faUser} className="mr-[5px] sm:hidden" />
                        Login
                        </Link>
                      </li>
                      :
                      <li className='md:flex w-full py-6 h-4 md:w-[190px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='#' className='flex items-center'>
                       {auth.user.email}
                      </Link>
                      <ul className='sm:hidden md:shadow-2xl absolute mt-[160px] bg-[#fff] text-[14px] text-[#252525] w-[150px] ml-[40px] rounded-md invisible'>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Change Password</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400'><Link href='#'>Contact Us</Link></li>
                          <li className='mt-4 ml-4 hover:text-blue-400' onClick={logou}><Link href='#'>Logout</Link></li>
      
                        </ul>
                      </li>
      }
      
      
                      <li className='md:flex w-full py-6 h-4 md:w-[100px] md:h-[50px] items-center text-[16px] text-[#bbbbcb] md:justify-center md:hover:bg-white md:hover:text-black rounded-md hover:text-white'>
                      <Link href='#' className='flex items-center'>
                        <FontAwesomeIcon icon={faEarth} className="mr-[8px] sm:hidden" />
                        EN
                      </Link>
                      </li>
      
                  </ul>
                </div>
                <div className='sm:mt-6  md:mr-14 md:flex w-[130px]  h-[45px] md:ml-8 items-center text-[14px] text-white md:justify-center hover:bg-[#fcd980] border-[1px] border-opacity-30 border-white hover:text-black rounded-3xl '>
                  <Link href={`${auth.isLogged===false?'/signup':'/pricing'}`} className='flex justify-center sm:mt-3'>TRY NOW</Link>     
                </div>
              </nav>
         </>
        }

      </div>
    </div>
    
    </>
  )
}

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default Header