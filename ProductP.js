import Image from 'next/image'
import React, { useState } from 'react'
import Img from '../image/10.webp'
import Img2 from '../image/11.webp'
import Img3 from '../image/12.webp'

const ProductP = () => {
    const [n1,setN1] = useState(false)
    const [n2,setN2] = useState(false)
    const [n3,setN3] = useState(false)

    const N1handled = () => {
        setN1(false)
        setN3(false)
        setN2(false)
    }
    const N2handled = () => {
        
        setN1(true)
        setN3(false)
        setN2(true)
    }
    const N3handled = () => {
        setN1(true)
        setN3(true)
        setN2(false)
    }
  return (
    <div className='w-11/12 mx-auto'>
        <div className='md:text-[45px] font-bold text-center md:pt-[60px] sm:text-[30px] sm:pt-10'>
            <h1>
            Why Choose Spyx
            <br></br>
            for Parental Control
            </h1>
            
        </div>
        <div className='flex pt-8'>
            <div className='w-5/6 relative sm:flex sm:items-center justify-center'>
                <div class={`${n1 === false ? 'absolute' : 'absolute hidden'}`} >
                    <Image src={Img} alt='' />
                </div>
                <div className={`${n2 === false ? 'absolute hidden' : 'absolute'}`} >
                    <Image src={Img2} alt=''  />
                </div>
                <div className={`${n3 === false ? 'absolute hidden' : 'absolute'}`}>
                    <Image src={Img3} alt=''  />
                </div>
            </div>
            <div className='w-4/5  pl-10 grid gap-3 gap-y-5 sm:gap-y-20' >
                <div onClick={N1handled}  className={`${n1 === false ? ' md:h-[200px] hover:rounded-xl bg-[#dfeaf3] pt-2 pl-6 sm:text-[12px] rounded-xl': 'md:h-[200px] hover:rounded-xl pt-2 pl-6 sm:text-[12px] hover:bg-[#dfeaf3] sm:bg-[#dfeaf3] sm:rounded-xl'}`}>
                    <h1 className='md:text-[28px] sm:text-[20px]'>1. No Need to Install App</h1>
                    <br/>
                    <span className={`${n1 === false ? 'sm:hidden text-blue-400 ' : 'sm:hidden text-black text-opacity-60'}`}>You never have to worry about being discovered. Because you don't need to install the app on the target device. Save troublesome installation steps, you can easily achieve remote monitoring. Spyx makes tracking phone an easy and convenient thing.</span>
                </div>
                <div onClick={N2handled}  className={`${n2 === true ? 'md:h-[200px] hover:rounded-xl bg-[#dfeaf3] pt-2 pl-6 sm:text-[12px] rounded-xl ': 'rounded-xl md:h-[200px] file:hover:rounded-xl pt-2 pl-6 sm:text-[12px] hover:bg-[#dfeaf3] sm:bg-[#dfeaf3] sm:rounded-xl'}`}>
                    <h1 className='md:text-[28px] sm:text-[20px] '>2. No Jailbreak</h1>
                    <br/>
                    <span className={`${n2 === true ? 'sm:hidden text-blue-400 ' : 'sm:hidden text-black text-opacity-60'}`}>Jailbreaking is very invasive and can potentially damage the device. Spyx does not require complex technical knowledge to handle jailbreak. It is very friendly to users not tech-savvy. With Spyx, just 3 steps to start your secret monitoring.</span>
                </div>
                <div onClick={N3handled} className={`${n3 === true ? 'md:h-[200px] hover:rounded-xl bg-[#dfeaf3] pt-2 pl-6 sm:text-[12px] rounded-xl ': 'md:h-[200px] hover:rounded-xl pt-2 pl-6 sm:text-[12px] hover:bg-[#dfeaf3] sm:bg-[#dfeaf3] sm:rounded-xl'}`}>
                    <h1 className='md:text-[28px] sm:text-[20px] '>3. 100% Secure</h1>
                    <br/>
                    <span className={`${n3 === true ? 'sm:hidden text-blue-400 ' : 'sm:hidden text-black text-opacity-60'}`}>Spyx is safe and reliable. You won’t be identified. Keep an eye on the activities of target phone anonymously without any notice. With Spyx phone tracker, it is convenient and possible to track your spouse, children, employee in real time.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductP