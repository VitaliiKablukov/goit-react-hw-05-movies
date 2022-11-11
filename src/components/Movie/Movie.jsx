import { FetchByName } from 'components/FetchFunction/FetchByName';
import { SearchList } from 'components/SearchList/SearchList';
import { useState } from 'react';
import Notiflix from 'notiflix';

export const Movie = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

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
      fetch(query);
      Notiflix.Notify.success(`Good. Found movies by title ${query}`);
      setQuery(() => '');
    }
  };
  const fetch = async query => {
    const response = await FetchByName(query);
    if (response.length) {
      setMovies(movie => [...movie, ...response]);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={query} onChange={onChange} />
        <button type="submit">search</button>
      </form>
      <SearchList movies={movies} />
    </>
  );
};
