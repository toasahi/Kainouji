import { memo, VFC } from 'react';
import styled from 'styled-components';
import { Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';

export const Home: VFC = memo(() => {
  return (
    <SHome>
      <Header />
      <main>ホームページです</main>
    </SHome>
  );
});

const SHome = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 95vh;

  main {
    width: 80%;
    height: 80%;
  }

  @media (min-width: ${Responsive.md}px) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;
    }
  }
`;
