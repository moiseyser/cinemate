export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
    const popularMovieUrl = 'https://api.themoviedb.org/3/movie/popular'
    const popularSeriesUrl = 'https://api.themoviedb.org/3/tv/popular'

    const popularMovies = await $fetch(popularMovieUrl, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            include_adults: true,
            include_video: false,
            language: 'en-US',
            page: 1,
            sort_by: 'popularity.desc',
        }
    })

    const popularSeries = await $fetch(popularSeriesUrl, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            include_adults: true,
            include_video: false,
            include_null_first_air_dates: false,
            language: 'en-US',
            page: 1,
            sort_by: 'popularity.desc',
        }
    })

    return  {popularMovies, popularSeries}
})