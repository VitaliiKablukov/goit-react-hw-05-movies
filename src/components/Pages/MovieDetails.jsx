import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchById } from 'components/FetchFunction/FetchById';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetch = async movieId => {
      setLoading(true);
      try {
        const response = await FetchById(movieId);
        if (response) {
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

  const parseVoteAverage = () => {
    if (vote_average) {
      return vote_average.toFixed(1) * 10;
    } else {
      return;
    }
  };
  const movieGenres = () => {
    return movie.genres.map(el => el.name).join(', ') ?? null;
  };
  const isEmptyDetails = Object.keys(movie).length === 0;
  return (
    <section>
      <Link to={backLinkHref}>Back</Link>
      {!isEmptyDetails ? (
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
            <p>User Score: {parseVoteAverage()}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{movieGenres()}</p>
          </div>

          <ul>
            <li>
              <Link to={`cast`} state={{ from: backLinkHref }}>
                <p>Cast</p>
              </Link>
            </li>
            <li>
              <Link to={`reviews`} state={{ from: backLinkHref }}>
                <p>Reviews</p>
              </Link>
            </li>
          </ul>

          <Outlet />
        </div>
      ) : (
        <p>We don't have information for this movie</p>
      )}
    </section>
  );
};
export default MovieDetails;
