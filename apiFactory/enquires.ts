import { axiosInstance } from "./axios.config";

export const enquiryApiFactory = {
  createEnquiry(payload: any) {
    return axiosInstance.post("/enquires", payload);
  },
  getEnquiresById(id: string) {
    return axiosInstance.get(`/enquires/${id}`);
  },
  getEnquiresList() {
    return axiosInstance.get("/enquires");
  },
  updateEnquires(enquiry_id: string, payload: any){
    return axiosInstance.post(`/enquires/${enquiry_id}`, payload);
  },
  deleteEnquires(enquiry_id: string){
    return axiosInstance.delete(`/enquires/${enquiry_id}`);
  }
};