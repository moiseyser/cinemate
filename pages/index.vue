<script setup>

const movies = useState(() => [])
const series = useState(() => [])
const {data} = await useFetch('/api/movies/discover', {
  transform: data => {
    movies.value = data.movies.results;
    series.value = data.series.results;
  }
})
</script>

<template>
  <div>
    <section class="mb-3">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Featured Movies
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="movie in movies" :key="movie.id">
          <MovieCard
              :poster_path="movie.poster_path"
              :title="movie.title"
              :id="movie.id"
              :overview="movie.overview"
              :release_date="movie.release_date"
              :popularity="movie.popularity"
              :item="movie"
          />
        </li>
      </ul>
    </section>
    <section>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Featured Tv Series
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="tvSeries in series" :key="tvSeries.id">
          <SeriesCard
              :item="tvSeries"
              :name="tvSeries.name"
              :first_air_date="tvSeries.first_air_date"
              :overview="tvSeries.overview"
              :popularity="tvSeries.popularity"
              :poster_path="tvSeries.poster_path"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>

</style>