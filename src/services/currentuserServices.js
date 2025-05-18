import { httpAxios } from "@/helper/httpHelper";


export async function userprovider(){
try {

const response=   await httpAxios.get("/api/current" )     //error  //html data in case of deleted cookie

console.log("RSP",response)
return response.data
} catch (error) {
    console.log("Error=",error);
    
    throw error;
}
}