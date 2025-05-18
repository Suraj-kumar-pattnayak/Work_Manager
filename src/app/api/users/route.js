import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from 'bcrypt'
import { toast } from "react-toastify";

//post request function      //testing request
//create user api // by fetching details help of request through (PM->body->row->json) client
export async function POST(request) {

    await connectDB();
    //fetch user details from request
    const {name, email, password, living, createdAt}=  await request.json();    //imp


    const user = new User({               //imp
        name,                             // creating an object of schema type 
        email,
        password,
        living,
        createdAt
    });

//  //same email generation failed message
// const checkUsers = await User.findOne({email: user.email}) 
// // console.log(checkUsers);
 


try {
    //password encrypt for security // Store hash in your password DB.
    user.password = bcrypt.hashSync(user.password,
        parseInt(process.env.BCRYPT_SALT)
    )
    //save the object to database                
   await user.save();                      //imp

   return NextResponse.json(
    user,  {status: 201}
   ); 
} catch (error) {
    
    console.log("Failed to create user at DB");
    return NextResponse.json({
        message:"Failed to create user at DB",
        status: 500},{
            status:500
        }
    );  
}

}

//get request function    //get all user info.
export async function GET(request) {
    await connectDB();
    let users= [];
    try {
       users = await User.find()                    ///imp

    } catch (error) {
        console.log("error = ",error);
        return NextResponse.json({
            message:"Failed to find user...",
            status:false
            
        });
    }
    return  NextResponse.json(users);
    
}



// //delete request function
// export function DELETE(request) {
//     connectDB();
//     return NextResponse.json({
//         message:"Message deleted",
//     }
//     , 
//     {
//         status:301,
//         statusText:"hi",
//     }
// )
// }

//put request function
// export function PUT() {

//     connectDB();

// }

