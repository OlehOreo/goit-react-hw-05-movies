import styled from 'styled-components';

export const CastList = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: 60px;
`;

export const CardContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
`;

export const InfoAboutActor = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;

  color: ${p => p.theme.colors.white};
  background-color: #000;
`;
