'use client';
import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-100 text-black p-6" >
      <div className='flex justify-around'>
      <div>
        <h1>Welcome to Work manager</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <h1>Follow Us</h1>
        <ul> 
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Linkedin</li>
        </ul>
      </div>
     </div>
     </footer>
  )
}

export default Footer