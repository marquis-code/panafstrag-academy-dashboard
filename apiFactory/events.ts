import { axiosInstance } from "./axios.config";

export const eventApiFactory = {
  createEvent(payload: any) {
    return axiosInstance.post("/event", payload);
  },
  getEventsById(id: string) {
    return axiosInstance.get(`/event/${id}`);
  },
  getEventsList() {
    return axiosInstance.get("/event");
  },
  updateEvent(event_id: string, payload: any){
    return axiosInstance.post(`/event/${event_id}`, payload);
  },
  deleteEvent(event_id: string){
    return axiosInstance.delete(`/event/${event_id}`);
  }
};