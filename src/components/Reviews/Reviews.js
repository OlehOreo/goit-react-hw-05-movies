import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'components/Api';
import UserImg from '../../Photo/userPhoto.webp';

import {
  ReviewsList,
  ReviewsItem,
  ReviewsText,
  ImgThumb,
} from './Reviews.styled';
import { ErrorMessage, NotInfo } from 'components/Message/Message.Styled';
import Loading from 'components/Loading/Loading';

const Reviews = () => {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { moviesId } = useParams();
  const baseUrlApiImg = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    async function getMoviesReviews() {
      try {
        setLoading(true);
        setError(false);
        const movie = await fetchMovieReviews(moviesId);

        setMoviesReviews(movie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMoviesReviews();
  }, [moviesId]);

  return (
    <ReviewsList>
      {!loading && moviesReviews.length === 0 ? (
        <NotInfo>There are not reviews</NotInfo>
      ) : (
        moviesReviews.map(reviews => {
          const avatar = reviews.author_details.avatar_path;
          return (
            <ReviewsItem key={reviews.id}>
              <ImgThumb>
                <img
                  src={avatar ? `${baseUrlApiImg}${avatar}` : `${UserImg}`}
                  alt="Avatar"
                />
              </ImgThumb>
              <ReviewsText>
                <h3 className="heading">Author: {reviews.author}</h3>
                <p>{reviews.content}</p>
              </ReviewsText>
            </ReviewsItem>
          );
        })
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
    </ReviewsList>
  );
};

export default Reviews;
