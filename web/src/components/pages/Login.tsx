import { memo, VFC } from 'react';
import { Header } from '../layouts/Header';

export const Login: VFC = memo(() => {
  return (
    <>
      <Header />
      <h1>ログインページです</h1>
    </>
  );
});
