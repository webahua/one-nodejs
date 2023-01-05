import React, { useState } from 'react'
import Bottom from './Bottom'
import Header from './Header'
import Imgc from '../image/checkout.webp'
import Img from '../image/40.svg'
import Img2 from '../image/41.svg'
import Img3 from '../image/42.svg'
import Img4 from '../image/43.svg'
import Img5 from '../image/44.svg'
import Img6 from '../image/45.svg'
import Img7 from '../image/46.svg'
import Img8 from '../image/47.svg'
import Img9 from '../image/48.svg'
import Img10 from '../image/49.png'
import Img11 from '../image/50.png'
import Img12 from '../image/51.png'
import Img13 from '../image/52.png'
import Img14 from '../image/53.png'
import Img15 from '../image/54.png'
import Img16 from '../image/Group.svg'
import Image from 'next/image'
import Link from 'next/link'

function Checkout({onci,onci2,onci3}) {
    const [show,setShow] = useState(false)
    
  return (
<>
  <Header show={show}/>

  <div className='md:h-[1300px] sm:h-[1300px] sm:bg-[#161843]'>
    <div className='flex'>
    <div className='w-[330px]  ml-8 sm:hidden'>
      <div className='w-[105px] ml-[70px] mt-10'><Image src={Imgc} alt=''/></div>
      <div className='mt-3'>
        
        <h2 className='text-[23px]'>Spyx 3 Months Plan</h2>
        <p className='text-black text-[13px] mt-4 text-opacity-60'>AUTO-RENEWAL:ON</p>
      </div>
      <div className='mt-6'>
        <h2 className='text-[18px] text-blue-900'>Get the most out of Spyx</h2>
        <div>
          <div className='flex items-center mt-4'>
            <Image src={Img} alt='' className='w-[23px]'/>
            <p className='ml-4 text-[14px] text-black text-opacity-80'>Call History</p>
          </div>
          <div className='flex items-center mt-2'>
            <Image src={Img2} alt='' className='w-[23px]'/>
            <p className='ml-4 text-[14px] text-black text-opacity-80'>Messages / WhatsApp Chats</p>
          </div>
          <div className='flex items-center mt-2'>
            <Image src={Img3} alt='' className='w-[23px]'/>
            <p className='ml-4 text-[14px] text-black text-opacity-80'>GPS Location | Routes</p>
          </div>
          <div className='flex items-center mt-2'>
            <Image src={Img4} alt='' className='w-[23px]'/>
            <p className='ml-4 text-[14px] text-black text-opacity-80'>Pics/Videos/Media Files</p>
          </div>
          <div className='flex items-center mt-2'>
            <Image src={Img6} alt='' className='w-[23px]'/>
            <p className='ml-4 text-[14px] text-black text-opacity-80'>Notes/Calendar/Reminders</p>
          </div>
          <div className='flex items-center mt-2'>
            <Image src={Img7} alt='' className='w-[23px]'/>
            <p className='ml-4 text-[14px] text-black text-opacity-80'>Email/Browser History</p>
          </div>
          <div className='flex items-center mt-2'>
            <Image src={Img8} alt='' className='w-[23px]'/>
            <p className='ml-4 text-[14px] text-black text-opacity-80'>Installed Apps/Social App Chats</p>
          </div>
          <div className='flex items-center mt-2'>
            <Image src={Img9} alt='' className='w-[23px]'/>
            <p className='ml-4 text-[14px] text-black text-opacity-80'>Contact Lists</p>
          </div>
        </div>
        <div className='mt-10 w-[280px] text-[13px] text-black text-opacity-50'><p>You may check whether the features are compatible with your device on our Compatibility page</p></div>
        </div>
    </div>
    <div className='w-[700px] '>
    <form className=''>
        <div className='md:w-1/3 mx-auto text-center mt-9'>
          <h3 className='text-[22px] sm:text-blue-500 sm:text-[16px] sm:font-bold'>Step3 of 3</h3>
          <div className='md:bg-black rounded-3xl h-[6px] mt-2 sm:w-[160px] mx-auto sm:bg-blue-500'></div>
          <h1 className='text-[34px] mt-4 sm:text-white'>Shopping cart</h1>
        </div>
        <div className='sm:ml-2 mt-10 md:w-3/4 mx-auto'>
          <div className='flex divide-dashed text-[14px] mx-auto text-black text-opacity-80 sm:justify-center sm:text-white sm:text-opacity-80'>
            <p>Subscription period:</p>
            <div  className='border-b border-black w-[230px] sm:w-1/3 sm:border-white'></div>
            <p>3 Months Plan</p>
          </div>
          <div className='sm:ml-2 flex divide-dashed text-[14px] mx-auto mt-5 text-black text-opacity-80 sm:text-white sm:text-opacity-80'>
            <p>1 month price:</p>
            <div  className='border-b border-black w-1/3 sm:border-white'><p className='line-through float-right text-blue-600 text-[13px]'>39.99</p></div>
            <p className='ml-2 sm:text-yellow-500 sm:font-bold'>27.99 USD</p>
          </div>
        </div>
        <div className=''>
          <div className=' sm:hidden w-9/12 bg-[#f0f1f2] h-[342px] mx-auto mt-[60px] rounded-2xl'>
            <div className='w-3/4 bg-[#f0f0f0f0] h-[342px] rounded-2xl shadow-2xl'>
              <div className='pt-8 pl-10'>
                <input type='text' placeholder="Card Number" required className=' mx-auto w-5/6 h-[45px]  rounded-lg outline-none pl-4'/>
                <div className='flex mt-4'>

                  <input type='text' placeholder="MM / YY" required className='  w-2/5 h-[45px]  rounded-lg outline-none pl-2'/>
                  <input type='text' placeholder="CVV" required className=' w-2/5 h-[45px]  rounded-lg outline-none ml-3 pl-2'/>
                </div>
                <div className='flex pt-4'>
                  <div>
                    <h2 className='text-[15px] font-bold'>First name</h2>
                    <input type='text' placeholder="First name" required className='mt-2 w-3/4 h-[45px]  rounded-lg outline-none  pl-2'/>
                  </div>
                  <div className='-ml-6'>
                    <h2 className='text-[15px] font-bold'>Last name</h2>
                    <input type='text' placeholder="Last name" required className='mt-2 w-3/4  h-[45px]  rounded-lg outline-none  pl-2'/>
                  </div>
                </div>
                <div className='flex pt-4'>
                  <div className=''>
                    <h2 className='text-[15px] font-bold'>Country</h2>
                    <select class="w-[140px] h-[45px] mt-2 rounded-lg">
                      <option className=''>Hong Kong</option>
                      <option>美国</option>
                      <option>中国大陆</option>
                    </select>
                      
                  </div>
                  <div className='ml-6'>
                    <h2 className='text-[15px] font-bold'>Zip Code</h2>
                    <input type='text' placeholder="Zip Code" required className='mt-2 w-3/4  h-[45px]  rounded-lg outline-none  pl-2'/>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='md:hidden w-11/12 bg-[#f0f1f2] h-[342px] mx-auto mt-[60px] rounded-2xl'>
              <div className='pt-8 pl-10'>
                <input type='text' placeholder="Card Number" required className=' mx-auto w-5/6 h-[45px]  rounded-lg outline-none pl-4'/>
                <div className='flex mt-4'>

                  <input type='text' placeholder="MM / YY" required className='  w-2/5 h-[45px]  rounded-lg outline-none pl-2'/>
                  <input type='text' placeholder="CVV" required className=' w-2/5 h-[45px]  rounded-lg outline-none ml-3 pl-2'/>
                </div>
                <div className='flex pt-4'>
                  <div>
                    <h2 className='text-[15px] font-bold'>First name</h2>
                    <input type='text' placeholder="First name" required className='mt-2 w-3/4 h-[45px]  rounded-lg outline-none  pl-2'/>
                  </div>
                  <div className='-ml-6'>
                    <h2 className='text-[15px] font-bold'>Last name</h2>
                    <input type='text' placeholder="Last name" required className='mt-2 w-3/4  h-[45px]  rounded-lg outline-none  pl-2'/>
                  </div>
                </div>
                <div className='flex pt-4'>
                  <div className=''>
                    <h2 className='text-[15px] font-bold'>Country</h2>
                    <select class="w-[140px] h-[45px] mt-2 rounded-lg">
                      <option className=''>Hong Kong</option>
                      <option>美国</option>
                      <option>中国大陆</option>
                    </select>
                      
                  </div>
                  <div className='ml-6'>
                    <h2 className='text-[15px] font-bold'>Zip Code</h2>
                    <input type='text' placeholder="Zip Code" required className='mt-2 w-3/4  h-[45px]  rounded-lg outline-none  pl-2'/>
                  </div>
                </div>
              </div>

          </div>
          <div className='w-9/12 mx-auto mt-6 sm:w-11/12'>
            <h2 className='text-[15px] font-bold sm:text-white'>Email:</h2>
            <input placeholder='Enter your valid email' required className='w-5/6 h-[50px] mt-1 rounded-lg pl-4 outline-none border-[1px]'/>
          </div>
          <div className='flex mx-auto items-center justify-center mt-6' >
            <button className='bg-[#fcd980] h-[50px] rounded-3xl w-5/6'>RAY NOW</button>
          </div>
          <div className='mx-auto w-9/12  text-center mt-6 sm:w-11/12'>
            <p className='text-[15px] text-black text-opacity-70 sm:text-white sm:text-[13px]'>YOU WILL PAY 83.97 USD INSTEAD OF 119.97 USD</p>
            <p className='text-[14px] mt-6 text-black text-opacity-60 sm:text-white sm:text-opacity-50'>*The price is discounted.We will be charging the full price starting from the next subscription renewal.</p>
            <p className='mt-8 text-[13px] text-black text-opacity-50 sm:text-white  sm:text-opacity-50'>Your subscription will be renewed on 2023-03-02</p>
            <div className='grid  grid-cols-6 mt-6'>
              <Image src={Img10} alt='' className='w-[60px]'/> 
              <Image src={Img11} alt='' className='w-[60px]'/> 
              <Image src={Img12} alt='' className='w-[60px]'/> 
              <Image src={Img13} alt='' className='w-[60px]'/> 
              <Image src={Img14} alt='' className='w-[60px]'/> 
              <Image src={Img15} alt='' className='w-[60px] h-[40px]' /> 
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className='pt-4 sm:hidden '>
      <div className='w-4/6 mx-auto items-center justify-center'>
        <h2 className='text-[24px] text-blue-800'>+1 6197289145</h2>
        <h3 className='text-[16px] text-blue-800'>USA | Canada Toll Free</h3>
        <p className='text-[14px] mt-4 text-black text-opacity-60'>24/7 English phone support for online payment related issues:</p>
      </div>
      <div className='flex  mt-6 w-4/6 border-[1px] border-dashed h-[40px] rounded-xl  mx-auto items-center justify-center'>
        <Image alt='' src={Img16}/>
        <p className='text-blue-800 text-[17px]'>CODE APPLIED</p>
      </div>
    </div>
   </div>
   <div className='w-4/6 mx-auto mt-8 text-[14px] text-black text-opacity-60 text-center sm:text-white  sm:text-opacity-60 sm:w-11/12' >
      By submitting the order, you agree to 
      <Link href={'#'} className='text-blue-700 sm:text-yellow-400'>Terms and Conditions</Link>
      and
      <Link href={'#'} className='text-blue-700 sm:text-yellow-400'>Refund Policy.</Link>
      Your membership is renewed automatically at the end of each subscription period unless you cancel it in your Spyx account. You should familiarize yourself with 
      <Link href={'#'} className='text-blue-700 sm:text-yellow-400'>Device Requirements</Link>
      |
      <Link href={'#'} className='text-blue-700 sm:text-yellow-400'>Legal Disclaimer</Link>
      , and be aware that, in some cases, youll need physical access to the device.
    </div>
  </div>

  <Bottom/>
</>
  )
}
export default Checkout