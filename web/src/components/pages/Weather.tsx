import { memo, VFC } from 'react';
import styled from 'styled-components';
import { BaseContainer, Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';
import workerImage from '../../images/worker.png';

export const Weather: VFC = memo(() => {
  return (
    <>
      <SWeather>
        <Header />
        <main>
          <div>
            <h1>耕し中です</h1>
            <img
              src={workerImage}
              className="animation keyframe2"
              style={{ width: '400px', height: '300px', display: 'block', margin: '0 auto', marginTop: '100px' }}
            />
          </div>
        </main>
      </SWeather>
    </>
  );
});

const SWeather = styled(BaseContainer)`
  main {
    h1 {
      font-size: ${Font.text3xl};
      color: ${Color.tertiary};
      text-align: center;
      padding: 5px;
      margin-top: 20px;
      margin-bottom: 30px;
      position: relative;
      font-weight: ${FontWeight.fontSemiBold};
    }

    .keyframe2 {
      margin-top: 300px;
      animation-name: anim_h;
    }

    @keyframes anim_h {
      0% {
        transform: translate(0px, 0);
      }
      100% {
        transform: translate(80px, 0);
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    main {
      h1 {
        text-align: center;

        font-size: ${Font.text5xl};
        padding: 5px;
        margin-top: 78px;
      }
    }
  }
`;
