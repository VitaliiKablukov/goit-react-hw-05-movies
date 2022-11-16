import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const SearchList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.length > 0 &&
        movies.map(({ title, id, name, poster_path }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                      : 'https://via.placeholder.com/400x600?text=No image'
                  }
                  alt={name}
                />
                <p>{title ? title : name}</p>
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};
SearchList.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default SearchList;
