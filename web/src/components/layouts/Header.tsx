import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header: VFC = memo(() => {
  const headerLinks = [
    {
      path: '',
      to: 'lookfield',
      children: '畑を見る',
    },
    {
      path: '',
      to: 'lookfield',
      children: '畑を登録',
    },
    {
      path: '',
      to: 'weather',
      children: '天気予報',
    },
    {
      path: '',
      to: 'login',
      children: 'ログイン',
    },
  ];
  return (
    <SHeader>
      <nav>
        <img />
        <ul>
          {headerLinks.map((link,index) => (
            <li key={index}>
              <img src={link.path} />
              <Link to={link.to}>{link.children}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </SHeader>
  );
});

const SHeader = styled.header`
  height: 100%;
  min-height:100vh;
  background-color: #fefefe;
  border-right: solid 1px #e8e6e6;
  width: 20%;
  position: sticky;
  z-index: 1px;
`;
