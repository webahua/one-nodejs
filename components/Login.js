import React, { useState } from 'react'
import Bottom from '../components/Bottom'
import Header from '../components/Header'
import Img from '../image/logo-bg.svg'
import Image from 'next/image'
import Img2 from '../image/google-oauth.svg'
import Link from 'next/link'
import { fetcher } from '../lib/api'
import Router, {useRouter } from 'next/router'
import { useLoginMutation } from '../lib/authApi'
import { useDispatch } from 'react-redux'
import { login } from '../lib/authSlice'


function Login() {
  const dispatch = useDispatch();
  const [loginFn,{error:loginError}] = useLoginMutation()
  const [data,setData] = useState({
    identifier:'',
    password:''
});
  const handleSubmit = (e) => {
    e.preventDefault();
    loginFn({
      identifier:data.identifier,
      password:data.password
    }).then(res => {
      if(!res.error){
        dispatch(login(
          {
            token:res.data.jwt,
            user:res.data.user,
          }
        ))
        console.log('登录成功',res)
        Router.push("/pricing")
      }
    })
    
  }

  const handleChange = (e) => {
    setData({...data,[e.target.name]: e.target.value})
  }
  console.log("11",data)

  return (
    <>
    <Header />
      <div className='flex md:h-[850px] bg-[#eee] items-center sm:h-[650px]'>
        <div className='flex md:w-3/6 sm:w-11/12  sm:h-11/12 md:h-4/5 mx-auto items-center bg-white'>
          <div className='sm:w-5/6  h-4/5  mx-auto '>
            <div className=''><Image src={Img} alt='' className='mx-auto'></Image></div>
            <form className='pt-10' onSubmit={handleSubmit}>
              <h1 className='text-center md:text-[30px] font-bold'>Sign in to Your Spyx Account</h1>
              <Link href={'/'}>
                <div className='flex w-11/12 h-[54px] mx-auto mt-6 rounded-lg border-[#bfbfc3] border-[1px]'>
                  <Image src={Img2} alt='' className='ml-6'/>
                  <span className='flex items-center mx-auto text-[#282938] text-opacity-70'>Continue with Goolge</span>
                </div>
              </Link>
              <p className='text-red-500 text-[14px] text-center'>
                {loginError && "Incorrect username or password"}
              </p>
              <input onChange={handleChange} type='text' name="identifier" placeholder="your email" required className='pl-10 flex w-11/12 h-[54px] mt-5 mx-auto  rounded-lg border-[#bfbfc3] border-[1px] outline-blue-500'/>
              <input onChange={handleChange} type='password' name="password" placeholder="Password" required className='pl-10 flex w-11/12 h-[54px] mt-5 mx-auto  rounded-lg border-[#bfbfc3] border-[1px] outline-blue-500'/>
              <button type="submit" className='flex items-center justify-center w-11/12 h-[54px] bg-[#fcd980] mt-6 mx-auto  rounded-3xl border-[#bfbfc3] border-[1px] text-[20px]'>Login</button>
            </form>
            <Link href={"/"}><h2 className='mt-[70px] text-[14px] text-[#2405f2] text-center underline'>Forgot Password?</h2></Link>
            <Link href={"/"}><h2 className='mt-2 text-[14px] text-[#2405f2] text-center underline'>Dont have an account yet?</h2></Link>
          </div>
          
        </div>
      </div>
     <Bottom/>
    </>
  )
}

export default Login