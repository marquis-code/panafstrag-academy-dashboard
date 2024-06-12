import { useRouter } from "vue-router";
import { authApiFactory } from "@/apiFactory/auth";

export const useForgotPassword = () => {
  const email = ref("");
  const router = useRouter();
  const error = ref<string | null>(null);
  const loading = ref(false);

  const forgotPassword = async () => {
    try {
      const payload = { email: email.value };
      const response = await authApiFactory.forgot(payload);
      useNuxtApp().$toast.success(
        "Please Check your email for instructions to reset your password",
        {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        }
      );
      router.push("/reset");
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
    return email.value;
  });

  return {
    email,
    forgotPassword,
    error,
    loading,
    isFormEmpty,
  };
};
