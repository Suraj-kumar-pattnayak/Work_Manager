import mongoose from "mongoose";

//states 0 ->disconnected, 1-> connected
const config = {
    isConnected: 0,
}
export async function connectDB(){
                        //asynchonous  -> synchronous    so async await
    //if already connected => return
    if(config.isConnected == 1) return;
        
    try{                
       const {connection} = await mongoose.connect(process.env.MONGO_DB_URL, {   //imp
            dbName : "work_manager",
        });

        console.log("connection established suseccfully...");
        console.log(connection.readyState);
        config.isConnected = connection.readyState;
        // console.log("connection = ", connection);

        // console.log("working with this host ",connection.host);
        
        //tetsing and creating mew user model  
          
          
    }
    catch(error){
        console.log("failed to connect with Database....");
        console.log("Error=", error);
    }
}
