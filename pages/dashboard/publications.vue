<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Publications</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all publications by the academy.</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" @click="handleAddPublication"
            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
            publication</button>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table v-if="!loading && publicationList.length" class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Title
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">RecordingUrl</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <ModulesPublicationList @preview="handlePreview" @edit="handleEdit" v-for="publication in publicationList"
                    :key="publication._id" :publication="publication" />
                </tbody>
              </table>
              <CoreTableLoader v-else-if="loading && !publicationList.length" />
              <CoreEmptyState v-else title="No Publications Available" desc="Get started by creating new publication" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <CoreSlideOver :show="openSlideOver" @update:show="openSlideOver = false" :title="computedSliderPageHeader.title"
      :description="computedSliderPageHeader.desc">
      <template #content>
        <div v-if="route.query.action === 'edit' || route.query.action === 'add'" class="pt-6 px-6 space-y-4">
          <ModulesPublicationForm :publication="selectedPublication" />
        </div>

        <div v-if="route.query.action === 'preview'" class="pt-6 px-6 space-y-4">
          <ModulesPublicationDetails :publication="selectedPublication" />
        </div>
      </template>
    </CoreSlideOver>
  </main>
</template>

<script setup lang="ts">
import { useGetAllPublication } from '@/composables/publication/fetch'
const { getPublications, publicationList, loading } = useGetAllPublication()
definePageMeta({
  layout: 'dashboard'
})

getPublications()

const router = useRouter()
const route = useRoute()
const selectedPublication = ref({}) as Record<string, any>
const openSlideOver = ref(false);

const handlePreview = (item: Record<string, any>) => {
  router.push({ path: route.path, query: { action: 'preview' } })
  openSlideOver.value = true
  selectedPublication.value = item
}

const handleEdit = (item: Record<string, any>) => {
  router.push({ path: route.path, query: { action: 'edit', id: item._id } })
  openSlideOver.value = true
  selectedPublication.value = item
}

const computedSliderPageHeader = computed(() => {
    switch (route.query.action) {
        case 'edit':
            return {
                title: 'Edit Publication Information',
                desc: 'Edit publication information to update publication on website'
            }
        case 'preview':
            return {
                title: 'Publication Details',
                desc: 'Preview publication details which includes title, description, date recording Url.'
            }
        case 'add':
            return {
                title: 'Create new Publication',
                desc: 'Fill the form to create a new publication.'
           }
        default:
            return {
                title: 'default',
                desc: 'default'
            };
    }
})

const handleAddPublication = () => {
  openSlideOver.value = true
  router.push({ path: route.path, query: { action: 'add'} })
}
</script>
