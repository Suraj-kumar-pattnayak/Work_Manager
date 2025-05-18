import mongoose, {Schema} from "mongoose";
import { User } from "./user";

 const taskSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    status:{
        type:String,
        enum: ["pending", "completed", "in progress"],
        default:"pending"
    },
    priority:{
        type:String,
        enum: ["low", "medium", "high"]
    },
    // dueDate: Date,
                                                           
    createdAt:{
        type:Date,
        default:Date.now
    },


    //LINKAGE WITH USER    // try to name userid
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required: true
    }
 });
                                                    //"Task" => collection bnega db m
export const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);