<<<<<<< HEAD
import React from 'react'
import Img from '../image/visa.svg'
import Img2 from '../image/mastercard.svg'
import Img3 from '../image/jcb.svg'
import Img4 from '../image/american-express.svg'
import Img5 from '../image/discover.svg'
import Img6 from '../image/22.svg'
import Img7 from '../image/23.svg'
import Img8 from '../image/24.svg'
import Image from 'next/image'

function PaymentList() {
  return (
    <div className='h-[250px] '>
        <div className='md:flex w-11/12 h-5/6 mx-auto'>
            <div className='md:w-1/2'>
                <h2 className='md:text-[35px] font-bold sm:text-[22px] text-black text-opacity-80 sm:text-center'>Secure online payment:</h2>
                <div className='flex mt-4'>
                    <div className='flex items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img} alt='' className='w-[65px] '/>
                    </div>
                    <div className='flex ml-2 items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img2} alt='' className='w-[60px] '/>
                    </div>
                    <div className='flex ml-2 items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img3} alt='' className='w-[42px] '/>
                    </div>
                    <div className='flex ml-2 items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img4} alt='' className='w-[58px] '/>
                    </div>
                    <div className='flex ml-2 items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'> 
                      <Image src={Img5} alt='' className='w-[60px] '/>
                    </div>
                </div>
                
            </div>
            <div className='md:w-1/2 sm:mt-6'>
                <h2 className='md:text-[35px] font-bold sm:text-[22px] text-black text-opacity-80 sm:text-center md:flex md:justify-end'>Approved by:</h2>
                <div className='flex md:justify-end mt-4 sm:items-center sm:justify-center'>
                    <div className='flex items-center justify-center rounded-lg w-[80px] h-[45px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img6} alt='' className='w-[65px] '/>
                    </div>
                    <div className='flex items-center justify-center rounded-lg w-[80px] h-[45px] border-[0.6px] border-[#ccc] ml-2'>
                      <Image src={Img7} alt='' className='w-[65px] '/>
                    </div>
                    <div className='flex items-center justify-center rounded-lg w-[80px] h-[45px] border-[0.6px] border-[#ccc] ml-2'>
                         <Image src={Img8} alt='' className='w-[65px] '/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

=======
import React from 'react'
import Img from '../image/visa.svg'
import Img2 from '../image/mastercard.svg'
import Img3 from '../image/jcb.svg'
import Img4 from '../image/american-express.svg'
import Img5 from '../image/discover.svg'
import Img6 from '../image/22.svg'
import Img7 from '../image/23.svg'
import Img8 from '../image/24.svg'
import Image from 'next/image'

function PaymentList() {
  return (
    <div className='h-[250px] '>
        <div className='md:flex w-11/12 h-5/6 mx-auto'>
            <div className='md:w-1/2'>
                <h2 className='md:text-[35px] font-bold sm:text-[22px] text-black text-opacity-80 sm:text-center'>Secure online payment:</h2>
                <div className='flex mt-4'>
                    <div className='flex items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img} alt='' className='w-[65px] '/>
                    </div>
                    <div className='flex ml-2 items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img2} alt='' className='w-[60px] '/>
                    </div>
                    <div className='flex ml-2 items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img3} alt='' className='w-[42px] '/>
                    </div>
                    <div className='flex ml-2 items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img4} alt='' className='w-[58px] '/>
                    </div>
                    <div className='flex ml-2 items-center justify-center rounded-lg w-[80px] h-[38px] border-[0.6px] border-[#ccc]'> 
                      <Image src={Img5} alt='' className='w-[60px] '/>
                    </div>
                </div>
                
            </div>
            <div className='md:w-1/2 sm:mt-6'>
                <h2 className='md:text-[35px] font-bold sm:text-[22px] text-black text-opacity-80 sm:text-center md:flex md:justify-end'>Approved by:</h2>
                <div className='flex md:justify-end mt-4 sm:items-center sm:justify-center'>
                    <div className='flex items-center justify-center rounded-lg w-[80px] h-[45px] border-[0.6px] border-[#ccc]'>
                      <Image src={Img6} alt='' className='w-[65px] '/>
                    </div>
                    <div className='flex items-center justify-center rounded-lg w-[80px] h-[45px] border-[0.6px] border-[#ccc] ml-2'>
                      <Image src={Img7} alt='' className='w-[65px] '/>
                    </div>
                    <div className='flex items-center justify-center rounded-lg w-[80px] h-[45px] border-[0.6px] border-[#ccc] ml-2'>
                         <Image src={Img8} alt='' className='w-[65px] '/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default PaymentList