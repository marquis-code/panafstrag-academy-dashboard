import { publicationApiFactory } from "@/apiFactory/publication";

export const useGetAllPublication = () => {
  const loading = ref(false);
  const publicationList = ref([
    // {
    //   _id: '1',
    //   programTitle: 'Test Event 1',
    //   programDescription: 'Test Event 1 description',
    //   programRecordingUrl: 'https://trendybeatz.com/download-mp3/50164/joeboy-adenuga-ft-qing-madi',
    //   programDate: '12-12-2015',
    //   programImageUrl: 'https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // }
  ]) as any;
  const getPublications = async () => {
    loading.value = true;
    try {
      const response = await publicationApiFactory.getPublicationsList();
      publicationList.value = response.data.publications;
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

  return { getPublications, publicationList, loading };
};
