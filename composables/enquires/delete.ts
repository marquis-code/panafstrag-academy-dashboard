import { eventApiFactory } from "@/apiFactory/events";
import Swal from "sweetalert2";

export const useDeleteEvent = () => {
  const loading = ref(false);
  const event_id = ref("");
  const deleteEvent = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete.",
      cancelButtonText: "Nah, Just kidding",
    }).then(async (result) => {
      if (result.value) {
        loading.value = true;
        try {
          const response = await eventApiFactory.deleteEvent(event_id.value);
          if (typeof response === "undefined") {
            return;
          } else {
            useNuxtApp().$toast.success("Event was deleted successfully.", {
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
      } else {
        Swal.fire("Cancelled", "Action was cancelled", "info");
      }
    });
  };

  return { deleteEvent, loading };
};
