<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{event.programTitle}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{event.programDescription}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{event.programRecordingUrl}}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{event.programDate}}</td>
        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <div class="space-x-3">
                <a href.prevent="#" @click="handleSlideOver('preview')"
                    class="text-indigo-600 hover:text-indigo-900 cursor-pointer border rounded-md px-3 py-2.5 text-sm">Preview</a>
                <a href.prevent="#" @click="handleSlideOver('edit')"
                    class="text-indigo-600 hover:text-indigo-900 cursor-pointer border rounded-md px-3 py-2.5 text-sm">Edit</a>
                <a href.prevent="#" @click="deleteEvent" class="text-red-600 hover:text-red-900 cursor-pointer border rounded-md px-3 py-2.5 text-sm">Delete</a>
            </div>
        </td>
    </tr>
</template>

<script setup lang="ts">
import { useDeleteEvent } from '@/composables/events/delete'
const { deleteEvent, loading } = useDeleteEvent()
const props = defineProps({
    event: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits<{
    (event: 'preview', state: object): void,
    (event: 'edit', state: object): void
}>()

const handleSlideOver = (item: string) => {
    if (item === 'edit') {
        emit('edit', props.event)
    }

    if (item === 'preview') {
        emit('preview', props.event)
    }
}
</script>
