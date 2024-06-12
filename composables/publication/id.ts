import { publicationApiFactory } from "@/apiFactory/publication";
export const useGetPublicationById = () => {
  const publicationId = useRoute().params.id as any;
  const publicationObject = ref({}) as any;
  const loading = ref(false);
  const getPublicationById = async () => {
    loading.value = true;
    try {
      const response = await publicationApiFactory.getPublicationById(publicationId);
      if(typeof response !== "undefined") {
        publicationObject.value = response.data.event;
      }
    } catch (error: any) {
      useNuxtApp().$toast.success(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      loading.value = false;
    }
  };

  return { getPublicationById, publicationObject, loading };
};
