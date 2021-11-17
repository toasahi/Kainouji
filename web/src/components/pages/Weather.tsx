import { memo, VFC } from 'react';
import { SWeather } from '../../constant/BaseCss';
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
