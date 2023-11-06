import { useSearchMovie } from 'components/hooks/useSearchMovie';

import { Form, Input, Button } from './SearchMovie.styled';

export const SearchMovie = () => {
  const { onSearch } = useSearchMovie();

  return (
    <Form onSubmit={onSearch}>
      <Input
        type="text"
        name="searchMovie"
        autoFocus
        required
        placeholder="Search movies"
      ></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
};
