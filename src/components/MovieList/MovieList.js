import { Link, useLocation } from 'react-router-dom';
import { ListItem, TextContainer, List } from './MovieList.styled';

import DefaultPoster from '../../Photo/DefaultPoster.webp';

export const MoviesList = ({ movies, searchResults }) => {
  const baseUrlApiImg = 'https://image.tmdb.org/t/p/w300/';
  const location = useLocation();

  const films = movies || searchResults;

  if (!films) {
    return;
  }

  return (
    <List>
      {films.map(({ id, title, poster_path, vote_average, vote_count }) => {
        return (
          <ListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <div>
                <img
                  src={
                    poster_path ? baseUrlApiImg + poster_path : DefaultPoster
                  }
                  alt={`Movie poster ${title}`}
                  width={300}
                  height={450}
                />
                <TextContainer>
                  <p>{title}</p>
                  <span className="rating">
                    rating: {vote_average.toFixed(1)} votes: {vote_count}
                  </span>
                </TextContainer>
              </div>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
