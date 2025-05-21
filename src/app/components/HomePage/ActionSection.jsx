'use client'
import React from 'react'
// import bgImage from '@/assets/action-bg.jpg' // Use your own image in /public or /assets
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ActionSection = () => {
  const router = useRouter()
  
  function gotoAdd(){
   router.push("/add-task")
  }
  return (
    <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg mt-10">
      {/* Background Image */}
      {/* <Image
        src={bgImage}
        alt="Action Background"
        fill
        className="object-cover"
        priority
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
          Ready to Organize Your Work?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 font-serif mb-6 max-w-2xl">
          Join Work Manager today and experience streamlined user management, effortless task handling, and real-time progress tracking.
        </p>
        <button onClick={gotoAdd}  className="bg-white text-blue-900 hover:bg-blue-200 transition duration-300 font-semibold py-2 px-6 rounded-full font-serif">
          Start Now
        </button>
      </div>
    </div>
  )
}

export default ActionSection
