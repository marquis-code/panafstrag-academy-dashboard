<script setup lang="ts">
const router = useRouter()
definePageMeta({
  layout: 'authentication',
})

onMounted(() => {
  router.push('/login')
})
</script>
