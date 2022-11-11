import axios from 'axios';
export async function FetchHomeMovies(controller) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=1b8f437c71433f5413fc08734c0f2d02`,
      { signal: controller.signal }
    );
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.log(error);
  }
}
