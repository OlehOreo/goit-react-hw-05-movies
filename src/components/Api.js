import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'eab6e244ce570b702b61e3907180b3b2',
};

export const fetchTrendingDayMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data.results;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const fetchMovieCast = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
};
