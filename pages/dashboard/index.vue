<template>
    <main class="space-y-6">
        <DashboardStatistics />
        <section class="lg:flex gap-x-4">
            <ChartsActivitiesChart class="lg:w-8/12" />
            <ChartsWebsiteTrafficChart class="lg:w-4/12" />
        </section>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'dashboard'
})
</script>
