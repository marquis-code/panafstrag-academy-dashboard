import { userApiFactory } from "@/apiFactory/users";
export const useGetUserById = () => {
  const userId = useRoute().params.id as any;
  const userObject = ref({}) as any;
  const loading = ref(false);
  const getUserById = async () => {
    loading.value = true;
    try {
      const response = await userApiFactory.getUserById(userId);
      if(typeof response !== "undefined") {
        userObject.value = response.data.User;
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

  return { getUserById, userObject, loading };
};
