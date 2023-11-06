import styled from 'styled-components';

export const Form = styled.form`
  text-align: left;
  position: relative;
  margin: 1rem auto 0;
  width: 100%;
  max-width: 36.625rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 500px;
  height: 60px;
  background: ${p => p.theme.colors.black};
  border: 2px solid rgba(128, 128, 128, 0.7);
  border-radius: 10px;
  color: ${p => p.theme.colors.white};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 15px;
  transition: ${p => p.theme.transition};

  margin-right: 10px;

  &:focus,
  &:hover {
    border-color: #ffe900;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 124px;
  height: 60px;
  padding: 10px;
  background-color: ${p => p.theme.colors.accent};
  border-radius: 10px;

  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  transition: ${p => p.theme.transition};

  &:hover {
    background-color: #ffe900;
  }
`;
