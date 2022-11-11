import { Outlet, useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchById } from 'components/FetchFunction/FetchById';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async movieId => {
      const response = await FetchById(movieId);
      if (response) {
        const movieGenres = response.genres.map(el => el.name);
        const movieGenresParse = movieGenres.join(' ');
        setGenres(() => movieGenresParse);
        setMovie(() => response);
      }
    };
    fetch(movieId);
    return () => {};
  }, [movieId]);
  const { overview, release_date, poster_path, vote_average, title, name } =
    movie;

  return (
    <section>
      <div>
        <img
          src={poster_path}
          alt={title ? title : name}
          width={200}
          height={200}
        />
      </div>
      <div>
        <h2>
          {title ? title : name}({release_date})
        </h2>
        <p>User Score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
      <ul>
        <li>
          <NavLink to={`/movie/${movieId}/cast`}>
            <p>Cast</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/movie/${movieId}/reviews`}>
            <p>Reviews</p>
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};
