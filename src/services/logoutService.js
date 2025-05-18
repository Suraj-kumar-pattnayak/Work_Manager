import { httpAxios } from "@/helper/httpHelper";

export async function logout(){
try {
const response=   await httpAxios
.post("/api/logout")

return response.data
} catch (error) {
    throw error;
}
}