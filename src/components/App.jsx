import { Routes, Route } from 'react-router-dom';

import { Home } from './Home/Home';
import { Movie } from './Movie/Movie';
import { NotFound } from './NotFound/NotFound';
import { useState, useEffect } from 'react';
import { FetchHomeMovies } from './FetchFunction/FetchHomeMovies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [falseStartFetch, setFalseStartFetch] = useState(false);

  useEffect(() => {
    if (!falseStartFetch) {
      setFalseStartFetch(() => true);
      return;
    }

    const controller = new AbortController();

    const fetch = async controller => {
      const response = await FetchHomeMovies(controller);

      if (response.length) {
        setHomeMovies(movie => [...movie, ...response]);
      }
    };
    fetch(controller);
    return () => {
      controller.abort();
    };
  }, [falseStartFetch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={homeMovies.length && <Home homeMovies={homeMovies} />}
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
