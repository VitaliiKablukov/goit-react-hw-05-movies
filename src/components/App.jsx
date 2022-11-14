import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { FetchHomeMovies } from './FetchFunction/FetchHomeMovies';
import SharedLayout from './SharedLayout/SharedLayout';
const Home = lazy(() => import('./Home/Home.jsx'));
const Movie = lazy(() => import('./Movie/Movie.jsx'));
const NotFound = lazy(() => import('./NotFound/NotFound.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

export const App = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [falseStartFetch, setFalseStartFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!falseStartFetch) {
      setFalseStartFetch(() => true);
      return;
    }

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
  }, [falseStartFetch]);
  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              homeMovies.length > 0 &&
              !loading && <Home homeMovies={homeMovies} />
            }
          />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="/movie/:movieId/cast" element={<Cast />} />
            <Route path="/movie/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
