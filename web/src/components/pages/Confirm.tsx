import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';
import styled from 'styled-components';

import { BaseContainer, Card, Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { useHistory } from 'react-router-dom';
import { useRegisterField } from '../../hooks/useRegisterField';
import { PrimaryInput } from '../Inputs/PrimaryInput';
import { IFormValues } from '../../types/form/form';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useCookies } from 'react-cookie';

type State = {
  data: IFormValues;
  imageUrl?: string;
};

type Vegetable = {
  [key: string]: string;
};

// 仮データ
const vegetableList: Vegetable = {
  '1': 'きゅうり',
  '2': 'キャベツ',
  '3': 'トマト',
  '4': 'さくらひめ',
  '5': 'さといも',
  '6': 'お米',
  '7': 'なす',
};

export const Confirm: VFC = memo(() => {
  const history = useHistory<State>();
  const onClickBack = () =>
    history.push({
      pathname: '/registerfield',
      state: {
        data: state.data,
        imageUrl: state.imageUrl ?? '',
      },
    });
  const [cookies, setCookie] = useCookies(['id']);
  const { loginUser } = useLoginUser();
  const onClickRegister = () => {
    if (Object.keys(cookies).length !== 0 || (loginUser !== null && loginUser.id !== undefined)) {
      registerField(cookies.id, state.data);
    }
  };
  const { registerField, loading, success } = useRegisterField();

  const onChangeTest = () => console.log(1);
  const state = history.location.state;

  return (
    <SConfirm>
      <Header />
      <main>
        <SCard>
          <div className="container ">
            <h1>確認画面</h1>
            <div className="item">
              <label htmlFor="fieldName">名前</label>
              <PrimaryInput
                inputType="text"
                inputId="fieldName"
                onChange={onChangeTest}
                value={state.data.fieldName}
                readonly={true}
              />
            </div>
            <section>
              <div className="item">
                <label htmlFor="vegetable">育てる野菜</label>
                <PrimaryInput
                  inputType="text"
                  inputId="vegetable"
                  onChange={onChangeTest}
                  value={vegetableList[state.data.vegetable]}
                  readonly={true}
                />
              </div>
              <div className="item">
                <label htmlFor="settingDay">設置日</label>
                <PrimaryInput
                  inputType="date"
                  inputId="settingDay"
                  onChange={onChangeTest}
                  value={state.data.settingDay}
                  readonly={true}
                />
              </div>
            </section>
            <div className="item">
              <label htmlFor="image">畑の画像</label>
              <label htmlFor="image">
                <img src={state.imageUrl} style={{ width: '100%', height: '180px' }} />
              </label>
            </div>
            <section className="buttonContainer">
              <PrimaryButton children="前に戻る" position="before" onClick={onClickBack} />
              <PrimaryButton children="登録する" position="after" onClick={onClickRegister} />
            </section>
          </div>
        </SCard>
      </main>
    </SConfirm>
  );
});

const SConfirm = styled(BaseContainer)``;

const SCard = styled(Card)`
  .item {
    margin-top: 15px;

    label {
      line-height: 2;
    }
  }

  .buttonContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    button {
      width: 35%;
    }
  }

  @media (min-width: ${Responsive.md}) {
    section {
      display: flex;
      justify-content: space-between;

      .item {
        width: 45%;
      }
    }
  }

  @media (min-width: ${Responsive.lg}) {
    .item {
      margin-top: 20px;

      label {
        line-height: 3;
      }
      width: 100%;
    }

    .buttonContainer {
      margin-top: 35px;
    }
  }
`;
