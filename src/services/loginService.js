import { httpAxios } from "@/helper/httpHelper";

export async function login(loginData){
try {
const response=   await httpAxios
.post("/api/login", loginData)

return response.data
} catch (error) {
    throw error;
}
}