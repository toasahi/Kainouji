import { memo, VFC } from 'react';
import styled from 'styled-components';

export const Header: VFC = memo(() => {
  return (
    <header>
      <nav>
        <img />
        <ul>
          <li>畑を見る</li>
          <li>畑を登録</li>
          <li>天気予報</li>
          <li>ログイン</li>
        </ul>
      </nav>
    </header>
  );
});

const SHeader = styled.header`
  height: 100%;
  background-color: #e8e6e6;
  width: 200px;
  position: sticky;
  z-index: 1px;
`;
