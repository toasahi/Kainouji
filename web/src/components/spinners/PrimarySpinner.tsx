import { memo, VFC } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

export const PrimarySpinner: VFC = memo(() => {
  return (
    <>
      <div className="spinner">
        <Loader
          type="TailSpin"
          color="#9FC730"
          height={80}
          width={80}
          timeout={3000} //3 secs
        />
      </div>
    </>
  );
});
