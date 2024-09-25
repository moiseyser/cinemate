<script setup>
defineProps([
  'name',
  'first_air_date',
  'overview',
  'popularity',
  'poster_path',
  'item'
])
const imageSiteUrl = 'https://image.tmdb.org/t/p/w500'
const itemState = useState('chosenItem', () => {})
const changeItemState = (item) => {
  itemState.value = item
}
</script>

<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <NuxtLink @click="changeItemState(item)" :to="`/item/${name}`">
      <img class="rounded-t-lg" :src="`${imageSiteUrl}${poster_path}`" :alt="`${name}`" />
    </NuxtLink>
    <div class="p-5">
      <NuxtLink :to="`/item/${name}`">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{name}}</h5>
      </NuxtLink>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        First air date: {{first_air_date}}
      </p>
      <p v-if="overview" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
        {{overview}}
      </p>
      <p v-else class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
        No overview Available
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>