import { HeaderStyle, Link, Nav } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyle>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </HeaderStyle>
  );
};
