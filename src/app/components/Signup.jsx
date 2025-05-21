"use client";
import React from 'react';
import {useState} from 'react';
import Image from 'next/image';
import signupsvg from '../../assets/signup2.svg'
import { signup } from '@/services/signupService';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// import { addTask } from '@/services/taskService';

  const Signup = () => {
     const router =  useRouter()
      const [user, setUser] = useState({
      name:"",
      email:"",
      password:"",
      confirmPassword: ""
    })
  
    const  dosignUp = async (event)=>{
      event.preventDefault();
      console.log(user);

      if(user.password == '') {
      toast.error("Please Enter Passwords !", {
      position: "top-center"
      });  return;}
      

      if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match!", {
      position: "top-center"
      });  return;}

      try {           //services
        const result = await signup(user)
        
        //check for same email signup
        
        console.log(result);
        toast.success("User SignUp Successfull", {
        position: "top-center"
        })
        setUser({
      name:"",
      email:"",
      password:"",
      confirmPassword: ""
      })
      router.push("/login")
        
      } catch (error) {
        console.log("SOMETHING WENT WRONG");
        toast.error("Email already in use!")  
      }
    }
    const clearData = ()=>{
      setUser({
      name:"",
      email:"",
      password:"",
      confirmPassword: ""
      })
    }

const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-gray-900 text-white w-full max-w-md rounded-2xl shadow-2xl p-8">
          <div className='mt-4 flex justify-center'>
                <Image src={signupsvg}
                 style={{ width:"50%"}}
                 alt='signup banner'
                />
          </div>
            <div>
                <h1 className='text-2xl text-center font-serif font-semibold'>SignUp Here</h1>
            </div>
            <form action="#!" onSubmit={dosignUp}>
            {/* name */}
            <div className='mt-4'>
              <label htmlFor="user_name" className='block mb-3 font-serif'>Name</label>
              <input type="text"
               name="user_name"
               id="user_name"
              className='w-full bg-gray-700  hover:bg-gray-600 rounded-2xl focus:ring-gray-300 py-2.5'
              onChange={(event)=>{
                setUser({
                  ...user,
                  name:event.target.value
                })
              }}
              value={user.name}
              />
            </div>
            {/* email */}
            <div className='mt-4'>
              <label htmlFor="user_email" className='block mb-3 font-serif'>Email</label>
              <input type="email"
               name="user_email"
               id="user_email"
              className='w-full p-2.5 bg-gray-700  hover:bg-gray-600 rounded-2xl focus:ring-gray-300'
              onChange={(event)=>{
                setUser({
                  ...user,
                  email: event.target.value
                })
              }}
              value={user.email}
              />
            </div>
            {/* password */}
            <div className='mt-4'>
            <label htmlFor="user_password" className='block mb-3 font-serif'>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="user_password"
                id="user_password"
                className='w-full p-2.5 bg-gray-700 hover:bg-gray-600 rounded-2xl focus:ring-gray-300 pr-10'
                onChange={(event) => {
                  setUser({ ...user, password: event.target.value });
                }}
                value={user.password}
              />
              <span
               onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
             </span>
           </div>
          </div>

            
            {/* confirm password */}
            <div className='mt-4'>
            <label htmlFor="user_confirm_password" className='block mb-3 font-serif'>Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="user_confirm_password"
                id="user_confirm_password"
                className='w-full p-2.5 bg-gray-700 hover:bg-gray-600 rounded-2xl focus:ring-gray-300 pr-10'
                onChange={(event) => {
                  setUser({ ...user, confirmPassword: event.target.value });
                }}
                value={user.confirmPassword || ""}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 cursor-pointer text-white"
              >
               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>



            <div className="flex items-center justify-between mt-4">
              <button
              type='submit'
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition"
              >Signup</button>

              <button
              type='button'
              onClick={clearData}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
              >Reset</button>
            </div>
            </form>
            {/* {JSON.stringify(user)} */}
        </div>
    </div>
  )
}

export default Signup
