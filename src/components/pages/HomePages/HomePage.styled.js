import styled from 'styled-components';

export const Heading = styled.h1`
  font-weight: 900;
  font-size: 50px;
  letter-spacing: 3px;
  color: ${p => p.theme.colors.accent};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImgContainer = styled.div`
  padding-top: 55px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;

  &::after {
    content: '';

    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.6) 100%
    );

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
