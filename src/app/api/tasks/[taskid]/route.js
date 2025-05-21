//specific find or another operation
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const {taskid} = params;
   try {
    await connectDB();
    const task = await Task.findById({
        _id:taskid
    });
    return NextResponse.json(task);
   } catch (error) {
        console.log(error);

        return NextResponse.json({
            message:"Failed to find task",
            success:false
        }); 
   }
}

export async function DELETE(request, {params}){

    const {taskid} = params;
   try {
    const task = await Task.deleteOne({
        _id:taskid
    });
    return NextResponse.json({
        message:"Task deleted successfully",
        success:true
    });
   } catch (error) {
        console.log(error);

        return NextResponse.json({
            message:"Failed to delete task",
            success:false
        }); 
   }
}
//update
export async function PUT(request, {params}){

    const {description,status,priority,createdAt,assignedTo}=await request.json();

    const {taskid} = params;
    try {
      const task = await  Task.findById(taskid);
        task.description = description;
        task.status = status;
        task.priority = priority;
        task.createdAt = createdAt;
        task.assignedTo = assignedTo;
        console.log(task.assignedTo);

        await connectDB();
        await task.save();         //save permanently in DB
        return NextResponse.json(task);
    } catch (error) {
        console.log("Error = ", error);
        return NextResponse.json({
            message:"Failed to update task",
            success: false,
        },{
            status:500,
            statusText:"Internal Error"
        }
    )
        
    }
}
