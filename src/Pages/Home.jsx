import { Link, useLocation } from 'react-router-dom';
import { FetchHomeMovies } from '../FetchFunction/FetchHomeMovies';
import { useState, useEffect } from 'react';
const Home = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  //
  const location = useLocation();
  //
  useEffect(() => {
    const controller = new AbortController();

    const fetch = async controller => {
      setLoading(true);
      try {
        const response = await FetchHomeMovies(controller.signal);

        if (response.length) {
          setHomeMovies(movie => [...movie, ...response]);
        }
      } catch (error) {
        setError('Ops');
      } finally {
        setLoading(false);
      }
    };

    fetch(controller);

    return () => {
      controller.abort();
    };
  }, []);
  //
  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);
  return (
    <ul>
      {homeMovies.length > 0 &&
        homeMovies.map(({ title, id, name, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                      : 'https://via.placeholder.com/400x600?text=No image'
                  }
                  alt=""
                />
                <p>{title ? title : name}</p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Home;
