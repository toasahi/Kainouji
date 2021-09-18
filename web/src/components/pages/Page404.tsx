import { memo, VFC } from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../constant/BaseCss';
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

const SPage404 = styled(BaseContainer)``;
