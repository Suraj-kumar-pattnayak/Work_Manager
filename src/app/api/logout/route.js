import { now } from "mongoose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request){
   
   const response =  NextResponse.json({
        message:"Logged Out!!!",
        success: true
    });
    response.cookies.set('loginCookie', '',{
         expiresIn: new Date(0),
     //     path:"/"
    });

    return response
}