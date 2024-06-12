import { publicationApiFactory } from "@/apiFactory/publication";

export const useCreatePublication = () => {
  const loading = ref(false);
  const publicationPayload = ref({})

  const createPublication = async () => {
    loading.value = true;
    try {
      const response = await publicationApiFactory.createPublication(publicationPayload.value);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success('New publication was successfully created', {
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


  const isCreateFormEmpty = computed(() => {
    return publicationPayload.value
  })

  return { createPublication, publicationPayload, loading, isCreateFormEmpty };
};
