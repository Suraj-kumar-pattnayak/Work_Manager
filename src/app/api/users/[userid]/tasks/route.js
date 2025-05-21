//users/[userid]/tasks
import { Task } from "@/models/task";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JsonWebTokenError } from "jsonwebtoken";
export async function  GET(request, {params}){
   
    // const {userid} = params;    //second one   //jwt code   cookies k through
    let tasks = [];
    const token = request.cookies.get("loginCookie")?.value
    const decoded = jwt.verify(token, process.env.JWT_KEY)
    try {
        await connectDB();
       tasks = await Task.find({
            assignedTo: decoded._id     //new     
            //                 //first one is from task schema bcs i save user as assignedTo
        });

    } catch (error) {
        console.log("Error = ", error);

        return NextResponse.json({
            message:"Failed to find Users",
            success: false
        })
    }

    return NextResponse.json(tasks);
}
