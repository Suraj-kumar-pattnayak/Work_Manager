import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { User } from "@/models/user";
export async function GET(request) {
try {
      // console.log("1");
   
   const loginCookie = request.cookies.get("loginCookie")?.value
   // console.log("2");


    const decoded =  jwt.verify(loginCookie, process.env.JWT_KEY)     //error
   //  console.log("3");
   //  console.log(decoded);
   
    
    //find whole detail by id                        //learn diff betn decoded and user why diff output

    
    const user = await User.findById(decoded._id)  //why this line not working
   //  console.log(user);
   //  console.log("4");
   return NextResponse.json(user);
} catch (error) {
   // console.log("5");
   
   console.log("Error = ",error);
   return undefined;
}

   
}