<template>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-6 lg:p-0">
        <form class="space-y-6" @submit.prevent="forgotPassword">
            <div class="">
                <h3 class="font-medium text-xl">Forgot password ?</h3>
                <p class="text-sm">Enter your email below to receive password reset instructions.</p>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                    address</label>
                <div class="mt-2">
                    <input v-model="email" id="email" name="email" type="email" autocomplete="email"
                        required
                        class="block w-full rounded-md border border-gray-300 py-3.5 px-3 text-gray-900 outline-none  placeholder:text-gray-400">
                </div>
            </div>

            <div>
                <button type="submit" :disabled="!isFormEmpty || loading"
                    class="flex w-full justify-center rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-black px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Already have an account ?
            <NuxtLink to="/signup" class="font-semibold leading-6 text-white hover:text-indigo-500">Login
            </NuxtLink>
        </p>
    </div>
</template>
<script setup lang="ts">
import { useForgotPassword } from '../composables/auth/forgot'
const { email,
    forgotPassword,
    isFormEmpty,
    loading, } = useForgotPassword()

definePageMeta({
    layout: 'authentication'
})
</script>
