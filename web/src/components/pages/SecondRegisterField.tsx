import { ChangeEvent, ChangeEventHandler, memo, useEffect, useState, VFC } from 'react';
import styled from 'styled-components';

import { Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import { useGetVegitables } from '../../hooks/useGetVegitables';
import { Header } from '../layouts/Header';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { useHistory } from 'react-router-dom';
import { SecondInput } from '../Inputs/SecondInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../types/form/form';

type State = {
  data?: IFormValues;
  imageUrl?: string;
};

export const SecondRegisterField: VFC = memo(() => {
  const history = useHistory<State>();
  const state = history.location.state;
  const historyState = state === undefined;
  const [imageUrl, setImageUrl] = useState(historyState ? '' : state.data?.fieldImage);
  const [vegetable, setVegetable] = useState(historyState ? '' : state.data?.vegetable);
  const { getVegetables, loading, vegetableLists } = useGetVegitables();
  const onChangeVegetable = (event: ChangeEvent<HTMLSelectElement>) => {
    setVegetable(event.target.value);
  };
  const onChangeProcessImage = (event: ChangeEvent<HTMLInputElement>) =>
    event.currentTarget.files !== null
      ? setImageUrl(URL.createObjectURL(event.currentTarget.files[0]))
      : setImageUrl('');

  useEffect(() => getVegetables(), []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    history.push({
      pathname: '/registerfield/confirm',
      state: {
        data: data,
        imageUrl: imageUrl,
      },
    });
  };

  return (
    <SRegisterField>
      <Header />
      <main>
        <SCard>
          <div className="container">
            <h1>畑を登録</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="item">
                <label htmlFor="fieldName">名前</label>
                <SecondInput
                  label="fieldName"
                  inputType="text"
                  register={register}
                  required
                  value={historyState ? '' : state.data?.fieldName}
                />
                {errors.fieldName && <span>畑の名前を入力してください</span>}
              </div>
              <section>
                <div className="item">
                  <label htmlFor="vegetable">育てる野菜</label>
                  <select
                    id="vegetable"
                    {...register('vegetable', { required: true })}
                    onChange={onChangeVegetable}
                    value={vegetable}
                  >
                    <option value="">選択してください</option>
                    <option value="1">きゅうり</option>
                    <option value="2">キャベツ</option>
                    <option value="3">トマト</option>
                  </select>
                  {errors.vegetable && <span>野菜を選択してください</span>}
                </div>

                <div className="item">
                  <label htmlFor="settingDay">設置日</label>
                  <SecondInput
                    inputType="date"
                    label="settingDay"
                    register={register}
                    required
                    value={historyState ? '' : state.data?.settingDay}
                  />
                  {errors.settingDay && <span>設置日を入力してください</span>}
                </div>
              </section>

              <div className="item">
                <label htmlFor="image">畑の画像</label>
                <div style={{ height: '160px' }}>
                  <SecondInput
                    inputType="file"
                    label="image"
                    register={register}
                    onChange={onChangeProcessImage}
                    required={false}
                  />
                </div>
              </div>
              <div className="buttonContainer">
                <PrimaryButton children="確認画面へ" position="after" onClick={() => console.log()} />
              </div>
            </form>
          </div>
        </SCard>
      </main>
    </SRegisterField>
  );
});

const SRegisterField = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;

    span {
      color: #ed4956;
      font-size: ${Font.textSm};
      line-height: 2;
    }

    select {
      color: ${Color.primary};
      outline: none;
      border-radius: 10px;
      border: solid 1px rgba(232, 230, 230, 0.95);
      padding: 13px;
      transition: all 0.25s ease 0s;
      width: 100%;

      &:focus {
        border: solid 1px #491818;
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    main {
      width: 80%;
    }
    flex-direction: row;
    justify-content: start;
    align-content: center;
  }
`;

const SCard = styled.section`
  margin: 0 auto;
  width: 85%;

  h1 {
    font-size: ${Font.text3xl};
    text-align: center;
    padding: 5px;
    margin: 20px 0;
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

  .buttonContainer {
    text-align: center;
    margin-top: 10px;
  }

  .item {
    margin-top: 15px;

    label {
      line-height: 2;
    }
  }

  @media (min-width: ${Responsive.md}) {
    width: 85%;
    height: 680px;
    padding: 15px;
    background-color: #fefefe;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 30px;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    h1 {
      font-size: ${Font.text3xl};
      text-align: center;
      padding: 5px;
      margin: 20px 0;
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

    section {
      display: flex;
      justify-content: space-between;

      .item {
        width: 45%;
      }
    }

    .container {
      width: 80%;
      margin: 0 auto;
    }

    .item {
      margin-top: 20px;

      label {
        line-height: 3;
      }
    }

    .buttonContainer {
      text-align: center;
      margin-top: 25px;
    }
  }

  @media (min-width: ${Responsive.lg}) {
    width: 700px;
    height: 680px;
    margin-top: 25px;
    padding: 25px;

    h1 {
      font-size: ${Font.text5xl};
      padding: 5px;
      margin: 30px 0;

      ::after {
        border-radius: 5px; /* 線幅の半分 */
        bottom: 0;
        left: 28%;
        width: 250px;
        height: 15px; /* 線幅 */
      }
    }

    .item {
      width: 100%;
    }
  }
`;
