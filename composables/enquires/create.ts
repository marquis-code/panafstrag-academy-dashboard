import { enquiryApiFactory } from "@/apiFactory/enquires";

export const useCreateEvent = () => {
  const loading = ref(false);
  const eventPayload = ref({
    programTitle: "",
    programDescription: "",
    programRecordingUrl: "",
    programDate: "",
    programImageUrl: "",
  });

  const createEnquiry = async () => {
    loading.value = true;
    try {
      console.log(eventPayload.value, "event payload here");
      const response = await enquiryApiFactory.createEnquiry(eventPayload.value);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success("New event was successfully created", {
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
    return !!(
      eventPayload.value.programDate &&
      eventPayload.value.programDescription &&
      eventPayload.value.programImageUrl &&
      eventPayload.value.programRecordingUrl &&
      eventPayload.value.programTitle
    );
  });

  return { createEnquiry, eventPayload, loading, isCreateFormEmpty };
};
