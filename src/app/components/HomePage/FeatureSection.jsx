'use client'
import React from 'react'
import { FaUserPlus, FaTasks, FaRegChartBar } from 'react-icons/fa'
import { MdOutlineDashboard } from 'react-icons/md'

const FeatureSection = () => {
  const features = [
    {
      icon: <FaUserPlus className="text-4xl text-blue-700" />,
      title: 'User Management',
      description: 'Easily add, manage, and remove users with just a few clicks.'
    },
    {
      icon: <FaTasks className="text-4xl text-green-600" />,
      title: 'Task Assignment',
      description: 'Assign tasks with title, description, and custom status.'
    },
    {
      icon: <MdOutlineDashboard className="text-4xl text-yellow-500" />,
      title: 'Real-time Dashboard',
      description: 'Get an overview of all tasks and their current statuses instantly.'
    },
    {
      icon: <FaRegChartBar className="text-4xl text-purple-600" />,
      title: 'Progress Tracking',
      description: 'Track task progress as Completed, In Progress, or Pending.'
    }
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 font-serif">Features that Keep You Organized</h2>
        <p className="text-gray-600 mb-12 font-serif">
          Work Manager offers all the tools you need to stay productive and manage tasks effectively.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-110 transition duration-400 ease-in-out"

            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 font-serif mb-2">{feature.title}</h3>
              <p className="text-gray-600 font-serif">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
