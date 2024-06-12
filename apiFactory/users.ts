import { axiosInstance } from "./axios.config";

export const userApiFactory = {
  getUserById(id: string) {
    return axiosInstance.get(`/user/${id}`);
  },
  getUsersList() {
    return axiosInstance.get("/user");
  },
  updateUser(user_id: string, payload: any){
    return axiosInstance.post(`/user/${user_id}`, payload);
  },
  deleteUser(user_id: string){
    return axiosInstance.delete(`/user/${user_id}`);
  }
};