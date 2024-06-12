<template>
    <section>
        <form @submit.prevent="route.query.action === 'edit' ? updatePublication : handleCreatePublication"
            class="pt-6 px-6 space-y-4">
            <div>
                <label for="first-name" class="block text-xs font-medium leading-6 text-gray-900">Publication Title</label>
                <div class="mt-1">
                    <input type="text" v-model="publicationUpdatePayload.programTitle" name="first-name" id="first-name"
                        class="block w-full border-gray-500 rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
                </div>
            </div>

            <div>
                <label for="last-name" class="block text-xs font-medium leading-6 text-gray-900">Publication
                    Description</label>
                <div class="mt-1">
                    <textarea v-model="publicationUpdatePayload.programDescription" name="last-name" id="last-name" cols="4"
                        rows="4"
                        class="block w-full border-gray-500 rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
                </div>
            </div>

            <div>
                <label for="url" class="block text-xs font-medium leading-6 text-gray-900">Recording Url</label>
                <div class="mt-1">
                    <input type="url" v-model="publicationUpdatePayload.programRecordingUrl" name="url" id="url"
                        class="block w-full border-gray-500 rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
                </div>
            </div>

            <div>
                <label for="date" class="block text-xs font-medium leading-6 text-gray-900">Publication Date</label>
                <div class="mt-1">
                    <input type="date" v-model="publicationUpdatePayload.programDate" name="date" id="date"
                        class="block w-full border-gray-500 rounded-md border-[0.6px] px-3 outline-none font-light py-3 text-gray-900 shadow-sm" />
                </div>
            </div>

            <div>
                <label for="publicationImage" class="block text-xs font-medium leading-6 text-gray-900">Publication Image</label>
                <div v-if="route.query.action === 'edit'" class="mt-1">
                    <img v-if="publicationUpdatePayload.programImageUrl && !imageUrl"
                        :src="publicationUpdatePayload.programImageUrl" class="rounded-lg" alt="publication" />
                    <div v-if="imageUrl">
                        <img :src="imageUrl" alt="Image Preview" class="w-full object-cover object-center rounded-lg"
                            style="max-height: 200px;" />
                    </div>
                    <div class="flex justify-end items-end mt-3">
                        <label for="update-file-upload"
                            class="relative cursor-pointer py-2 px-3 border-gray-600 text-sm border flex justify-center items-center rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Update Image</span>
                            <input id="update-file-upload" ref="fileInput" @change="handleFileChange" :capture="true"
                                name="update-file-upload" type="file" class="sr-only">
                        </label>
                    </div>
                </div>
                <div v-if="route.query.action === 'add'" class="col-span-full">
                    <div v-if="!imageUrl" class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div class="text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                <label for="file-upload"
                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" @change="handleFileChange" :capture="true" class="sr-only">
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                    <div v-if="imageUrl">
                        <img :src="imageUrl" alt="Image Preview" class="w-full object-cover object-center rounded-lg"
                            style="max-height: 200px;" />
                    </div>
                </div>
            </div>

            <div class="flex flex-shrink-0 justify-end py-4 w-full">
                <button v-if="route.query.action === 'edit'" type="submit" :disabled="loading"
                    class="ml-4 w-full disabled:cursor-not-allowed disabled:opacity-25 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {{ loading ? "editing..." : "Save" }}
                </button>
                <button v-if="route.query.action === 'add'" type="submit" :disabled="creatingPublication || !isCreateFormEmpty"
                    class="ml-4 w-full disabled:cursor-not-allowed disabled:opacity-25 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {{ creatingPublication ? "processing..." : "Submit" }}
                </button>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
import { useCreatePublication } from '@/composables/publication/create'
import { useUpdatePublication } from '@/composables/publication/update'
const { updatePublication, publicationUpdatePayload, loading } = useUpdatePublication()
const { createPublication, publicationPayload, loading: creatingPublication, isCreateFormEmpty } = useCreatePublication()
const route = useRoute()
const props = defineProps({
    publication: {
        type: Object,
        default: () => { }
    }
})



onMounted(() => {
    if (route.query.action === 'edit') {
        publicationUpdatePayload.value = props.publication
    } else {
        publicationUpdatePayload.value = publicationPayload.value
    }
})


const fileInput = ref<HTMLInputElement | null>(null)
const imageUrl = ref<string | null>(null)

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
        const file = target.files[0]
        imageUrl.value = URL.createObjectURL(file)
        publicationUpdatePayload.value.programImageUrl = imageUrl.value
        publicationPayload.value.programImageUrl = imageUrl.value
    }
}

const handleCreatePublication = () => {
    createPublication()
}
</script>
