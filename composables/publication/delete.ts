import { publicationApiFactory } from "@/apiFactory/publication";

export const useDeletePublication = () => {
  const loading = ref(false);
  const publication_id = ref('')
  const deletePublication = async () => {
    loading.value = true;
    try {
      const response = await publicationApiFactory.deletePublication(publication_id.value);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success('Publication was deleted successfully.', {
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

  return { deletePublication, loading };
};
