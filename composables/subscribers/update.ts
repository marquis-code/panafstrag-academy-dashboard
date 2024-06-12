import { eventApiFactory } from "@/apiFactory/events";

export const useUpdateEvent = () => {
  const loading = ref(false);
  const eventUpdatePayload = ref({
    programTitle: '',
    programDescription: '',
    programRecordingUrl: '',
    programDate: '',
    programImageUrl: ''
  }) as Record<string, any>
  const event_id = ref('')
  const updateEvent = async () => {
    loading.value = true;
    try {
      const response = await eventApiFactory.updateEvent(event_id.value, eventUpdatePayload);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success('Event was updated successfully.', {
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

  return { updateEvent, eventUpdatePayload, loading };
};
