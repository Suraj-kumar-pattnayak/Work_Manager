//for service of api

import { httpAxios } from "@/helper/httpHelper";



export async function addTask (task)  {
  try {
  const response = await httpAxios.post("/api/tasks", task);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
}


export async function getTasksofUser(userid){
  try {
  const response = await httpAxios.get(`/api/users/${userid}/tasks`);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
}


export async function delTasksofUser(taskid){
  try {
  const response = await httpAxios.delete(`/api/tasks/${taskid}`);
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
}