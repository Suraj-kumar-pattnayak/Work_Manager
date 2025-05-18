import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export async function POST(request) {
    await connectDB();

    const { email, password } = await request.json();
    try {
        const user = await User.findOne({
            email: email
             });
            
        // 2. If not found, throw error
        if (user == null) throw new Error("Email not Found !!!");

        // 3. Password check
        const matched = bcrypt.compareSync(password, user.password);
        if (!matched) {throw new Error("Password not matched !!!");}

        // 4. Generate JWT token
        
        const token = jwt.sign(
            {
                _id: user._id,
                name: user.name
            },
            process.env.JWT_KEY
            
            
        );

        // 5.  response -> variable
        const response = NextResponse.json({
            user: user
        });

        // 6. Set cookie with token
         
        response.cookies.set("loginCookie", token, {
             expiresIn: "1d",
            
             httpOnly:true 
        });

        return response;
    

    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false},
            {status: 401});
    }
}
