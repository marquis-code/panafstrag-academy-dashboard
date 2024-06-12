import { eventApiFactory } from "@/apiFactory/events";

export const useCreateEvent = () => {
  const loading = ref(false);
  const eventPayload = ref({})

  const createEvent = async () => {
    loading.value = true;
    try {
      const response = await eventApiFactory.createEvent(eventPayload.value);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success('New event was successfully created', {
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
    return eventPayload.value
  })

  return { createEvent, eventPayload, loading, isCreateFormEmpty };
};
