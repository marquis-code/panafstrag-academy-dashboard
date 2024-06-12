import { publicationApiFactory } from "@/apiFactory/publication";

export const useUpdatePublication = () => {
  const loading = ref(false);
  const publicationUpdatePayload = ref({})
  const publication_id = ref('')
  const updatePublication = async () => {
    loading.value = true;
    try {
      const response = await publicationApiFactory.updatePublication(publication_id.value, publicationUpdatePayload);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success('Publication was updated successfully.', {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
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

  return { updatePublication, publicationUpdatePayload, loading };
};
