'use client';
import React, { useContext, useState } from 'react'
import Image from 'next/image';
import loginsvg from '../../assets/login.svg'
import { login } from '@/services/loginService';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import UserContext from '@/context/userContext';

const Login = () => {
  const context = useContext(UserContext)

  const router = useRouter()
   const[loginData, setloginData] = useState({
        email:"",
        password:""
    })

    const dologin =  async(event)=>{
        event.preventDefault()
        console.log(loginData);
        
        try {
          const result = await login(loginData)
          // console.log(result);

          toast.success("User Login Successfully",
            {position: 'top-center'})

            context.setUser(result.user)
            // console.log("A",result);
            
            setloginData({
            email:"",
            password:""
        })
            router.push('/')
           }catch (error) {
          console.log(error);
          
          
          toast.error(error.response.data.message,     //this
            {position: 'top-center'})
          }
          setloginData({
            email:"",
            password:""
        })
        
    }

    const clearData = ()=>{
        setloginData({
            email:"",
            password:""
        })
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-gray-900 text-white w-full max-w-md rounded-2xl shadow-2xl p-8">
               <div className='mt-4 flex justify-center'> 
                 <Image src= {loginsvg} style={{
                  width:"40%" 
                 }}
                 alt='addBanner'
                 />
               </div>
            <h1 className='text-2xl text-center font-serif font-semibold'>Login here</h1>
            
            <form action="#!" onSubmit={dologin}>
            
            {/* email */}
            <div className='mt-4'>
              <label htmlFor="user_email" className='block mb-3 font-serif'>Email</label>
              <input type="email"
               name="user_email"
               id="user_email"
              className='w-full p-2.5 bg-gray-700  hover:bg-gray-600 rounded-2xl focus:ring-gray-300'
              onChange={(event)=>{
                setloginData({
                  ...loginData,
                  email: event.target.value
                })
              }}
              value={loginData.email}
              />
            </div>
            {/* password */}
            <div className='mt-4'>
              <label htmlFor="user_password" className='block mb-3 font-serif'>Password</label>
              <input type="password"
               name="user_password"
               id="user_password"
              className='w-full p-2.5 bg-gray-700  hover:bg-gray-600 rounded-2xl focus:ring-gray-300'
             onChange={(event)=>{
                setloginData({
                    ...loginData,
                    password : event.target.value
                })
             }}
             value={loginData.password}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={clearData}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Reset
            </button>
          </div>
            </form>
            {/* {JSON.stringify(loginData)} */}
            </div>
    </div>
  )
}

export default Login
