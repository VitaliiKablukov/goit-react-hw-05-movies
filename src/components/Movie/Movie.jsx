import { FetchByName } from 'components/FetchFunction/FetchByName';
import { useState, useEffect, lazy, Suspense } from 'react';
import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
const SearchList = lazy(() => import('../SearchList/SearchList'));

const Movie = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const queryFilm = searchParams.get('query') ?? '';

  const onChange = e => {
    const queryText = e.target.value.trim();
    setQuery(() => queryText);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (query === '') {
      Notiflix.Notify.warning('Please input name movie');
    } else {
      setMovies(() => []);
      setSearchParams({ query: query });
      setQuery(() => '');
    }
  };

  useEffect(() => {
    if (queryFilm === '' || movies.length !== 0) {
      return;
    }
    const controller = new AbortController();
    const fetch = async queryFilm => {
      setLoading(true);
      try {
        const response = await FetchByName(queryFilm, controller.signal);
        if (response.length > 0) {
          setMovies(movie => [...movie, ...response]);
        }
        if (response.length === 0) {
          Notiflix.Notify.warning(
            `No movies were found for your request ${queryFilm} `
          );
        }
      } catch (error) {
        setError('Ops');
      } finally {
        setLoading(false);
      }
    };
    fetch(queryFilm);
    return () => {
      controller.abort();
    };
  }, [queryFilm, movies]);

  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={query} onChange={onChange} />
        <button type="submit">search</button>
      </form>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      {!loading && <SearchList movies={movies} />}
    </>
  );
};
export default Movie;
