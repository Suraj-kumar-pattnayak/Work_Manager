"use client";
import React from 'react';
import {useState} from 'react';
import Image from 'next/image';
import addtasksvg from '../../assets/add_task.svg'
import { addTask } from '@/services/taskService';


const AddTask = () => {
  
    const [task, setTask] = useState({
    title: "",
    description:"",  
    status:"pending",
    
  })

  const  doAddtask = async (event)=>{
    event.preventDefault();
    console.log(task);
    
    try {           //services
    const result=   await addTask(task)
    console.log(result);
    //success
    setTask({
    title: "",
    description:"",  
    status:"pending", 
    })
  
    } catch (error) {
      console.log(error);
      
    } 
  }

 const  clearData= ()=>{
  setTask({
    title: "",
    description:"",  
    status:"pending", 
  })
 }
    return (
    <div className='grid grid-cols-12'>
        <div className='border col-span-4 col-start-5 shadow-amber-700 shadow p-3'>
           <div className='mt-4 flex justify-center'> 
             <Image src= {addtasksvg} style={{
              width:"60%" 
             }}
             alt='addBanner'
             />
           </div>
          <h1 className='text-2xl text-center font-serif font-semibold'>Add your task here</h1>

          <form action= "#!"  onSubmit={doAddtask}>
            {/* title */}
            <div className='mt-4'>
              <label htmlFor='task_title' className='font-serif block mb-3'>Title</label>
              <input 
               type='text'
               className='w-full p-2.5 bg-gray-700 rounded-2xl hover:bg-gray-600 focus:ring-gray-300'
               id='task_title'
               name='task_title'
               onChange={(event)=>{                 //field change-> variable change
                setTask({
                  ...task,
                  title: event.target.value
                })
               }}                              //two way binding
               value = {task.title}          //variable m change -> field m reflect
               />
            </div>

            {/* description */}
            <div className='mt-4'>
              <label htmlFor='task_description' className='font-serif block mb-3'>Description</label>
              <textarea 
              className=' w-full p-2.5 bg-gray-700  hover:bg-gray-600 rounded-2xl focus:ring-gray-300'
              id='task_description'
              rows={3}
              name='task_description'
               onChange={(event)=>{
                setTask({
                  ...task,
                  description: event.target.value
                })
               }}
               value = {task.description}
              />
            </div>

            {/* status */}
            <div className='mt-4'>
              <label htmlFor='task_status' className='font-serif block mb-3'>Status</label>
              <select 
              className=' w-full p-2.5 bg-gray-700 hover:bg-gray-600 rounded-2xl focus:ring-gray-300'
              // defaultValue=""
              name='task_status'
              onChange={(event)=>{
                setTask({
                  ...task,
                  status: event.target.value
                })
              }}
              value={task.status}
               >
                <option value='' className='font-serif' disabled>---Select Status---</option>
                <option value="pending" className='font-serif'>pending</option>
                <option value='completed' className='font-serif'>completed</option>
                <option value = 'in progress' className='font-serif'>in progress</option>
              </select>
            </div>

            <div className='mt-4 flex justify-end'>
            <button type='submit'
            className='font-serif bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded-lg'>Add task</button>
            <button  onClick={clearData} type='button'
            className='font-serif bg-red-600 hover:bg-red-700  px-3 py-2 rounded-lg ms-3'>Clear</button>
            </div>
            {/* {JSON.stringify(task)} */}
            
          </form>
        </div>
    </div>
  )
  
}

export default AddTask