import Image from 'next/image'
import React from 'react'
import Logo from '../image/logo.svg'
import Img from '../image/social-item1.svg'
import Img2 from '../image/social-item2.svg'
import Img3 from '../image/social-item3.svg'
import Img4 from '../image/social-item4.svg'
import Img5 from '../image/visa.svg'
import Img6 from '../image/mastercard.svg'
import Img7 from '../image/jcb.svg'
import Img8 from '../image/american-express.svg'
import Img9 from '../image/discover.svg'



function Bottom() {
  return (
    <>
    <div className=' bg-[#1c1e53]'>
      <div className='sm:h-[280px] flex bg-[#1c1e53] md:h-[587px] justify-center items-center border-b border-white border-opacity-10'>
        <div className='sm:h-[200px] mx-auto md:h-[420px] md:bg-gradient-to-r md:from-blue-700 sm:bg-[rgb(0,122,255)] w-3/4 rounded-2xl hover:bg-[rgb(0,122,255)]'>
           <div className=' items-center justify-center text-center sm:pt-4 md:mt-12'>
              <h1 className='md:text-[46px] font-bold text-white text-opacity-90 '>Spyx keeps everything</h1>
              <h1 className='md:text-[46px] font-bold text-white text-opacity-90 '>under control.</h1>
           </div>
           <div className='md:flex md:ml-[100px] md:w-[620px] md:items-center mt-3 md:pt-[60px] md:pl-[40px] md:justify-center'>
            <a href='#' className='flex md:w-[230px] h-[50px] text-[18px] rounded-3xl bg-[#fcd980] items-center justify-center hover:bg-[#ecc45f] sm:w-[230px]  sm:mx-auto'>TRY NOW</a>
            <a href='#' className='flex md:w-[230px] h-[50px]  text-[16px] md:ml-14 text-white hover:text-blue-900 sm:w-[230px]  items-center justify-center sm:mt-2 sm:mx-auto hover:rounded-3xl hover:border-1px hover:border-blue-900 border rounded-3xl'>View Demo
            </a>
        </div>
        </div>
      </div>

      <div className='md:h-[468px] bg-[#1c1e53]'>
        <div className='flex mx-auto w-11/12 sm:grid grid-cols-2 gap-6'>
            <div className=' md:w-[200px] pt-10 sm:hidden'>
                <Image src={Logo} className="w-[120px]"/>
                <p className='pt-4 text-white text-opacity-80'>Spyx keeps everythingunder control.</p>
                <p className='text-white text-opacity-60 text-[12px] pt-4'>service@spyx.com</p>
                <p className='text-white text-opacity-60 text-[12px] pt-4'>+1 6197289145</p>
            </div>
            <div className=' md:w-[256px] pt-10 md:ml-10 sm:hidden'>
                <a href='/' className='hover:text-white'><h1 className='text-white font-bold text-[16px]'>Company</h1></a>
                
                <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[12px] mt-4'>About Us</p></a>
                <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[12px] mt-4'>Contact Us</p></a>
                <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[12px] mt-4'>Author</p></a>
                <br></br>
                <a href='/' className='hover:text-white'><h1 className='text-white font-bold text-[16px]'>Account</h1></a>
                <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Create Account</p></a>
                <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Log In</p></a>
            </div>
            <div className=' md:w-[256px] pt-10 md:ml-10 sm:w-1/2 sm:pl-10'>
            <a href='/' className='hover:text-white'><h1 className='text-white font-bold text-[16px]'>Features</h1></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Contacts</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Text Messages</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Calls</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Text Messages</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>iCloud</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Notes</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Reminders</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>iCloud</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>GPS Locations</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Calendar</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Find My iPhone</p></a>
            </div>
            <div className=' md:w-[256px] pt-10 md:ml-10 sm:w-1/2'>
            <a href='/' className='hover:text-white'><h1 className='text-white font-bold text-[16px]'>Blog</h1></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Parental Control</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Track iPhone</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Calls</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'> Track Android</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Top List</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Catch Cheaters</p></a>
            <a href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Hack Phone</p></a>
            </div>
            <div className=' pt-10 md:w-[256px] sm:w-4/5 sm:mx-auto'>
                <div className='grid  grid-cols-4 '>
                    <Image src={Img}  alt=''/>
                    <Image src={Img2}  alt=''/>
                    <Image src={Img3}  alt=''/>
                    <Image src={Img4}  alt=''/>
                </div>
                <div className=' mt-8  grid grid-cols-3 gap-y-2 gap-x-6'>
                    <div className='flex items-center justify-center w-[60px] h-[30px] rounded-lg bg-white'><Image src={Img5} className='w-[40px] rounded-lg bg-white' alt='' /></div>
                    <div className='flex items-center justify-center  w-[60px] h-[30px] rounded-lg bg-white'><Image src={Img6} alt='' /></div>
                    <div className='flex items-center justify-center  w-[60px] h-[30px] rounded-lg bg-white'> <Image src={Img7} alt='' /></div>
                    <div className='flex items-center justify-center  w-[60px] h-[30px] rounded-lg bg-white'><Image src={Img8} alt='' /></div>
                    <div className='flex items-center justify-center  w-[60px] h-[30px] rounded-lg bg-white'> <Image src={Img9} alt='' /></div>
                </div>
            </div>
        </div>
        
      </div>
      <div className='w-11/12 bg-[#1c1e53] mx-auto md:h-[120px] sm:pt-10'>
        <h3 className='text-white text-opacity-50'>Disclaimer</h3>
        <br></br>
        <p className='text-white text-opacity-50 text-[12px]'>You are advised that it is considered a violation of United States federal and/or state law in most instances to install surveillance software, such as the Spyx Software, onto a mobile phone or other device for which you do not have proper authorization, and in most cases you are required to notify users of the device that they are being monitored. Failure to do so is likely to result in violation of applicable law and may result in severe monetary and criminal penalties imposed on the violator. You should consult your own legal advisor with respect to legality of using the Spyx Software in your jurisdiction prior to using the Spyx Software.</p>
      </div>
      <div className='md:h-[30px] border-b border-white border-opacity-10'>
        <h2 className='text-center text-[13px] text-white text-opacity-50'>Terms | EULA | Privacy | Refund | Cookie | Affiliate | Reseller | Disclaimer</h2>
      </div>
      <div className='flex items-center justify-center md:h-[50px]'>
      <p className='text-white text-opacity-50 text-[12px]'>Copyright © SPYX.COM. All Rights Reserved.</p>
      </div>
      
    </div>
    
    </>
  )
}

export default Bottom