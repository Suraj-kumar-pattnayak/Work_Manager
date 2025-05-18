import UserContext from '@/context/userContext';
import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
const Task = ({task, deleteTaskbyParent}) => {

   function  deleteTask(taskid) {
    try {
       deleteTaskbyParent(taskid)
    } catch (error) {
      console.log(error);
      
    }
  }
  return <div className= {`shadow-lg mt-2 rounded-md ${
    task.status == "completed" ? "bg-green-800": task.status == "in progress" ? "bg-amber-600" :  "bg-red-700"

  }`}>
    <div className='p-5'>
        <div className='flex justify-between'><h1 className='text-2xl font-semibold font-mono'>{task.title}</h1>
        <MdDelete onClick={()=>deleteTask(task._id)} className='bg-gray-950 hover:bg-gray-500 h-6 w-6  cursor-pointer'/></div>
        <p className='font-normal font-serif'>{task.description}</p>
        <p className='text-right font-semibold font-serif'> status:{task.status}</p>
        
    </div>
  </div> 

}

export default Task