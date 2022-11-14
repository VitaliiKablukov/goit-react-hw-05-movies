import axios from 'axios';
export async function FetchById(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1b8f437c71433f5413fc08734c0f2d02`
    );
    const movie = response.data;

    return movie;
  } catch (error) {
    if (axios.isCancel) {
      return {};
    }
    throw new Error(error);
  }
}
