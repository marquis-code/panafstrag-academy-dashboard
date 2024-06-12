<template>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-6 lg:p-0">
        <form class="space-y-6" @submit.prevent="handleLogin">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                    address</label>
                <div class="mt-2">
                    <input v-model="loginPayload.email" id="email" name="email" type="email" autocomplete="email" required
                        class="block w-full rounded-md border border-gray-300 py-3.5 px-3 text-gray-900 outline-none  placeholder:text-gray-400">
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="text-sm">
                        <NuxtLink to="/forgot" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
                            password?</NuxtLink>
                    </div>
                </div>
                <div class="mt-2">
                    <input v-model="loginPayload.password" id="password" name="password" type="password" autocomplete="current-password" required
                        class="block w-full rounded-md border border-gray-300 py-3.5 px-3 text-gray-900 outline-none  placeholder:text-gray-400">
                </div>
            </div>

            <div>
                <button type="submit" :disabled="!isFormEmpty || loading"
                class="flex w-full justify-center rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Already have an account ?
            <NuxtLink to="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up
            </NuxtLink>
        </p>
    </div>
</template>
<script setup lang="ts">
import { useLogin } from '../composables/auth/login'
const { loginPayload, handleLogin, loading, isFormEmpty } = useLogin()
definePageMeta({
    layout: 'authentication'
})
</script>
