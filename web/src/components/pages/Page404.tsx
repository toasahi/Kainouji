import { memo, VFC } from 'react';
import styled from 'styled-components';
import { Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';

export const Page404: VFC = memo(() => {

  return (
    <>
      <SPage404>
        <Header />
        <h1>404ページです</h1>
      </SPage404>
    </>
  );
});

const SPage404 = styled.div`
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
