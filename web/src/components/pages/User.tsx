import { memo, VFC } from 'react';
import styled from 'styled-components';

import { Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';

export const User: VFC = memo(() => {
  return (
    <>
      <SUser>
        <Header />
        <h1>ユーザーページ</h1>
      </SUser>
    </>
  );
});

const SUser = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;
    }
  }
`;
