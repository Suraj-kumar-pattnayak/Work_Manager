import mongoose, { Schema } from "mongoose";

const userSchema =  new Schema({      //imp
        name: {
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:[true, "password required..."]
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        living: Boolean,
        // address:{
        //     type:String,
        //     street:String,
        //     city:String,
        //     pin:Number,
        // }

   });
                                                    //"users" => collection bnega db m
export const User = mongoose.models.User || mongoose.model("User", userSchema);