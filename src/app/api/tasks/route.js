//all task

import { connectDB } from "@/helper/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request, {params}){
    await connectDB();

 const body= await request.json();
const {title, description,status,priority,createdAt} = body;


   
    try {
        let token = request.cookies.get("loginCookie")?.value
        // console.log("Token =", token);
        
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        // console.log("user-id =",decoded._id);
        
        const task = new Task({   //imp
            title,
            description,
            status,
            priority,
            createdAt,
            assignedTo :  decoded._id //dynamically
        });
        
      const ttask = await task.save();           //imp
        return NextResponse.json(ttask)
    } catch (error) {
        console.log("Error", error);

        return NextResponse.json({
            message:"Failed to add task !!!",
            success: false},
               { status: 500});
        
    }

}

export async function  GET(request, {params}){
    await connectDB();
    let tasks = [];
    try {
        tasks = await Task.find();
        
    } catch (error) {
        console.log("Error = ", error);

        return NextResponse.json({
            message:"Failed to find Users",
            success: false
        })
    }

    return NextResponse.json(tasks);
}