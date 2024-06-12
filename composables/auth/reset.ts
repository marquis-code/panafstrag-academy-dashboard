import { useRouter } from "vue-router";
import { authApiFactory } from "@/apiFactory/auth";

export const useResetPassword = () => {
  const email = ref("");
  const newPassword = ref("");
  const resetToken = ref("");
  const router = useRouter();
  const error = ref<string | null>(null);
  const loading = ref(false);

  const resetPassword = async () => {
    try {
      const payload = {
        newPassword: newPassword.value,
        resetToken: resetToken.value,
      };
      const response = await authApiFactory.reset(payload);
      useNuxtApp().$toast.success(
        "Password reset was successful. Please Login",
        {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        }
      );
      router.push("/login");
      return response.data;
    } catch (error) {
      useNuxtApp().$toast.error("Something went wrong!", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return newPassword.value;
  });

  return {
    email,
    newPassword,
    resetToken,
    resetPassword,
    error,
    loading,
    isFormEmpty,
  };
};
