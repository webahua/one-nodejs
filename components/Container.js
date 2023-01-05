import React from 'react'
import Img from '../image/applo.svg'
import Image from 'next/image'
import Img2 from '../image/36.svg'
import Img3 from '../image/37.svg'
import Img4 from '../image/38.svg'
import Img5 from '../image/39.svg'

function Container() {
  return (
    <div className='md:h-[1260px]'>
        <div className='w-11/12 mx-auto mt-8'>
            <div className='md:w-1/2 sm:w-3/4 md:text-[45px] sm:text-[26px] font-bold mx-auto text-center text-black text-opacity-70'><h2 >Spyx keeps everything under control.</h2></div>
            <div className='md:flex md:mt-[60px] sm:mt-[30px] h-[420px] bg-gradient-to-r from-blue-500 to-blue-700 md:mx-auto rounded-2xl'>
                <div className='flex md:w-2/5 sm:h-2/5  justify-center h-full sm:mx-auto'>
                <Image className='md:w-[120px] sm:w-[70px]' src={Img} alt=""/>
                </div>
                <div className=' md:w-3/6 text-white text-opacity-90 items-center md:mt-[130px] sm:w-11/12 sm:mx-auto'>
                    <div className=' md:text-[43px] sm:text-[28px] font-bold '><h2>No Jailbreak, No Installation</h2></div>
                    <div className='text-center leading-8 md:mt-10 sm:mt-3'><p>Compatibile with any version of iOS. You need to have iCloud credentials (Apple ID | Password). Physical access is required if iCloud backup isnt activated on monitored device or 2-factor/2-step verification is enabled.</p></div>
                </div>
            </div>
        </div>
        <div className='w-11/12 mx-auto mt-[70px]'>
            <div className='md:w-1/2 sm:w-3/4 md:text-[45px] sm:text-[26px] font-bold mx-auto text-center text-black text-opacity-90'><h2 >Why Choose Spyx for Parental Control</h2></div>
            <div className=' md:flex grid-cols-4 gap-x-4 md:mt-[70px]'>
                <div className='md:w-1/4 h-[270px] sm:h-[240px] bg-[#f4f6fc] sm:w-full p-7 rounded-xl'>
                    <div className=''>
                       <Image src={Img2} alt=''/>
                       <h2 className='mt-6 text-[18px]'>100% Secure</h2>
                       <p className='mt-3 text-[14px] text-black text-opacity-80'>We value your privacy and protect your financial/personal info with advanced encryption and advanced fraud protection.</p>
                    </div>
                </div>
                <div className='md:w-1/4 h-[270px] sm:h-[240px] bg-[#f4f6fc] sm:w-full p-7 rounded-xl sm:mt-4'>
                    <div className=''>
                       <Image src={Img3} alt=''/>
                       <h2 className='mt-6 text-[18px]'>Support Service</h2>
                       <p className='mt-3 text-[14px] text-black text-opacity-80'>Knowledgeable representatives available to assist you through instant live chat and emails response within 24 hours.</p>
                    </div>
                </div>
                <div className='md:w-1/4 h-[270px] sm:h-[240px] bg-[#f4f6fc] sm:w-full p-7 rounded-xl sm:mt-4'>
                    <div className=''>
                       <Image src={Img4} alt=''/>
                       <h2 className='mt-6 text-[18px]'>Most Popular</h2>
                       <p className='mt-3 text-[14px] text-black text-opacity-80'>Currently serve millions of users in 190+ countries. Spyx can solve practical problems for users with professional technology.</p>
                    </div>
                </div>
                <div className='md:w-1/4 h-[270px] sm:h-[240px] bg-[#f4f6fc] sm:w-full p-7 rounded-xl sm:mt-4'>
                    <div className=''>
                       <Image src={Img5} alt=''/>
                       <h2 className='mt-6 text-[18px]'>Keep Updates</h2>
                       <p className='mt-3 text-[14px] text-black text-opacity-80'>Free software update within the valid period of the software. We have a strong team to keep the software updated.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container