import { publicationApiFactory } from "@/apiFactory/publication";

export const useGetAllPublication = () => {
  const loading = ref(false);
  const PublicationList = ref([]) as any;
  const getPublication = async () => {
    loading.value = true;
    try {
      const response = await publicationApiFactory.getPublicationsList();
      PublicationList.value = response.data.publications;
    } catch (error: any) {
      useNuxtApp().$toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { getPublication, PublicationList, loading };
};
