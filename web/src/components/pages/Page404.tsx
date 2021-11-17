import { memo, VFC } from 'react';
import { SPage404 } from '../../constant/BaseCss';
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
