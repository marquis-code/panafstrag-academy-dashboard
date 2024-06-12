import { eventApiFactory } from "@/apiFactory/events";
export const useGetEventById = () => {
  const eventId = useRoute().params.id as any;
  const eventObject = ref({}) as any;
  const loading = ref(false);
  const getEventById = async () => {
    loading.value = true;
    try {
      const response = await eventApiFactory.getEventsById(eventId);
      if(typeof response !== "undefined") {
        eventObject.value = response.data.event;
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

  return { getEventById, eventObject, loading };
};
