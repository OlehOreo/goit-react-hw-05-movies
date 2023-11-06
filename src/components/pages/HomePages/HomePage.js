import { useEffect, useState } from 'react';
import { fetchTrendingDayMovies } from 'components/Api';
import { MoviesList } from 'components/MovieList/MovieList';
import { Heading, ImgContainer } from './HomePage.styled';
import HeroPoster from '../../../Photo/hero.webp';
import Loading from 'components/Loading/Loading';
import { ErrorMessage } from 'components/Message/Message.Styled';

export default function Home() {
  const [moviesItems, setMoviesItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const movies = await fetchTrendingDayMovies();
        setMoviesItems(movies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <ImgContainer>
        <img src={HeroPoster} alt="Movie images"  />
        <Heading>Trending today</Heading>
      </ImgContainer>
      <MoviesList movies={moviesItems} />
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
    </>
  );
}
