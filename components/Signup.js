<<<<<<< HEAD
import React, { useRef, useState } from 'react'
import Bottom from './Bottom'
import Header from './Header'
import Img from '../image/logo-bg.svg'
import Image from 'next/image'
import Img2 from '../image/google-oauth.svg'
import Link from 'next/link'
import { useLoginMutation, useRegisterMutation } from '../lib/authApi'
import Router, { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { login } from '../lib/authSlice'

function Signup() {
  const dispatch = useDispatch();
  const [loginFn,{error:loginError}] = useLoginMutation()

    const emailInp = useRef()

    const [regFn,{error:regError}] = useRegisterMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailInp.current.value
        const username = emailInp.current.value
        const password = "mc123456"
        regFn({
            email,
            username,
            password
        }).then(res => {
            if(!res.error){
              console.log('注册成功',res)
              loginFn({
                identifier:email,
                password:password
              }).then(resl => {
                if(!resl.error){
                  dispatch(login(
                    {
                      token:resl.data.jwt,
                      user:resl.data.user,
                    }
                  ))
                  Router.push("/pricing")
                }
              })
              
            }
        })
    }
  return (
    <>
    <Header />
    <div>
         <div className='flex md:h-[650px] items-center sm:h-[500px]'>
        <div className='flex md:w-3/6 sm:w-11/12 md:h-11/12 sm:h-11/12 mx-auto'>
          <div className='md:w-4/6 md:h-4/5  mx-auto '>
            <div className='mx-auto'>
                <div className='text-center text-[25px]'>Step1 of 3</div>
                <div className='mt-4 w-3/5 bg-[#d7d7d9] h-[7px] mx-auto rounded-3xl'>
                    <div className='w-1/3 bg-black h-[7px] rounded-2xl'></div>
                </div>
            </div>
            <form className='pt-3' onSubmit={handleSubmit}>
              <h1 className='text-center md:text-[50px] font-bold text-black text-opacity-80'>Create Account</h1>
              <Link href={'/'}>
                <div className='flex w-11/12 h-[54px] mx-auto mt-10 rounded-lg border-[#bfbfc3] border-[1px]'>
                  <Image src={Img2} alt='' className='ml-6'/>
                  <span className='flex items-center mx-auto text-[#282938] text-opacity-70'>Continue with Goolge</span>
                </div>
              </Link>
              <div className='w-11/12 h-[20px] mx-auto mt-4'>
                <div className='flex justify-between items-center'>
                    <div className='w-2/5 border-[0.7px] h-0'></div>
                    <div ><p className='text-black text-opacity-70'>or</p></div>
                    <div className='w-2/5 border-[0.6px] h-0'></div>
                </div>
              </div>
              <input ref={emailInp} type='email' name="email" placeholder="Enter your valid email" required className='pl-10 flex w-11/12 h-[54px] mt-5 mx-auto  rounded-lg border-[#bfbfc3] border-[1px] outline-blue-500'/>
              <p className='text-red-500 text-[14px] text-center'>
                {regError && "The email has already been taken."}
              </p>

              <div className='flex w-11/12 h-[20px] mx-auto mt-7'>
                <input type="checkbox"/>
                <h2 className='text-black text-[14px] font-bold pl-4'>By clicking“Continue”, you are accepting our<Link href={"/"} className="text-blue-700"> Terms of Use</Link>and<Link className="text-blue-700" href={"/"}> Privacy Policy</Link></h2>
              </div>
              <button type="submit" className='flex items-center justify-center w-11/12 h-[50px] bg-[#fcd980] mt-12 mx-auto  rounded-3xl '>Continue</button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    <Bottom/>
    </>
  )
}

=======
import React, { useRef, useState } from 'react'
import Bottom from './Bottom'
import Header from './Header'
import Img from '../image/logo-bg.svg'
import Image from 'next/image'
import Img2 from '../image/google-oauth.svg'
import Link from 'next/link'
import { useLoginMutation, useRegisterMutation } from '../lib/authApi'
import Router, { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { login } from '../lib/authSlice'

function Signup() {
  const dispatch = useDispatch();
  const [loginFn,{error:loginError}] = useLoginMutation()

    const emailInp = useRef()

    const [regFn,{error:regError}] = useRegisterMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailInp.current.value
        const username = emailInp.current.value
        const password = "mc123456"
        regFn({
            email,
            username,
            password
        }).then(res => {
            if(!res.error){
              console.log('注册成功',res)
              loginFn({
                identifier:email,
                password:password
              }).then(resl => {
                if(!resl.error){
                  dispatch(login(
                    {
                      token:resl.data.jwt,
                      user:resl.data.user,
                    }
                  ))
                  Router.push("/pricing")
                }
              })
              
            }
        })
    }
  return (
    <>
    <Header />
    <div>
         <div className='flex md:h-[650px] items-center sm:h-[500px]'>
        <div className='flex md:w-3/6 sm:w-11/12 md:h-11/12 sm:h-11/12 mx-auto'>
          <div className='md:w-4/6 md:h-4/5  mx-auto '>
            <div className='mx-auto'>
                <div className='text-center text-[25px]'>Step1 of 3</div>
                <div className='mt-4 w-3/5 bg-[#d7d7d9] h-[7px] mx-auto rounded-3xl'>
                    <div className='w-1/3 bg-black h-[7px] rounded-2xl'></div>
                </div>
            </div>
            <form className='pt-3' onSubmit={handleSubmit}>
              <h1 className='text-center md:text-[50px] font-bold text-black text-opacity-80'>Create Account</h1>
              <Link href={'/'}>
                <div className='flex w-11/12 h-[54px] mx-auto mt-10 rounded-lg border-[#bfbfc3] border-[1px]'>
                  <Image src={Img2} alt='' className='ml-6'/>
                  <span className='flex items-center mx-auto text-[#282938] text-opacity-70'>Continue with Goolge</span>
                </div>
              </Link>
              <div className='w-11/12 h-[20px] mx-auto mt-4'>
                <div className='flex justify-between items-center'>
                    <div className='w-2/5 border-[0.7px] h-0'></div>
                    <div ><p className='text-black text-opacity-70'>or</p></div>
                    <div className='w-2/5 border-[0.6px] h-0'></div>
                </div>
              </div>
              <input ref={emailInp} type='email' name="email" placeholder="Enter your valid email" required className='pl-10 flex w-11/12 h-[54px] mt-5 mx-auto  rounded-lg border-[#bfbfc3] border-[1px] outline-blue-500'/>
              <p className='text-red-500 text-[14px] text-center'>
                {regError && "The email has already been taken."}
              </p>

              <div className='flex w-11/12 h-[20px] mx-auto mt-7'>
                <input type="checkbox"/>
                <h2 className='text-black text-[14px] font-bold pl-4'>By clicking“Continue”, you are accepting our<Link href={"/"} className="text-blue-700"> Terms of Use</Link>and<Link className="text-blue-700" href={"/"}> Privacy Policy</Link></h2>
              </div>
              <button type="submit" className='flex items-center justify-center w-11/12 h-[50px] bg-[#fcd980] mt-12 mx-auto  rounded-3xl '>Continue</button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    <Bottom/>
    </>
  )
}

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default Signup