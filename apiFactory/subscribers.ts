import { axiosInstance } from "./axios.config";

export const subscriberApiFactory = {
  createSubscriber(payload: any) {
    return axiosInstance.post("/subscriber", payload);
  },
  getSubscriberById(id: string) {
    return axiosInstance.get(`/subscriber/${id}`);
  },
  getSubscriberList() {
    return axiosInstance.get("/subscriber");
  },
  updateSubscriber(enquiry_id: string, payload: any){
    return axiosInstance.post(`/subscriber/${enquiry_id}`, payload);
  },
  deleteSubscriber(enquiry_id: string){
    return axiosInstance.delete(`/subscriber/${enquiry_id}`);
  }
};