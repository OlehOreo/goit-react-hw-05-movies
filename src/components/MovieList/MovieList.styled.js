import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 0 20px;
  margin-bottom: 55px;
`;
export const ListItem = styled.li`
  width: 300px;
  height: auto;
  transition: ${p => p.theme.transition};

  &:hover {
    transform: translateY(-6px);
  }
`;
export const TextContainer = styled.div`
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.black};
  padding: 10px;

  .rating {
    color: ${p => p.theme.colors.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
  }
`;
