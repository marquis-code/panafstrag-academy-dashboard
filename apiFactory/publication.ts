import { axiosInstance } from "./axios.config";

export const publicationApiFactory = {
  createPublication(payload: any) {
    return axiosInstance.post("/publication", payload);
  },
  getPublicationById(id: string) {
    return axiosInstance.get(`/publication/${id}`);
  },
  getPublicationsList() {
    return axiosInstance.get("/publication");
  },
  updatePublication(publication_id: string, payload: any){
    return axiosInstance.post(`/publication/${publication_id}`, payload);
  },
  deletePublication(publication_id: string){
    return axiosInstance.delete(`/publication/${publication_id}`);
  }
};