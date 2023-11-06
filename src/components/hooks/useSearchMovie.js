import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchMovie = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const query = queryParams.get('query') ?? '';

  const onSearch = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    console.dir(form);

    setQueryParams({ query: form.elements.searchMovie.value });

    form.reset();

    setSearchMovies([]);
  };

  return {
    query,
    onSearch,
    searchMovies,
    setSearchMovies,
  };
};
