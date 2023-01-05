import Image from 'next/image'
import React, { useRef } from 'react'
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
import Link from 'next/link'

function Bottom() {

  return (
    <>
    <div className=' bg-[#1c1e53]'>
      

      <div className='md:h-[468px] bg-[#1c1e53]'>
        <div className='flex mx-auto w-11/12 sm:grid grid-cols-2 gap-6'>
            <div className=' md:w-[200px] pt-10 sm:hidden'>
                <Image src={Logo} className="w-[120px]" alt=''/>
                <p className='pt-4 text-white text-opacity-80'>Spyx keeps everythingunder control.</p>
                <p className='text-white text-opacity-60 text-[12px] pt-4'>service@spyx.com</p>
                <p className='text-white text-opacity-60 text-[12px] pt-4'>+1 6197289145</p>
            </div>
            <div className=' md:w-[256px] pt-10 md:ml-10 sm:hidden'>
                <Link href='/' className='hover:text-white'><h1 className='text-white font-bold text-[16px]'>Company</h1></Link>
                
                <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[12px] mt-4'>About Us</p></Link>
                <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[12px] mt-4'>Contact Us</p></Link>
                <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[12px] mt-4'>Author</p></Link>
                <br></br>
                <Link href='/' className='hover:text-white'><h1 className='text-white font-bold text-[16px]'>Account</h1></Link>
                <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Create Account</p></Link>
                <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Log In</p></Link>
            </div>
            <div className=' md:w-[256px] pt-10 md:ml-10 sm:w-1/2 sm:pl-10'>
            <Link href='/' className='hover:text-white'><h1 className='text-white font-bold text-[16px]'>Features</h1></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Contacts</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Text Messages</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Calls</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Text Messages</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>iCloud</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Notes</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Reminders</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>iCloud</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>GPS Locations</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Calendar</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Find My iPhone</p></Link>
            </div>
            <div className=' md:w-[256px] pt-10 md:ml-10 sm:w-1/2'>
            <Link href='/' className='hover:text-white'><h1 className='text-white font-bold text-[16px]'>Blog</h1></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Parental Control</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Track iPhone</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Calls</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'> Track Android</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Top List</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Catch Cheaters</p></Link>
            <Link href='/' className='hover:text-white'><p className='text-white text-opacity-70 text-[13px] mt-4'>Hack Phone</p></Link>
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
        <p className='text-white text-opacity-50 text-[12px]'>You are advised that it is considered Link violation of United States federal and/or state law in most instances to install surveillance software, such as the Spyx Software, onto Link mobile phone or other device for which you do not have proper authorization, and in most cases you are required to notify users of the device that they are being monitored. Failure to do so is likely to result in violation of applicable law and may result in severe monetary and criminal penalties imposed on the violator. You should consult your own legal advisor with respect to legality of using the Spyx Software in your jurisdiction prior to using the Spyx Software.</p>
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