<<<<<<< HEAD
import React, { useRef } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Img from '../image/14.svg'
import Img2 from '../image/15.svg'
import Img3 from '../image/16.webp'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTriangle} from '@fortawesome/free-regular-svg-icons'

const BroductSteps = () => {
    const [n1,setN1] = useState(false)
    const [n2,setN2] = useState(false)
    const [n3,setN3] = useState(false)

    const mou = useRef()

    const N1handled = () => {
        setN1(false)
        setN3(false)
        setN2(false)
    }
    const N2handled = () => {
        
        setN1(true)
        setN3(false)
        setN2(true)
    }
    const N3handled = () => {
        setN1(true)
        setN3(true)
        setN2(false)
    }
  return (
  <div className='bg-[#f4f6fc]'>
    <div className='w-11/12 mx-auto bg-[#f4f6fc]'>
        <div className='md:text-[45px] font-bold text-center md:pt-[60px] sm:text-[30px] sm:pt-10'>
            <h1>
            3 Steps to Spy on iPhone with Spyx
            </h1>
            
        </div>

        <div className='flex pt-14 '>
            
            <div className='md:w-2/5 sm:w-full  grid gap-3 gap-y-5 sm:gap-y-20 sm:items-center sm:justify-center' >
                <div>
                    <div onClick={N1handled}  className={`${n1 === false ? ' text-white sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl bg-blue-500 pt-2 pl-6 sm:text-[12px] rounded-xl': 'sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl pt-2 pl-6 sm:text-[12px] hover:bg-blue-400 hover:text-white sm:bg-[#dfeaf3] sm:rounded-xl'}`}>
                        <div className='flex text-center py-4 '>
                            <h1 className={`${n1 === false ? 'flex w-[60px] h-[35px] bg-[#ffad3c] justify-center items-center rounded-xl' :'flex w-[60px] h-[35px]  justify-center items-center rounded-xl bg-blue-500 '}`}>Step 1</h1>
                            <h1 className=' md:text-[26px] sm:text-[20px] ml-6'>Create an Account</h1>
                            <br/>
                        </div>
                        <div>
                        <span className={`${n1 === false ? ' text-white ' : ' text-black text-opacity-80'}`}>It will take you few seconds to sign up Spyx free with an email.</span>
                        </div>
                    </div>
                    
                </div>

                <div className=''>
                    <div onClick={N2handled}  className={`${n2 === true ? ' text-white sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl bg-blue-500 pt-2 pl-6 sm:text-[12px] rounded-xl': 'sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl pt-2 pl-6 sm:text-[12px] hover:bg-blue-400 hover:text-white sm:bg-[#dfeaf3] sm:rounded-xl'}`}>
                        <div className='flex text-center py-4 '>
                            <h1 className={`${n2 === true ? 'flex w-[60px] h-[35px] bg-[#ffad3c] justify-center items-center rounded-xl' :'flex w-[60px] h-[35px]  justify-center items-center rounded-xl bg-blue-500 '}`}>Step 2</h1>
                            <h1 className=' md:text-[26px] sm:text-[20px] ml-6'>Choose Your Plan</h1>
                            <br/>
                        </div>
                        <div>
                        <span className={`${n2 === true ? ' text-white ' : ' text-black text-opacity-80'}`}>No App download. Just choose your suitable monthly plan.</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div onClick={N3handled}  className={`${n3 === true ? ' text-white sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl bg-blue-500 pt-2 pl-6 sm:text-[12px] rounded-xl': 'sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl pt-2 pl-6 sm:text-[12px] hover:bg-blue-400 hover:text-white sm:bg-[#dfeaf3] sm:rounded-xl'}`}>
                        <div className='flex text-center py-4 '>
                            <h1 className={`${n3 === true ? 'flex w-[60px] h-[35px] bg-[#ffad3c] justify-center items-center rounded-xl' :'flex w-[60px] h-[35px]  justify-center items-center rounded-xl bg-blue-500 '}`}>Step 3</h1>
                            <h1 className=' md:text-[26px] sm:text-[20px] ml-6'>Spy on Phone</h1>
                            <br/>
                        </div>
                        <div>
                        <span className={`${n3 === true ? ' text-white ' : ' text-black text-opacity-80'}`}>Login and monitor the target device from the Spyx dashboard.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-5/6 relative sm:flex sm:items-center justify-center md:pt-8 md:pl-14'>
                <div className={`${n1 === false ? 'absolute sm:hidden' : 'absolute hidden'}`} >
                    <Image src={Img} alt='' />
                </div>
                <div className={`${n2 === false ? 'absolute hidden' : 'absolute sm:hidden'}`} >
                    <Image src={Img2} alt=''  />
             </div>
            <div className={`${n3 === false ? 'absolute hidden' : 'absolute sm:hidden'}`}>
                    <Image src={Img3} alt=''  />
            </div>
            </div>
        </div>
        <div className='sm:mt-10 flex md:w-[300px] md:h-[200px] sm:h-[80px] mx-auto items-center '>
                <a href='#' className='sm:w-[300px] flex mx-auto  md:w-[350px] bg-[#fcd980] hover:bg-[#e7c56f] h-[50px] rounded-3xl text-[12px] items-center justify-center'>Choose the Best Plan for You </a>
        </div>

    </div>
    </div>
  )
}

