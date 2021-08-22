import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Font, Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';
import workerImage from '../../images/worker.png';

export const Weather: VFC = memo(() => {
  return (
    <>
      <SContainer>
        <Header />
        <main style={{ width: '80%' }}>
          <div className="" style={{ width: '100%', height: 2000 }}>
            <h1>準備中です</h1>
            <img
              src={workerImage}
              className="animation keyframe2"
              style={{ width: '400px', height: '300px', display: 'block', margin: '0 auto', marginTop: '200px' }}
            />
          </div>
        </main>
      </SContainer>
    </>
  );
});

const SContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;

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
  }
`;
