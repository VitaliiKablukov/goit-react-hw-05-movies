import axios from 'axios';
export async function FetchCast(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1b8f437c71433f5413fc08734c0f2d02`
    );
    const movieCast = response.data.cast;
    return movieCast;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
}
