import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';
import styled from 'styled-components';

import { Color, Font, Responsive } from '../../constant/BaseCss';
import { useGetVegitables } from '../../hooks/useGetVegitables';
import { Header } from '../layouts/Header';
import { PrimaryInput } from '../Inputs/PrimaryInput';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { useHistory } from 'react-router-dom';
// import Image from '../../images/default.jpeg';

export const Confirm: VFC = memo(() => {
  const history = useHistory();
  const onClickBack = () => history.push('/registerfield');
  const onClickRegister = () => history.push('/registerfield/confirm');

  return (
    <SConfirm>
      <Header />
      <main>
        <SCard>
          <PrimaryButton children="前に戻る" position="before" onClick={onClickBack} />
          <PrimaryButton children="登録する" position="after" onClick={onClickRegister} />
        </SCard>
      </main>
    </SConfirm>
  );
});

const SConfirm = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 95vh;

  main {
    width: 80%;
  }

  @media (min-width: ${Responsive.md}px) {
    flex-direction: row;
    justify-content: start;
    align-content: center;
  }
`;

const SCard = styled.section`
  @media (min-width: ${Responsive.md}px) {
    width: 650px;
  }

  @media (min-width: ${Responsive.lg}px) {
    width: 700px;
    height: 680px;
    background-color: #fefefe;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 30px;
    padding: 25px;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

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
        left: 33.5%;
        width: 250px;
        opacity: 25%;
        height: 15px; /* 線幅 */
      }
    }

    .item {
      max-width: 700px;
      width: 100%;
    }
  }
`;
