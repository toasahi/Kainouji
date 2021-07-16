import { memo, VFC } from 'react';
import { Header } from '../layouts/Header';

export const Home: VFC = memo(() => {
  return (
    <div style={{ display: 'flex' }}>
      <Header />
      <h1>ホームページです</h1>
    </div>
  );
});
