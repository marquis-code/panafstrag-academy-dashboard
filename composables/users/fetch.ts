import { userApiFactory } from "@/apiFactory/users";

export const useGetAllUsers = () => {
  const loading = ref(false);
  const usersList = ref([]) as any;
  const getUsers = async () => {
    loading.value = true;
    try {
      const response = await userApiFactory.getUsersList();
      usersList.value = response.data.users;
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

  return { getUsers, usersList, loading };
};
