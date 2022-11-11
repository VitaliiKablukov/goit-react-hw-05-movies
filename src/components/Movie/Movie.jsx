import { FetchByName } from 'components/FetchFunction/FetchByName';
import { SearchList } from 'components/SearchList/SearchList';
import { useState } from 'react';

export const Movie = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const onChange = e => {
    setQuery(() => e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setMovies(() => []);
    fetch(query);
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
        <input type="text" onChange={onChange} />
        <button type="submit">search</button>
      </form>
      <SearchList movies={movies} />
    </>
  );
};
