import { fetchMoviesByQuery } from 'components/Api';
import { useEffect, useState } from 'react';

import { MovieContainer } from './Movies.Page.styled';
import { SearchMovie } from 'components/Search/SearchMovie';
import { useSearchMovie } from 'components/hooks/useSearchMovie';
import { MoviesList } from 'components/MovieList/MovieList';
import {
  ErrorMessage,
  NotFoundMessage,
} from 'components/Message/Message.Styled';
import Loading from 'components/Loading/Loading';

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { query, searchMovies, setSearchMovies } = useSearchMovie();

  useEffect(() => {
    async function getMovieByQuery() {
      try {
        if (query === '') {
          return;
        }
        setLoading(true);
        setError(false);
        const movie = await fetchMoviesByQuery(query);

        setSearchMovies(movie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovieByQuery();
  }, [query, setSearchMovies]);

  return (
    <MovieContainer>
      <SearchMovie />
      {query !== '' && searchMovies.length === 0 ? (
        <NotFoundMessage>
          Movie <span className="query">{query}</span> not found
        </NotFoundMessage>
      ) : (
        <MoviesList searchResults={searchMovies} />
      )}
      {loading && (
        <Loading
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        />
      )}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
    </MovieContainer>
  );
}
