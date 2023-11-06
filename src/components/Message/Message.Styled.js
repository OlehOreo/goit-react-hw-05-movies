import styled from 'styled-components';

export const ErrorMessage = styled.b`
  font-size: 30px;
  font-weight: 700;
  line-height: 18px;

  background-color: white;
  letter-spacing: 3px;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${p => p.theme.colors.error};
`;

export const NotFoundMessage = styled.p`
  position: absolute;
  top: 25%;
  left: 45%;
  transform: translate(-50%, -50%);

  font-size: 30px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 3px;

  color: ${p => p.theme.colors.white};

  .query {
    color: ${p => p.theme.colors.accent};
  }
`;

export const NotInfo = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 3px;

  color: ${p => p.theme.colors.white};
`;
