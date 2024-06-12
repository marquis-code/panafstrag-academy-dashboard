import { eventApiFactory } from "@/apiFactory/events";

export const useDeleteEvent = () => {
  const loading = ref(false);
  const event_id = ref('')
  const deleteEvent = async () => {
    loading.value = true;
    try {
      const response = await eventApiFactory.deleteEvent(event_id.value);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success('Event was deleted successfully.', {
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

  return { deleteEvent, loading };
};
