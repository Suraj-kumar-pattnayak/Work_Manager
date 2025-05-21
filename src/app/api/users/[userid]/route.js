import { NextResponse } from "next/server";
import { User } from "@/models/user";

//params get the userId
//then fetch it    //url
//delete user
export async function DELETE(request, {params}){
    
    const {userid} = params;     //destructure

    try {
        await User.deleteOne({            //imp
            _id: userid
        });

        return NextResponse.json({
            message:"User deleted successfully...",
            success:true
        });
    } catch (error) {
        console.log("Error = ",error);
        return NextResponse.json({
            message:" failed to delete User...",
            success:false
        });
        
    }







    // // console.log(params);
    // const {userid} = params;                        //destructure
    // console.log("userid = ",userid);
    // // console.log("userid = ", params.userid);
    // return NextResponse.json(
    //     // {message: "Testing Delete",},
    //     {userid},
    //     // params
    // )
}

//single user find   //get single user
//using params  //url

export async function GET(request, {params}){

    const {userid} = params;
    await connectDB();
   try {
    const storeuser =await User.findById({          //imp
        _id: userid
    });

   return NextResponse.json(storeuser,{
        message:"User find succecfully",
        success:true
    });
   } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to find User",
            success:false
        });
   }
}


//similiar ilke post   ->//fetch user details from request     //post m v ho sakta h
//updating user by getting id by params ->url           
export async function PUT(request, {params}) {
    

    // user.name = name; ->  SECOND ONE          //data from client  //post
    const {name, password} = await request.json();
    //data  from params //url //DR
    const {userid} = params;

    try {
    // user.name = name; -> FIRST ONE
    await connectDB();
    const user = await User.findById(userid);
    user.name = name;                           //update
    user.password = password;

    return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({
            message:"Failed to update user...",
            status: false
        });
    }

}
