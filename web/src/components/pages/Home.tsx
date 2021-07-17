import { memo, VFC } from 'react';
import styled from 'styled-components';
import { Header } from '../layouts/Header';

export const Home: VFC = memo(() => {
  return (
    <SHome>
      <Header />
      <h1>ホームページです</h1>
    </SHome>
  );
});


const SHome = styled.div`
  width:80%;
  display:flex;
`