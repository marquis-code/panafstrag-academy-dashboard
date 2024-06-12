<template>
    <main>
        <NuxtLoadingIndicator />
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-16 w-auto" src="@/assets/img/logo.png" alt="Your Company">
                <h2 class="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{{computedPageHeader.title}}</h2>
                <p class="text-sm text-center">{{computedPageHeader.desc}}</p>
            </div>
            <slot />
        </div>
    </main>
</template>

<script setup lang="ts">
const route = useRoute()

const computedPageHeader = computed(() => {
    switch (route.name) {
        case 'signup':
            return {
                title: 'Admin Signup',
                desc: 'Enter your full name, email and password to create an admin account'
            }
        case 'login':
            return {
                title: 'Admin Login',
                desc: 'Enter your email and password to login to your account'
            }
        case 'forgot':
            return {
                title: 'Forgot Password',
                desc: 'Enter your email below to receive password reset instructions.'
            }
        case 'reset':
            return {
                title: 'Reset Password',
                desc: 'You\'re a step away from accessing your account.'
            }
        default:
            return {
                title: 'default',
                desc: 'default'
            };
    }
})
</script>
