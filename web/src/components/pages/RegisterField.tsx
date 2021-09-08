import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';
import styled from 'styled-components';

import { Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import { useGetVegitables } from '../../hooks/useGetVegitables';
import { Header } from '../layouts/Header';
import { PrimaryInput } from '../Inputs/PrimaryInput';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { useHistory } from 'react-router-dom';
import Images from 'images/defaultImage.jpeg';
import { PrimarySelect } from '../selects/PrimarySelect';
import { useGetThreshold } from '../../hooks/useGetThreshold';

export const RegisterField: VFC = memo(() => {
  const history = useHistory();
  const onClickConfirm = () =>
    history.push({
      pathname: '/registerfield/confirm',
      state: {
        fieldName: fieldName,
        vegetable: vegetable,
        settingDay: settingDay,
        imageUrl: imageUrl,
      },
    });
  const [fieldName, setFieldName] = useState('');
  const [vegetable, setVegetable] = useState('');
  const [settingDay, setSettingDay] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { getVegetables, loading, vegetableLists } = useGetVegitables();
  const onChangeFieldName = (event: ChangeEvent<HTMLInputElement>) => setFieldName(event.target.value);
  const onChangeVegetable = (event: ChangeEvent<HTMLSelectElement>) => setVegetable(event.target.value);
  const onChangeSettingDay = (event: ChangeEvent<HTMLInputElement>) => setSettingDay(event.target.value);
  const onChangeProcessImage = (event: ChangeEvent<HTMLInputElement>) =>
    event.currentTarget.files !== null
      ? setImageUrl(URL.createObjectURL(event.currentTarget.files[0]))
      : setImageUrl('');

  useEffect(() => getVegetables(), []);

  console.log(imageUrl);

  return (
    <SRegisterField>
      <Header />
      <main>
        <SCard>
          <div className="container">
            <h1>畑を登録</h1>
            <div className="item">
              <label htmlFor="fieldName">名前</label>
              <PrimaryInput
                inputType="text"
                inputId="fieldName"
                onChange={onChangeFieldName}
                value={fieldName}
                placeHolder="畑の名前"
              />
            </div>
            <section>
              <div className="item">
                <label htmlFor="vegetable">育てる野菜</label>
                <select id="vegetable" value={vegetable} onChange={onChangeVegetable} required>
                  <option value="">選択してください</option>
                  {vegetableLists.map((vegetableList) => (
                    <option key={vegetableList.id} value={vegetableList.id}>
                      {vegetableList.vegetable}
                    </option>
                  ))}
                </select>
                {/* <PrimarySelect selectId="vegetableKind" labelText="育てる野菜" lists={vegetableLists}/> */}
              </div>
              {/* <div className="item">
                <label htmlFor="waterTiming">水をやるタイミング</label>
                <select id="waterTiming" value={waterTiming} onChange={onChangeWaterTiming}>
                  <option value="">選択してください</option>
                  <option value="10%">10%</option>
                  <option value="20%">20%</option>
                  <option value="30%">30%</option>
                </select>
              </div> */}
              <div className="item">
                <label htmlFor="settingDay">設置日</label>
                <PrimaryInput inputType="date" inputId="settingDay" onChange={onChangeSettingDay} value={settingDay} />
              </div>
            </section>
            <div className="item">
              <label htmlFor="fieldImage">畑の画像</label>
              {imageUrl === '' ? (
                <>
                  <div style={{ height: '198px' }}>
                    <PrimaryInput inputType="file" inputId="fieldImage" onChange={onChangeProcessImage} />
                  </div>
                </>
              ) : (
                <>
                  <label htmlFor="fieldImage">
                    <img src={imageUrl} style={{ width: '100%', height: '180px' }} />
                  </label>
                  <PrimaryInput inputType="file" inputId="fieldImage" onChange={onChangeProcessImage} hidden={true} />
                </>
              )}
            </div>
            <div className="buttonContainer">
              <PrimaryButton children="確認画面へ進む" position="after" onClick={onClickConfirm} />
            </div>
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
