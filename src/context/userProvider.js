'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
// import { httpAxios } from '@/helper/httpHelper'
import { userprovider } from '@/services/currentuserServices'
import { toast } from 'react-toastify'

const UserProvider =  ({children}) => {

  
    const [user, setUser] = useState('')
    
   useEffect(()=>{
    const fetchCurrentUser = async()=>{
      try {

    
     const currentuser = await userprovider(undefined)  
    //  console.log(currentuser);
    
     

     
    
    
    setUser({...currentuser});  
      
    } catch (error) {
        console.log(error);
        // toast.error("Error in loading current page!!",        //this
        //   {position: 'top-center'}
        // )
        setUser(undefined)
    }
    }
    fetchCurrentUser()
   }, []);


  return <UserContext.Provider value={{user, setUser}}>
    {children}
  </UserContext.Provider>
}

export default UserProvider


