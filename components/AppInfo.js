import React from 'react'
import Img from '../image/25.svg'
import Img2 from '../image/26.svg'
import Img3 from '../image/27.svg'
import Img4 from '../image/28.svg'
import Img5 from '../image/29.svg'
import Img6 from '../image/30.svg'
import Img7 from '../image/31.svg'
import Img8 from '../image/32.svg'
import Img9 from '../image/33.svg'
import Img10 from '../image/34.svg'
import Img11 from '../image/35.svg'
import Image from 'next/image'


function AppInfo() {
    const APP_INFO = [
        {
            id:1,
            img:Img,
            ming:"Contacts",
            xiang:"Track every new or existing number remotely.",
            sm:"Track every new or existing number remotely."
        },
        {
            id:2,
            img:Img2,
            ming:"Text Messages",
            xiang:"Take a peek at childrens sent and received messages.",
            sm:"Take a peek at childrens sent and received messages."
        },
        {
            id:3,
            img:Img3,
            ming:"Phone Calls",
            xiang:"Know who your children are talking to anonymously.",
            sm:"Track every new or existing number remotely."
        },
        {
            id:4,
            img:Img4,
            ming:"Calendar",
            xiang:"Tracks every calendar activity on your kids phone.",
            sm:"Tracks every calendar activity on your kids phone."
        },
        {
            id:5,
            img:Img5,
            ming:"Photos",
            xiang:"Browse all pictures downloaded on your kids phone.",
            sm:"Know who your children are talking to anonymously."
        },
        {
            id:6,
            img:Img6,
            ming:"iCloud",
            xiang:"View all data and files stored on iCloud in detail.",
            sm:"View all data and files stored on iCloud in detail."
        },
        {
            id:7,
            img:Img7,
            ming:"Notes",
            xiang:"Read all notes taken by your children secretly.",
            sm:"Read all notes taken by your children secretly."
        },
        {
            id:8,
            img:Img8,
            ming:"Reminders",
            xiang:"Get to know plan and activities on target phones.",
            sm:"Get to know plan and activities on target phones."
        },
        {
            id:9,
            img:Img9,
            ming:"GPS Locations",
            xiang:"Find out where your kids are and ensure their safety.",
            sm:"Find out where your kids are and ensure their safety."
        },
        {
            id:10,
            img:Img10,
            ming:"Find My iPhone",
            xiang:"Make sure the last position of target iPhone.",
            sm:"Make sure the last position of target iPhone."
        },
        {
            id:11,
            img:Img11,
            ming:"Emails",
            xiang:"Read all incoming and outgoing emails easily.",
            sm:"Read all incoming and outgoing emails easily."
        },

    ]
  return (
    <div className='flex h-[1160px] sm:h-[980px] bg-[#f5fafe] md:items-center'>
        <div className='w-11/12 h-4/5 mx-auto '>
            <div className='flex md:w-1/2 sm:w-4/6 mx-auto '>
                <h2 className='md:text-[48px] sm:text-[24px] font-bold text-center sm:mt-4'>All Plans Include the Following Features</h2>
            </div>

            <div className='mt-[60px] grid grid-cols-4 gap-x-4 gap-y-14 sm:hidden'>
                {APP_INFO.map(item => {
                    return(
                        <div key={item.id} className="text-center">
                            <Image src={item.img} alt="" className='mx-auto'/>
                            <h2 className='text-[22px] mt-5'>{item.ming}</h2>
                            <p className='text-[17px] text-black text-opacity-70 mt-5'>{item.xiang}</p>
                        </div>
                    )
                })}
                
            </div>

            <div className=' md:hidden'>
                {
                    APP_INFO.map(items => {
                        return(
                            <div key={items.id} className='flex mt-4'>
                                <div><Image src={items.img} alt=''/></div>
                                <div className='ml-2'>
                                    <h2 className=''>{items.ming}</h2>
                                    <p className='text-[14px] text-black text-opacity-50'>{items.sm}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default AppInfo