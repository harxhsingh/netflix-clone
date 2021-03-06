const API_KEY = 'e34f38da69c3c2634945e0e80f7eefe7'

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchTopHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with-genres=99`,
    // fetchLatest:`latest?api_key=${API_KEY}&language=en-US`
}
// https://api.themoviedb.org/3/trending/all/week?api_key=e34f38da69c3c2634945e0e80f7eefe7&language=en-US
export default requests