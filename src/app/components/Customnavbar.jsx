'use client';

import Link from "next/link";
import UserContext from "@/context/userContext";
import { useContext } from "react";
import { logout } from "@/services/logoutService";
import { useRouter } from "next/navigation";

const Customnavbar = () => {

const router = useRouter()
const context =  useContext(UserContext)
console.log(context);
async function gotoLogout(){
    try {
      const result = await logout()
      context.setUser(undefined)
      router.push('/signup')
    } catch (error) {
      console.log(error);
      
    }
}
  return (
    <nav className="bg-gray-100 text-black h-12 px-3 py-2 flex justify-between items-center">
      <div className="brand">
        <h1>
        <Link href=""
  className=" font-serif font-bold inline-block hover:text-stone-500  transition-all duration-500 transform hover:scale-[1.2]"  
>Work manager</Link>

        </h1>
      </div>
      <div className="menu">
        <ul className="flex space-x-6">
          {context.user && 
            <>
            <li>
            <Link href="/" className=" font-serif inline-block hover:text-stone-500 transition-all duration-500 transform hover:scale-[1.2]">
            Home</Link>
          </li>
          <li>
            <Link href="/add-task" className="font-serif inline-block hover:text-stone-500 transition-all duration-500 transform hover:scale-[1.2]">
            Add Task</Link>
          </li>
          <li>
            <Link href="/show-task " className="font-serif inline-block hover:text-stone-500 transition-all duration-500 transform hover:scale-[1.2]">
            Show Task</Link>
          </li>
            </>
          }
        </ul>
      </div>
      <div className="login">
        <ul className="flex space-x-3">
          {!context.user && 
            <>
            <li>
            <Link href="/login" className="font-serif inline-block hover:text-stone-500  transition-all duration-500 transform hover:scale-[1.2]">
            Login</Link>
          </li>
          <li>
            <Link href="/signup" className="font-serif inline-block hover:text-stone-500  transition-all duration-500 transform hover:scale-[1.2]">
              Sign up</Link>
          </li>
            </>
          }
          {context.user &&
            <>
            <li>
            <a href="#!" className="font-serif inline-block hover:text-stone-500  transition-all duration-500 transform hover:scale-[1.2]">
            {context.user.name}</a>
          </li>
          <li>
            <button  onClick={gotoLogout} className="font-serif inline-block hover:text-stone-500  transition-all duration-500 transform hover:scale-[1.2]">
              Logout</button>
          </li>
            </>
          }
        </ul>
      </div>
    </nav>
  )
}
export default Customnavbar


