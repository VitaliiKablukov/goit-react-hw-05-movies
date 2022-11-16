import axios from 'axios';
import PropTypes from 'prop-types';
export async function FetchByName(name, signal) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=1b8f437c71433f5413fc08734c0f2d02&query=${name}`,
      { signal }
    );

    const movie = response.data.results;
    return movie;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
}
FetchByName.protoTypes = {
  name: PropTypes.string.isRequired,
  signal: PropTypes.object.isRequired,
};