=======
import React, { useRef } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Img from '../image/14.svg'
import Img2 from '../image/15.svg'
import Img3 from '../image/16.webp'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTriangle} from '@fortawesome/free-regular-svg-icons'

const BroductSteps = () => {
    const [n1,setN1] = useState(false)
    const [n2,setN2] = useState(false)
    const [n3,setN3] = useState(false)

    const mou = useRef()

    const N1handled = () => {
        setN1(false)
        setN3(false)
        setN2(false)
    }
    const N2handled = () => {
        
        setN1(true)
        setN3(false)
        setN2(true)
    }
    const N3handled = () => {
        setN1(true)
        setN3(true)
        setN2(false)
    }
  return (
  <div className='bg-[#f4f6fc]'>
    <div className='w-11/12 mx-auto bg-[#f4f6fc]'>
        <div className='md:text-[45px] font-bold text-center md:pt-[60px] sm:text-[30px] sm:pt-10'>
            <h1>
            3 Steps to Spy on iPhone with Spyx
            </h1>
            
        </div>

        <div className='flex pt-14 '>
            
            <div className='md:w-2/5 sm:w-full  grid gap-3 gap-y-5 sm:gap-y-20 sm:items-center sm:justify-center' >
                <div>
                    <div onClick={N1handled}  className={`${n1 === false ? ' text-white sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl bg-blue-500 pt-2 pl-6 sm:text-[12px] rounded-xl': 'sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl pt-2 pl-6 sm:text-[12px] hover:bg-blue-400 hover:text-white sm:bg-[#dfeaf3] sm:rounded-xl'}`}>
                        <div className='flex text-center py-4 '>
                            <h1 className={`${n1 === false ? 'flex w-[60px] h-[35px] bg-[#ffad3c] justify-center items-center rounded-xl' :'flex w-[60px] h-[35px]  justify-center items-center rounded-xl bg-blue-500 '}`}>Step 1</h1>
                            <h1 className=' md:text-[26px] sm:text-[20px] ml-6'>Create an Account</h1>
                            <br/>
                        </div>
                        <div>
                        <span className={`${n1 === false ? ' text-white ' : ' text-black text-opacity-80'}`}>It will take you few seconds to sign up Spyx free with an email.</span>
                        </div>
                    </div>
                    
                </div>

                <div className=''>
                    <div onClick={N2handled}  className={`${n2 === true ? ' text-white sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl bg-blue-500 pt-2 pl-6 sm:text-[12px] rounded-xl': 'sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl pt-2 pl-6 sm:text-[12px] hover:bg-blue-400 hover:text-white sm:bg-[#dfeaf3] sm:rounded-xl'}`}>
                        <div className='flex text-center py-4 '>
                            <h1 className={`${n2 === true ? 'flex w-[60px] h-[35px] bg-[#ffad3c] justify-center items-center rounded-xl' :'flex w-[60px] h-[35px]  justify-center items-center rounded-xl bg-blue-500 '}`}>Step 2</h1>
                            <h1 className=' md:text-[26px] sm:text-[20px] ml-6'>Choose Your Plan</h1>
                            <br/>
                        </div>
                        <div>
                        <span className={`${n2 === true ? ' text-white ' : ' text-black text-opacity-80'}`}>No App download. Just choose your suitable monthly plan.</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div onClick={N3handled}  className={`${n3 === true ? ' text-white sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl bg-blue-500 pt-2 pl-6 sm:text-[12px] rounded-xl': 'sm:w-[400px] sm:h-[120px] h-[150px] hover:rounded-xl pt-2 pl-6 sm:text-[12px] hover:bg-blue-400 hover:text-white sm:bg-[#dfeaf3] sm:rounded-xl'}`}>
                        <div className='flex text-center py-4 '>
                            <h1 className={`${n3 === true ? 'flex w-[60px] h-[35px] bg-[#ffad3c] justify-center items-center rounded-xl' :'flex w-[60px] h-[35px]  justify-center items-center rounded-xl bg-blue-500 '}`}>Step 3</h1>
                            <h1 className=' md:text-[26px] sm:text-[20px] ml-6'>Spy on Phone</h1>
                            <br/>
                        </div>
                        <div>
                        <span className={`${n3 === true ? ' text-white ' : ' text-black text-opacity-80'}`}>Login and monitor the target device from the Spyx dashboard.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-5/6 relative sm:flex sm:items-center justify-center md:pt-8 md:pl-14'>
                <div className={`${n1 === false ? 'absolute sm:hidden' : 'absolute hidden'}`} >
                    <Image src={Img} alt='' />
                </div>
                <div className={`${n2 === false ? 'absolute hidden' : 'absolute sm:hidden'}`} >
                    <Image src={Img2} alt=''  />
             </div>
            <div className={`${n3 === false ? 'absolute hidden' : 'absolute sm:hidden'}`}>
                    <Image src={Img3} alt=''  />
            </div>
            </div>
        </div>
        <div className='sm:mt-10 flex md:w-[300px] md:h-[200px] sm:h-[80px] mx-auto items-center '>
                <a href='#' className='sm:w-[300px] flex mx-auto  md:w-[350px] bg-[#fcd980] hover:bg-[#e7c56f] h-[50px] rounded-3xl text-[12px] items-center justify-center'>Choose the Best Plan for You </a>
        </div>

    </div>
    </div>
  )
}

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default BroductSteps