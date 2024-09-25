<script setup>

const itemState = useState('chosenItem', () => {
  return {}
})
const item = itemState.value
</script>

<template>
<div>
  <MovieCard
      v-if="item.release_date"
      :poster_path="item.poster_path"
      :title="item.title"
      :id="item.id"
      :overview="item.overview"
      :release_date="item.release_date"
      :popularity="item.popularity"
      :item="item"
  />
  <SeriesCard
      v-if="item.first_air_date"
      :item="item"
      :name="item.name"
      :first_air_date="item.first_air_date"
      :overview="item.overview"
      :popularity="item.popularity"
      :poster_path="item.poster_path"
  />
</div>
</template>

<style scoped>

</style>