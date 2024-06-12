// middleware/auth.ts
import { defineNuxtMiddleware } from "nuxt3";
import { useLogin } from "@/composables/auth/login";

export default defineNuxtMiddleware((context: any) => {
  const { route, redirect } = context;
  const { isLoggedIn } = useLogin();
  
  const protectedRoutes = ["/dashboard"];

  if (!isLoggedIn && protectedRoutes.includes(route.path)) {
    return redirect("/login");
  }

  if (
    isLoggedIn &&
    (route.path === "/login")
  ) {
    return redirect("/");
  }
});
