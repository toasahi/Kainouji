import { memo, VFC } from 'react';
import styled from 'styled-components';

import { Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';

export const Login: VFC = memo(() => {
  return (
    <SLogin>
      <Header />
      <h1>ログインページです</h1>
    </SLogin>
  );
});

const SLogin = styled.div`
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
