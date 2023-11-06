import { useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import Loading from 'components/Loading/Loading';
import { fetchMovieById } from 'components/Api';
import {
  Container,
  GoBack,
  SectionHero,
  HeroContainer,
  InfoContainer,
  ImgContainer,
  HeroImg,
  AdditionalInfo,
  LinkBtn,
} from './MovieDetailsPage.styled';
import { ErrorMessage } from 'components/Message/Message.Styled';

const MovieDetails = () => {
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [filmDetails, setFilmDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { moviesId } = useParams();
  const location = useLocation();

  const backLink = location?.state?.from ?? '/';
  const baseUrlApiImg = 'https://image.tmdb.org/t/p/original';
  const overview = moviesInfo.overview;
  const genres = moviesInfo.genres;

  useEffect(() => {
    async function getMoviesDetails() {
      try {
        setLoading(true);
        setError(false);
        const movie = await fetchMovieById(moviesId);
        setMoviesInfo(movie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMoviesDetails();
  }, [moviesId]);

  useEffect(() => {
    if (moviesInfo.length === 0) {
      return;
    }
    const date = new Date(moviesInfo.release_date);
    const year = date.getFullYear();
    const hours = Math.floor(moviesInfo.runtime / 60);
    const minutes = moviesInfo.runtime % 60;
    const userScore = Math.round(moviesInfo.vote_average * 10);
    const rating = moviesInfo.vote_average.toFixed(1);

    const ImgUrl = `${baseUrlApiImg}${moviesInfo.backdrop_path}`;
    setFilmDetails({
      year: year,
      rating: rating,
      hours: hours,
      minutes: minutes,
      userScore: userScore,
      ImgUrl: ImgUrl,
    });
  }, [moviesInfo]);

  return (
    <section>
      <>
        <SectionHero>
          <HeroContainer>
            <GoBack to={backLink}>Go back</GoBack>
            <InfoContainer>
              <h1 className="title">{moviesInfo.title}</h1>
              <div>
                <span>
                  {filmDetails.year} | {filmDetails.hours} h
                  {filmDetails.minutes} m |User Score: {filmDetails.userScore}%
                  | rating {filmDetails.rating}
                </span>
              </div>

              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <div>
                {genres &&
                  genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index < genres.length - 1 && ','}
                    </span>
                  ))}
              </div>
            </InfoContainer>

            <ImgContainer>
              {filmDetails.ImgUrl && (
                <HeroImg $backgroundUrl={filmDetails.ImgUrl}></HeroImg>
              )}
            </ImgContainer>
          </HeroContainer>
        </SectionHero>

        <Container>
          <AdditionalInfo>
            <h2 className="tile">Additional information</h2>
            <ul className="infoList">
              <li>
                <LinkBtn to="cast" state={{ from: backLink }}>
                  Cast
                </LinkBtn>
              </li>
              <li>
                <LinkBtn to="reviews" state={{ from: backLink }}>
                  Reviews
                </LinkBtn>
              </li>
            </ul>
          </AdditionalInfo>
        </Container>

        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </>
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
    </section>
  );
};

export default MovieDetails;
