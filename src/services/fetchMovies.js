import axios from 'axios';

import { API_KEY, BASIC_URL } from './constants';

async function fetchPopularMovies() {
  try {
    const uri = `${BASIC_URL}/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(uri);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchPopularMovies;
