import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { fetcher } from '../lib/api'
import Img from '../image/17.svg'
import Img2 from '../image/18.svg'
import Img3 from '../image/avatar-001.png'
import Img4 from '../image/avatar-002.png'
import Img5 from '../image/avatar-003.png'
import Img6 from '../image/avatar-004.png'
import Img7 from '../image/avatar-005.png'
import Img8 from '../image/avatar-006.png'
import { Carousel } from 'antd';

function Testimonials() {
  const images = [
    {
      id:1,
      img:Img3,
      name:"hfhf",
      pingjia:"Spyx is a great tool to take care my business. I can literally track everything and today Spyx help me out with my technical difficulties I had. Thank you, Spyx!!!"
    },
    {
      id:2,
      img:Img4,
      name:"qweq",
      pingjia:"I received professional help from Spyx and my problem was solved. Everything was fast and without any problems. How sincere the customer service is! I love Spyx so much!"
    },
    {
      id:3,
      img:Img5,
      name:"mhmhs",
      pingjia:"Working with this agency has been a very positive experience. They really know what they are doing. I am extremely satisfied!"
    },
    {
      id:4,
      img:Img6,
      name:"adacsxc",
      pingjia:"This is some feedback after using Spyx for 3 months. All I can say that it was awesome as it exceeded my expectations. They allowed me to put it on hold until I was able to gain access to the targets device and then activate my subscription."
    },
    {
      id:5,
      img:Img7,
      name:"bdbf",
      pingjia:"Helpful department, useful program. i live some pr and helped me Page Lank. Thanks a lot Page, i will continue use Spyx. Perfect program in the world to watch /follow your child."
    },
    {
      id:6,
      img:Img8,
      name:"vwqed",
      pingjia:"This is some feedback after using Spyx for 3 months. All I can say that it was awesome as it exceeded my expectations. They allowed me to put it on hold until I was able to gain access to the targets device and then activate my subscription."
    },
  ]
  const [test,setTest] = useState([])


  const Test = useCallback(async() => {
    try{
      const res = await fetcher('http://localhost:1337/api/testimonials')
      if(!res.ok){
        setTest(res.data)
        //console.log("22",res.data)
      }
    }catch(err){
      console.log(err)
    }
  },[])

  useEffect(() => {
    Test();
  }, []);



  return (
    <Carousel autoplay>
    <div  className='flex sm:pt-[50px] bg-[#fff] sm:h-full md:h-[480px] items-center mx-auto overflow-hidden '>
      <div   className='sm:h-[600px] sm:w-11/12 mx-auto'>
      <Carousel  autoplay className='flex  mx-auto items-center justify-center'>
        
      {
        images.map(item => {
        return(
          <div key={item.id}   className=' relative flex md:h-[800px] w-screen  md:pl-8 '>
          <div   className=' md:w-2/6  md:mt-[110px] '>
            <div className=''>
            <h1 className='text-[35px] font-bold text-center'>What Users Say about Spyx</h1>
            <h1 className='text-[14px] text-black text-opacity-70 mt-4 text-center'>We hope to hear more stories from you.</h1>
            </div>
            <div className='flex md:h-1/2 items-center justify-center'>
              <div className=' text-[80px] text-blue-500 font-bold '>4.8</div>
              <div className='md:ml-6 text-center sm:ml-4'>
                <div className='flex '>
                  <Image src={Img} alt=''/>
                  <Image src={Img} alt=''/>
                  <Image src={Img} alt=''/>
                  <Image src={Img} alt=''/>
                  <Image src={Img} alt=''/>
                </div>
                <Image src={Img2} alt=''  className='md:mt-2'/>
              </div>
            </div>
          </div>
          <div className='md:w-3/5 md:ml-[500px] md:-mt-[260px] sm:h-[400px]'>
            <div className='md:w-3/4 mx-auto'>
              <div className='text-[1.2rem]'>
                <h1>{item.pingjia}</h1>
              </div>
                <div className='flex items-center md:pt-12 sm:mt-8' >
                <Image  src={item.img} alt='' className='w-12 rounded-3xl'></Image>
                  <p className='md:ml-4 text-black text-opacity-80 sm:ml-4'>{item.name}</p>
                </div>
                <div className='flex float-right'>
                  <button className='flex hover:text-white w-12 h-12 hover:bg-blue-600 justify-center items-center hover:rounded-3xl'>上</button>
                  <button  className='flex hover:text-white w-12 h-12 bg-blue-600 hover:bg-slate-600  justify-center items-center hover:rounded-3xl rounded-3xl'>下</button>
                </div>
            </div>
          </div>
          </div>
        )
      })
      
      }
      
    </Carousel>
    </div>
    </div>
  </Carousel>
    
  )
}

export default Testimonials