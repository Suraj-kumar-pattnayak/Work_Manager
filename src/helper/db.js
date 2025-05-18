import mongoose from "mongoose";

export async function connectDB(){
                        //asynchonous  -> synchronous    so async await
    try{                
       const {connection} = await mongoose.connect(process.env.MONGO_DB_URL, {   //imp
            dbName : "work_manager",
        });

        console.log("connection established suseccfully...");
        // console.log("connection = ", connection);

        // console.log("working with this host ",connection.host);
        
        //tetsing and creating mew user model  
          
          
    }
    catch(error){
        console.log("failed to connect with Database....");
        console.log("Error=", error);
    }
}