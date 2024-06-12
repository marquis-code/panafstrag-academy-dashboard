import { eventApiFactory } from "@/apiFactory/events";

export const useGetAllEvents = () => {
  const loading = ref(false);
  const eventsList = ref([]) as any;
  const getEvents = async () => {
    loading.value = true;
    try {
      const response = await eventApiFactory.getEventsList();
      eventsList.value = response.data.events;
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

  return { getEvents, eventsList, loading };
};
