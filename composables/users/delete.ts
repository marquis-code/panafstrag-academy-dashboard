import { userApiFactory } from "@/apiFactory/users";

export const useDeleteUser = () => {
  const loading = ref(false);
  const user_id = ref('')
  const deleteUser = async () => {
    loading.value = true;
    try {
      const response = await userApiFactory.deleteUser(user_id.value);
      if (typeof response === "undefined") {
        return;
      } else {
        useNuxtApp().$toast.success('User was deleted successfully.', {
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

  return { deleteUser, loading };
};
