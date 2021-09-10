import { memo, VFC } from 'react';
import styled from 'styled-components';

import { Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';

export const User: VFC = memo(() => {
  return (
    <>
      <SUser>
        <Header />
        <main>
          <section>
            <h1>マイページ</h1>
          </section>
        </main>
      </SUser>
    </>
  );
});

const SUser = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;

    section {
      text-align: center;
      padding: 10px;
    }

    h1 {
      font-size: ${Font.text3xl};
      padding: 5px;
      margin-top: 20px;
      margin-bottom: 30px;
      position: relative;
      font-weight: ${FontWeight.fontSemiBold};

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        left: 30%;
        width: 40%;
        opacity: 25%;
        height: 15px; /* 線幅 */
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;

      h1 {
        font-size: ${Font.text5xl};
        padding: 5px;
        margin-top: 75px;
        margin-bottom: 30px;

        ::after {
          left: 38%;
          width: 24%;
          opacity: 25%;
          height: 15px; /* 線幅 */
        }
      }
    }
  }
`;
