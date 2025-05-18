'use client'
import React from 'react'
import tasklistsvg from '@/assets/tasklist.svg'
import Image from 'next/image';

const BannerSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Welcome to work Manager
          </h1>
          <p className="text-lg md:text-xl mb-6 font-serif">
            Organize your tasks efficiently with our task manager app
          </p>
          <button className="bg-white text-blue-900 hover:bg-blue-100 font-semibold py-2 px-6 rounded-full transition duration-300 font-serif">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src={tasklistsvg}
            alt="Banner"
            className="rounded-lg shadow-lg"
            style={{width:"40%", height:"40%"}}
          />
        </div>
      </div>
    </div>
  )
}

export default BannerSection
