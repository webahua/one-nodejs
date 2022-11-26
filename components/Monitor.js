import Image from 'next/image'
import React from 'react'
import Img from '../image/19.jpg'
import Img2 from '../image/20.jpg'
import Img3 from '../image/21.jpg'

function Monitor() {
    const MONITOR = [
        {
            id:1,
            img:Img,
            shij:"2022-11-25 17:32:35",
            biso:"10 Best Ad Blockers and Extensions",
            xiang:"Thankfully, there are lots of Google ad blocker tools that are readily available. They can certainly make your browsing experience a pleasant one, without letting you deal with those cumbersome ads. Lets start this year by upgrading your browsers."
        },
        {
            id:2,
            img:Img2,
            shij:"2022-11-22 20:23:02",
            biso:"10 Best Phone Tracker Apps Without Permission",
            xiang:"A good cell phone tracker app must be user-friendly. You dont need to be tech-savvy. Jailbreaking or rooting is not required. A robust cell phone tracker app must be functional with tracking features."
        },
        {
            id:3,
            img:Img3,
            shij:"2022-11-24 12:32:35",
            biso:"5 Best Free iPhone Spy Apps",
            xiang:"There are a lot of spy apps out there, but very few actually meet users needs. In this post, well detail the five best free spy apps for the iPhone. Its important to note that these spy apps arent completely free, with some features requiring a fee."
        }
    ]
  return (
    <div>
        <div className=' w-11/12 mx-auto md:h-[800px]'>
          <h1 className='text-[45px] font-bold text-center pt-[70px]'>Tips ~ Tricks about iPhone Monitor</h1>
          <div  className=' md:grid md:gap-x-2 md:grid-cols-3'>
            {
                MONITOR.map(item => {
                    return(
                        
                        
                        <div key={item.id} className='flex pt-16 '>
                            <div>
                                <div>
                                    <a href='/'>
                                        <Image className='w-[400px] h-[256px] rounded-2xl' src={item.img}  alt=''/>
                                    </a>
                                </div>
                                <p className='text-[14px] text-blue-800 pt-8'>{item.shij}</p>
                                <h1 className='text-[22px]  pt-3'>{item.biso}</h1>
                                <h1 className=' text-black text-opacity-60 pt-6'>{item.xiang}</h1>
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

export default Monitor