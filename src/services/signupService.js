import { httpAxios } from "@/helper/httpHelper";

export async function signup(user) {
  try {
    const response = await httpAxios.post("/api/users", user);
    return response.data;
  } catch (error) {
    // Rethrow the error so the calling function can catch it
    throw error.response || error;
  }
}
