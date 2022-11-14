import { Outlet, useParams, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { FetchById } from 'components/FetchFunction/FetchById';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [movieLength, setMovieLength] = useState(0);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const backLocation = location.state.from;

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async movieId => {
      setLoading(true);
      try {
        const response = await FetchById(movieId);
        if (response) {
          const movieGenres = response.genres.map(el => el.name);
          const movieGenresParse = movieGenres.join(' ');
          const chekingObjectLength = Object.keys(response).length;
          setMovieLength(chekingObjectLength);
          setGenres(() => movieGenresParse);
          setMovie(() => response);
        }
      } catch (error) {
        setError('Ops we don`t have information for this movie');
      } finally {
        setLoading(false);
      }
    };
    fetch(movieId);
    return () => {};
  }, [movieId]);
  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);
  const { overview, release_date, poster_path, vote_average, title, name } =
    movie;

  const pareVoteAverage = () => {
    if (vote_average) {
      return vote_average.toFixed(1) * 10;
    } else {
      return;
    }
  };

  return (
    <section>
      <NavLink to={backLocation}>Back</NavLink>
      {loading || movieLength ? (
        <div>
          <div>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                  : 'https://via.placeholder.com/400x600?text=No image'
              }
              alt={title ? title : name}
            />
          </div>
          <div>
            <h2>
              {title ? title : name}({release_date})
            </h2>
            <p>User Score: {pareVoteAverage()}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres}</p>
          </div>

          <ul>
            <li>
              <NavLink
                to={`/movie/${movieId}/cast`}
                state={{ from: backLinkHref }}
              >
                <p>Cast</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/movie/${movieId}/reviews`}
                state={{ from: backLinkHref }}
              >
                <p>Reviews</p>
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      ) : (
        <p>We don't have information for this movie</p>
      )}
    </section>
  );
};
export default MovieDetails;
