import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'components/Api';
import NoImg from '../../Photo/noImage.png';
import { CastList, CardContainer, InfoAboutActor } from './Cast.styled';
import { ErrorMessage, NotInfo } from 'components/Message/Message.Styled';
import Loading from 'components/Loading/Loading';

const Cast = () => {
  const [moviesCast, steMOviesCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { moviesId } = useParams();

  const baseUrlApiImg = 'https://image.tmdb.org/t/p/w200';

  console.log('ПОчатковий стан', moviesCast);

  useEffect(() => {
    async function getMoviesCast() {
      try {
        setLoading(true);
        setError(false);
        const movie = await fetchMovieCast(moviesId);
        steMOviesCast(movie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMoviesCast();
  }, [moviesId]);

  return (
    <>
      <CastList>
        {!loading && moviesCast.length === 0 ? (
          <NotInfo>Cast not found</NotInfo>
        ) : (
          moviesCast.map(cast => (
            <li key={cast.id}>
              <CardContainer>
                <img
                  src={
                    cast.profile_path
                      ? `${baseUrlApiImg}${cast.profile_path}`
                      : `${NoImg}`
                  }
                  alt={`Actor ${cast.original_name}`}
                />
                <InfoAboutActor>
                  <span>{cast.character}</span>
                  <span>{cast.original_name}</span>
                </InfoAboutActor>
              </CardContainer>
            </li>
          ))
        )}

        {loading && (
          <Loading
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        )}
        {error && (
          <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
        )}
      </CastList>
    </>
  );
};

export default Cast;
