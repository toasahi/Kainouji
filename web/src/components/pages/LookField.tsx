import { memo, VFC } from 'react';
import styled from 'styled-components';
import { Color, Font, Responsive } from '../../constant/BaseCss';

import { Header } from '../layouts/Header';

export const LookField: VFC = memo(() => {
  return (
    <SLookField>
      <Header />
      <main>
        <h1>畑を見る</h1>
        <section>
          <SContainer>
            <div>
              <img src="" />
              <h2>越智自動車前畑</h2>
              <p>設置日 : 2021/09/02</p>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </SContainer>
        </section>
      </main>
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
    width: 80%;
    height: 80%;
    /* max-width:950px; */

    h1 {
      font-size: ${Font.text5xl};
      text-align: center;
      padding: 5px;
      margin: 30px 0;
      position: relative;

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        left: 40%;
        width: 250px;
        opacity: 25%;
        height: 15px; /* 線幅 */
      }
    }
  }

  @media (min-width: ${Responsive.md}px) {
    flex-direction: row;
    justify-content: start;
    align-content: center;
  }

  main {
    padding: 20px 40px;
  }
`;

const SContainer = styled.div`
  @media (min-width: ${Responsive.md}) {
  }

  @media (min-width: ${Responsive.xl}px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    div {
      background-color: #fefefe;
      margin-bottom: 30px;
      height: 225px;
      width: 300px;
      border-radius: 12px;
      --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
  }
`;
