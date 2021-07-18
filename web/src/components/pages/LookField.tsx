import { memo, VFC } from 'react';
import styled from 'styled-components';
import { Responsive } from '../../constant/BaseCss';

import { Header } from '../layouts/Header';

export const LookField: VFC = memo(() => {
  return (
    <SLookField>
      <Header />
      <h1>畑の見るページです</h1>
    </SLookField>
  );
});

const SLookField = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 95vh;

  main {
    width: 100%;
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
