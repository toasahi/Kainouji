import { memo, VFC } from 'react';
import { SPage404 } from '../../constant/BaseCss';

export const Page404: VFC = memo(() => {
  return (
    <>
      <SPage404>
        <h1>404ページです</h1>
      </SPage404>
    </>
  );
});
