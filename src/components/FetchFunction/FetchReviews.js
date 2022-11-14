import axios from 'axios';
import PropTypes from 'prop-types';
export async function FetchReviews(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=1b8f437c71433f5413fc08734c0f2d02`
    );

    const movieReviews = response.data.results;

    return movieReviews;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
}
FetchReviews.protoTypes = {
  id: PropTypes.number.isRequired,
};
