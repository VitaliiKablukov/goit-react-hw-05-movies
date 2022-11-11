import { NavLink } from 'react-router-dom';
export const Home = ({ homeMovies }) => {
  return (
    <ul>
      {homeMovies.map(({ title, id, name, poster_path }) => {
        return (
          <li key={id}>
            <NavLink to={`/movie/${id}`}>
              <img src={poster_path} alt="" width={200} height={200} />
              <p>{title ? title : name}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
