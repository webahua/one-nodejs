
import Image from 'next/image'
import React from 'react'
import Img from '../image/2.svg'
import Img2 from '../image/3.svg'
import Img3 from '../image/4.svg'
import Img4 from '../image/5.svg'
import Img5 from '../image/6.svg'
import Img6 from '../image/7.svg'
import Img7 from '../image/8.svg'
import Img8 from '../image/9.svg'


const Feature = () => {
    const FEATURE = [
        {
            id:1,
            img:Img,
            ming:"Photos",
            jian1:'View all Photos',
            jian:"Check Photos/Videos",
            zhu:"View all images and videos stored on the target device. Whats more, Spxy can provide specific location of the photo."
        },
        {
            id:2,
            img:Img2,
            ming:"SMS/MMS",
            jian1:'Read all messages',
            jian:"Read SMS/MMS",
            zhu:"Read all the text messages sent or received by the target use, even those deleted ones."
        },
        {
            id:3,
            img:Img3,
            ming:"Calls",
            jian1:'Read all Calls',
            jian:"Track Calls",
            zhu:"Spyx lets you view all incoming, outgoing and missed calls, their names, duration, the date and time they took place."
        },
        {
            id:4,
            img:Img4,
            ming:"GPS",
            jian1:'View all GPS',
            jian:"GPS Location Tracker",
            zhu:"Spyx enables to track GPS location of target device, even its location history."
        },
        {
            id:5,
            img:Img5,
            ming:"WhatsApp",
            jian1:'View all WhatsApp',
            jian:"Track WhatsApp",
            zhu:"Browse chat history, call log, and contact info on the users WhatsApp."
        },
        {
            id:6,
            img:Img6,
            ming:"Instagram",
            jian1:'View all Instagram',
            jian:"Track Instagram",
            zhu:"Read Instagram messages of target device easily with Spyx."
        },
        {
            id:7,
            img:Img7,
            ming:"Snapchat",
            jian1:'Access all Snapchat',
            jian:"Track Snapchat",
            zhu:"Access to all messages on Snapchat with Spyx, even vanished ones."
        },
        {
            id:8,
            img:Img8,
            ming:'Emails',
            jian1:'Track all emails',
            jian:"View Emails",
            zhu:"Track all emails on targeted device, including senders' names and email addresses."
        },
    ]
  return (
    <div className='flex bg-[#f5fafe] md:h-[960px] items-center justify-center'>
        <div className=' pt-10 md:w-[1280px]'>
            <h1 className='flex md:w-[1280px] md:h-[148px] md:text-[45px] font-bold text-opacity-80 text-black  items-center justify-center'>Features of Spyx iPhone Tracker App</h1>
            
            <div className='sm:grid sm:gap-y-8 sm:gap-x-7 sm:grid-cols-3 sm:pl-6 sm:pt-10 md:pl-14 md:w-full md:pt-6 md:grid md:gap-x-12 md:gap-y-6 md:grid-cols-4'>
                {
                    FEATURE.map( item => {
                        return (
                            <div key={item.id} className='sm:w-[115px] h-[100px] md:bg-white md:w-full md:h-[240px] md:border rounded-xl md:hover:shadow-2xl md:hover:-translate-y-1 '>
                               <div className='md:flex md:pt-6 md:pl-4 md:items-center '>
                                    <div className='flex items-center justify-center'>
                                    <Image  src={item.img} className=" h-[30px] md:h-full" alt='哈哈'/>
                                    </div>
                                    <h2 className='sm:hidden md:ml-4 text-opacity-80 text-black'>{item.jian}</h2>
                                    <h2 className='md:hidden flex text-[14px] pt-2 items-center justify-center text-bold'>{item.ming}</h2>
                                </div>
                                <div className='md:pt-6  text-center md:w-11/12 mx-auto'>
                                    <span className=' sm:hidden text-[#333] text-opacity-70 text-[12px] md:text-[15px] '>{item.zhu}</span>
                                    <span className='flex md:hidden text-[12px] justify-center pt-2 text-black text-opacity-50'>{item.jian1}</span>
                                </div>
                            </div>
                        )
                    })
                    
                }
                
            </div>

        <div className='md:flex md:items-center mt-3 md:pt-[60px] md:pl-[40px] md:justify-center'>
            <a href='#' className='flex md:w-[230px] h-[50px] text-[18px] rounded-3xl bg-[#fcd980] items-center justify-center hover:bg-[#ecc45f] sm:w-[230px]  sm:mx-auto'>TRY NOW</a>
            <a href='#' className='flex h-[50px]  text-[16px] md:ml-14 hover:text-blue-500 items-center justify-center'>View Demo
            </a>
        </div>
        </div>
    </div>
  )
}

export default Feature