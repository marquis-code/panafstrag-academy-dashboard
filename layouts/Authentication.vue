<template>
    <main>
        <NuxtLoadingIndicator />
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Admin {{route.name === 'login' ? 'Login' : 'Sign Up'}}</h2>
                <p class="text-sm text-center">{{route.name === 'login' ? 'Enter your email and password to login to your account' : 'Enter your full name, email and password to create an admin account'}}</p>
            </div>
            <slot />
        </div>
    </main>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
