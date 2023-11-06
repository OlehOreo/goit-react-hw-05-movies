import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;

  padding-top: 40px;
`;
export const ReviewsItem = styled.li`
  display: flex;
`;
export const ImgThumb = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 24px;
  overflow: hidden;

  margin-right: 30px;
`;
export const ReviewsText = styled.div`
  color: ${p => p.theme.colors.gray};
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.3px;
  width: 900px;

  .heading {
    color: ${p => p.theme.colors.white};
    margin-bottom: 15px;
  }
`;
