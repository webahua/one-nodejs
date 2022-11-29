import React, { useRef, useState } from 'react'
import Bottom from './Bottom'
import Header from './Header'
import Img from '../image/ios.svg'
import Img2 from '../image/android.svg'
import Image from 'next/image'
import Link from 'next/link'
import PaymentList from './PaymentList'
import Img3 from '../image/gou.svg'
import AppInfo from './AppInfo'
import Container from './Container'


function Pricing() {
  const [onci,setOnci] = useState(true)
  const [onci2,setOnci2] = useState(false)
  const [onci3,setOnci3] = useState(false)

  const Is = () => {
    setOnci(true)
    setOnci2(false)
    setOnci3(false)
  }

  const Is2 = () => {
    setOnci(false)
    setOnci2(true)
    setOnci3(false)
  }

  const Is3 = () => {
    setOnci(false)
    setOnci2(false)
    setOnci3(true)
  }



  return (
    <>
    <Header/>
    <div className='sm:bg-[#121444] sm:h-[550px]'>
      <div className='w-2/3 h-[300px]  mx-auto sm:h-[250px] '>
          <div className='text-center text-[25px] pt-8 sm:text-white'>Step2 of 3</div>
          <div className='mt-4 w-1/4 bg-[#d7d7d9] h-[7px] mx-auto rounded-3xl'>
              <div className='w-2/3 md:bg-black h-[7px] rounded-2xl sm:bg-[#09a6ea]'></div>
          </div>
          <h2 className='text-[45px] font-bold text-center pt-4 text-black text-opacity-80 sm:text-[24px] sm:text-white'>Pick up Your Plans</h2>
          <div className='flex w-1/3 bg-blue-200 items-center h-[40px] rounded-xl mx-auto mt-6 sm:w-[260px] '>
            <Link href={"#"} className="flex w-1/2 bg-blue-700 h-[38px] rounded-xl items-center justify-center">
              <div className='flex text-[22px] text-white'>
                <Image src={Img} alt="" className='w-5'/>ios
              </div>
            </Link>
          <Link href={"#"} className="flex  h-[38px] rounded-xl items-center mx-auto">
              <div className='flex text-[20px] text-blue-700 '>
                <Image src={Img2} alt="" className='w-5'/>Android
              </div>
          </Link>
              
          </div>
      </div>
      <div className='sm:hidden'>
        <div className='flex gap-x-6 w-11/12 mx-auto h-[493px] items-center '>
          <div className='w-1/3 bg-[#f4f6fc] h-5/6 rounded-xl md:hover:-translate-y-6 md:hover:shadow-2xl'>
            <div className='text-center h-3/5  mt-20 '>
              <h2 className='text-[22px]'>1 Month Plan</h2>
              <div className='flex items-center justify-center mt-2'>
                <p className='flex text-[32px] font-bold '>$48.99</p>
                <p className='ml-4 text-blue-600'>/mo*</p>
              </div>
              <div className='mt-4 text-[18px] line-through text-black text-opacity-60'>$69.99 /mo*</div>
            <Link href={"#"}>
            <div className='flex mt-10 w-1/2 h-[45px] bg-[#fcd980] hover:bg-[#eec96a] mx-auto rounded-3xl items-center justify-center '><p className='flex text-[14px] font-bold'>BUY NOW</p></div>
            </Link>
            
            </div>
          </div>
          <div className='w-1/3 bg-[#35404d] h-5/6 rounded-xl md:hover:-translate-y-6 md:hover:shadow-2xl'>
            <div className='text-center h-3/5  mt-20 '>
              <h2 className='text-[22px] text-white'>3 Month Plan</h2>
              <div className='flex items-center justify-center mt-2'>
                <p className='flex text-[32px] font-bold text-white'>$27.99</p>
                <p className='ml-4 text-yellow-500'>/mo*</p>
              </div>
              <div className='mt-4 text-[18px] line-through text-white text-opacity-60'>$69.99 /mo*</div>
              <Link href={"#"}>
            <div className='flex mt-10 w-1/2 h-[45px] bg-[#fcd980] hover:bg-[#eec96a] mx-auto rounded-3xl items-center justify-center'><p className='flex text-[14px] font-bold'>BUY NOW</p></div>
            </Link>
            </div>
          </div>
          <div className='w-1/3 bg-[#f4f6fc] h-5/6 rounded-xl md:hover:-translate-y-6 md:hover:shadow-2xl'>
            <div className='text-center h-3/5  mt-20 '>
              <h2 className='text-[22px]'>12 Months Plan</h2>
              <div className='flex items-center justify-center mt-2'>
                <p className='flex text-[32px] font-bold '>$11.66</p>
                <p className='ml-4 text-blue-600'>/mo*</p>
              </div>
              <div className='mt-4 text-[18px] line-through text-black text-opacity-80'>$16.66.99 /mo*</div>
              <Link href={"#"}>
            <div className='flex mt-10 w-1/2 h-[45px] bg-[#fcd980] hover:bg-[#eec96a] mx-auto rounded-3xl items-center justify-center'><p className='flex text-[14px] font-bold'>BUY NOW</p></div>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#303771] md:hidden w-11/12 h-[186px] mx-auto border-[1px] border-[#666786] rounded-md'>
        <div onClick={Is} className={`${onci===false?'flex h-[62px]  items-center justify-between border-b-[1px] border-[#666786]':'flex h-[62px]  border-b  items-center justify-between transition duration-400 ease-in-out  bg-[#303771] transform -translate-y-1 scale-105 border-blue-600 border-[2px] rounded-lg'}`}>
          <div className='flex items-center'>
            <div className={`${onci===false?'w-[16px] h-[16px] rounded-3xl border-[1px] ml-2':'hidden'}`}></div>
            <div><Image src={Img3} alt='' className={`${onci===false?'hidden':'ml-2'}`}/></div>
            <h2 className='ml-2 text-[15px] font-bold text-white'>1 Month Plan</h2>
          </div>
          <div className='flex text-[16px] text-white font-bold items-center'>
            $48.99
            <h2 className='text-white text-[12px] text-opacity-60'>/mo*</h2>
          </div>
          <div className='text-white text-[16px] text-opacity-60 line-through pr-2'>$69.99</div>
          
        </div>

        <div onClick={Is2} className={`${onci2===false?'flex h-[62px]  items-center justify-between border-b-[1px] border-[#666786]':'flex h-[62px]  border-b items-center justify-between transition duration-400 ease-in-out  bg-[#303771] transform -translate-y-1 scale-105 border-blue-600 border-[2px] rounded-lg'}`}>
          <div className='flex items-center'>
            <div className={`${onci2===false?'w-[16px] h-[16px] rounded-3xl border-[1px] ml-2':'hidden'}`}></div>
            <div><Image src={Img3} alt='' className={`${onci2===false?'hidden':'ml-2'}`}/></div>
            <h2 className='ml-2 text-[15px] font-bold text-white'>3 Month Plan</h2>
          </div>
          <div className='flex text-[16px] text-white font-bold items-center'>
            $27.99
            <h2 className='text-white text-[12px] text-opacity-60'>/mo*</h2>
          </div>
          <div className='text-white text-[16px] text-opacity-60 line-through pr-2'>$30.99</div>
          
        </div>

        <div onClick={Is3} className={`${onci3===false?'flex h-[62px]  items-center justify-between':'flex h-[62px]  border-b items-center justify-between transition duration-400 ease-in-out  bg-[#303771] transform -translate-y-1 scale-105 border-blue-600 border-[2px] rounded-lg'}`}>
          <div className='flex items-center'>
            <div className={`${onci3===false?'w-[16px] h-[16px] rounded-3xl border-[1px] ml-2':'hidden'}`}></div>
            <div><Image src={Img3} alt='' className={`${onci3===false?'hidden':'ml-2'}`}/></div>
            <h2 className='ml-2 text-[15px] font-bold text-white'>12 Month Plan</h2>
          </div>
          <div className='flex text-[16px] text-white font-bold items-center'>
            $11.66
            <h2 className='text-white text-[12px] text-opacity-60'>/mo*</h2>
          </div>
          <div className='text-white text-[16px] text-opacity-60 line-through pr-2'>$16.66</div>
          
        </div>
      </div>
      <Link href={"#"} className="md:hidden">
            <div className='flex mt-10 w-1/2 h-[45px] bg-[#fcd980] hover:bg-[#eec96a] mx-auto rounded-3xl items-center justify-center'><p className='flex text-[14px] font-bold'>BUY NOW</p></div>
      </Link>
      </div>
    <PaymentList/>
    <AppInfo/>
    <Container/>
    <Bottom/>
    </>
  )
}

export default Pricing