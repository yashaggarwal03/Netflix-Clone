const API_KEY = "19213780411e63041db2dc8758bae5cb";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnimation: `/discover/movie/?api_key=${API_KEY}&with_genres=16`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchDramas: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
};

export default requests;
