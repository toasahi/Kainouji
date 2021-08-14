import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Font, Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';

export const Weather: VFC = memo(() => {
  return (
    <>
      <SContainer>
        <Header />
        <main style={{ width: '80%' }}>
          <h1>天気のページです</h1>
          <div className="" style={{ width: '100%', height: 2000 }}></div>
        </main>
      </SContainer>
    </>
  );
});

const SContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 80%;
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;
  }
`;
