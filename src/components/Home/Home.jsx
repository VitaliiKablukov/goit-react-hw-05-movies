import { NavLink, useLocation } from 'react-router-dom';
export const Home = ({ homeMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {homeMovies.map(({ title, id, name, poster_path }) => {
        return (
          <li key={id}>
            <NavLink to={`/movie/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                    : 'https://via.placeholder.com/400x600?text=No image'
                }
                alt=""
              />
              <p>{title ? title : name}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
