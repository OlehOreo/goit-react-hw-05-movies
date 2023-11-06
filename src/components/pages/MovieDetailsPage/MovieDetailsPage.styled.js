import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${p => p.theme.spacing(5)};
`;

export const GoBack = styled(Link)`
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 3;

  border: 1px solid #888;
  border-radius: 2px;
  color: ${p => p.theme.colors.white};
  font-weight: 400;
  font-size: 18px;
  padding: 9px 20px;
  line-height: 13px;
  white-space: nowrap;
  transition: ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const SectionHero = styled.div`
  width: 1280px;
  padding-top: 57px;
  // padding: 57px 9vw 0;
  position: relative;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 526px;
  min-width: 124px;
  padding: 100px 0 16px 0;
  position: relative;
  width: 80%;
  z-index: 2;

  gap: 10px;
  line-height: 1.4;

  color: #fff;

  &::after {
    background: linear-gradient(
      90deg,
      #181818 10%,
      hsla(0, 0%, 9%, 0.98) 20%,
      hsla(0, 0%, 9%, 0.97) 25%,
      hsla(0, 0%, 9%, 0.95) 35%,
      hsla(0, 0%, 9%, 0.94) 40%,
      hsla(0, 0%, 9%, 0.92) 45%,
      hsla(0, 0%, 9%, 0.9) 50%,
      hsla(0, 0%, 9%, 0.87) 55%,
      hsla(0, 0%, 9%, 0.82) 60%,
      hsla(0, 0%, 9%, 0.75) 65%,
      hsla(0, 0%, 9%, 0.63) 70%,
      hsla(0, 0%, 9%, 0.45) 75%,
      hsla(0, 0%, 9%, 0.27) 80%,
      hsla(0, 0%, 9%, 0.15) 85%,
      hsla(0, 0%, 9%, 0.08) 90%,
      hsla(0, 0%, 9%, 0.03) 95%,
      hsla(0, 0%, 9%, 0)
    );
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: -200px;
    top: 0;
    z-index: -1;
  }
  .title {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 30px;
    color: #f8eb62;
    line-height: 30px;

    margin-bottom: 30px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex: 5 9 auto;
  flex-direction: row;
  height: 0;
  padding-bottom: 55%;
  z-index: 1;
`;

export const HeroImg = styled.div`
  background-image: url(${props => props.$backgroundUrl});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
  right: -6%;
  width: 103%;
  display: block;

  &::after {
    content: '';
    background: linear-gradient(
      0deg,
      #181818 0,
      hsla(0, 0%, 9%, 0.987) 1.62%,
      hsla(0, 0%, 9%, 0.951) 3.1%,
      hsla(0, 0%, 9%, 0.896) 4.5%,
      hsla(0, 0%, 9%, 0.825) 5.8%,
      hsla(0, 0%, 9%, 0.741) 7.06%,
      hsla(0, 0%, 9%, 0.648) 8.24%,
      hsla(0, 0%, 9%, 0.55) 9.42%,
      hsla(0, 0%, 9%, 0.45) 10.58%,
      hsla(0, 0%, 9%, 0.352) 11.76%,
      hsla(0, 0%, 9%, 0.259) 12.94%,
      hsla(0, 0%, 9%, 0.175) 14.2%,
      hsla(0, 0%, 9%, 0.104) 15.5%,
      hsla(0, 0%, 9%, 0.049) 16.9%,
      hsla(0, 0%, 9%, 0.013) 18.38%,
      hsla(0, 0%, 9%, 0) 20%
    );

    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

export const AdditionalInfo = styled.div`
  color: ${p => p.theme.colors.white};

  .tile {
    margin-bottom: 30px;
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    line-height: 34px;
  }
  .infoList {
    display: flex;
    gap: 46px;
  }
`;

export const LinkBtn = styled(NavLink)`
  border: 1px solid #888;
  border-radius: 2px;
  color: ${p => p.theme.colors.white};
  font-weight: 400;
  font-size: 18px;
  padding: 9px 20px;
  line-height: 13px;
  white-space: nowrap;
  transition: ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }

  &.active {
    color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }
`;
