'use client'
import UserContext from '@/context/userContext'
import { getTasksofUser } from '@/services/taskService'
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task'
import { delTasksofUser } from '@/services/taskService'
const ShowTask = () => {

const [tasks, setTasks] = useState([])
const context = useContext(UserContext)
// console.log(context);
async function deleteTaskbyParent(taskid) {
  try {
  const res = await delTasksofUser(taskid)
  console.log(res);

  const newtasks = tasks.filter(item=> item._id != taskid)
  setTasks(newtasks)
  toast.success("Task Deleted !!!", {
  position: "top-center"
  });
  } catch (error) {
  console.log(error);
  toast.error("Failed to Delete task !!!", {
  position: "top-center"
  });
  }
  
}

async function loadTasks(userId){
 try{
    const tasks = await getTasksofUser(userId)
    console.log(tasks);
    
    setTasks([...tasks].reverse())
    } catch (error) {
      console.log(error);
      
    }
  }

useEffect(()=>{
  loadTasks(context?.user?._id)
},[])

  return (
    <div className=' grid grid-cols-12 mt-3'>
      <div className='col-span-6 col-start-4'>
         <h1 className='text-2xl mb-2 font-serif '>Your Task  ({tasks.length})</h1>   
         {/* loop */}
         {tasks.map((task)=>(
          <Task task = {task} key={task._id}
          deleteTaskbyParent={deleteTaskbyParent}/>
         ))}
      </div>
    </div>
  )
}

export default ShowTask