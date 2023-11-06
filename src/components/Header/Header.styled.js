import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
  background-color: #000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
`;
export const Nav = styled.nav`
  margin: 0 auto;
  max-width: 1200px;

  display: flex;
  gap: 30px;

  .active {
    border-bottom: 2px solid #f8eb62;
    color: ${p => p.theme.colors.accent};
  }
`;

export const Link = styled(NavLink)`
  color: #fff;
  font-weight: 400;
  line-height: 13px;
  font-size: 25px;
  padding: ${p => p.theme.spacing(5)};
`;
