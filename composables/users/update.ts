import { userApiFactory } from "@/apiFactory/users";

export const useUpdateUser = () => {
  const loading = ref(false);
  const userUpdatePayload = ref({})
  const user_id = ref('')
  const updateUser = async () => {
    loading.value = true;
    try {
      const response = await userApiFactory.updateUser(user_id.value, userUpdatePayload);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success('User was updated successfully.', {
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

  return { updateUser, userUpdatePayload, loading };
};
