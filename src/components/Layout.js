import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';
import Loading from './Loading/Loading';

import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Layout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Suspense
          fallback={
            <Loading
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};
