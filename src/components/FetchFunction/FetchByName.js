import axios from 'axios';
export async function FetchByName(name) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=1b8f437c71433f5413fc08734c0f2d02&query=${name}`
    );

    const movie = response.data.results;

    return movie;
  } catch (error) {
    console.log(error);
  }
}
