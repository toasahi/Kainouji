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
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
            <div className="grid-item">5</div>
            <div className="grid-item">6</div>
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
    margin-bottom: 20%;
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
`;

const SContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  .grid-item {
    background-color: aqua;
    text-align: center;
  }
`;
