import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';
import styled from 'styled-components';

import { Color, Font, Responsive } from '../../constant/BaseCss';
import { useGetVegitables } from '../../hooks/useGetVegitables';
import { Header } from '../layouts/Header';
import { PrimaryInput } from '../Inputs/PrimaryInput';
// import Image from '../../images/default.jpeg';

export const RegisterField: VFC = memo(() => {
  const [fieldName, setFieldName] = useState('');
  const [vegetable, setVegetable] = useState('');
  const [waterTiming, setWaterTiming] = useState('');
  const [settingDay, setSettingDay] = useState('');
  const [imageUrl, setImageUrl] = useState('../../images/defaultImage.jpeg');
  const { getVegetables, loading, vegetableLists } = useGetVegitables();
  const onChangeFieldName = (event: ChangeEvent<HTMLInputElement>) => setFieldName(event.target.value);
  const onChangeVegetable = (event: ChangeEvent<HTMLSelectElement>) => setVegetable(event.target.value);
  const onChangeWaterTiming = (event: ChangeEvent<HTMLSelectElement>) => setWaterTiming(event.target.value);
  const onChangeSettingDay = (event: ChangeEvent<HTMLInputElement>) => setSettingDay(event.target.value);
  const onChangeProcessImage = (event: ChangeEvent<HTMLInputElement>) =>
    event.currentTarget.files !== null
      ? setImageUrl(URL.createObjectURL(event.currentTarget.files[0]))
      : setImageUrl('');

  useEffect(() => getVegetables(), []);

  console.log(vegetableLists);

  return (
    <SRegisterField>
      <Header />
      <main>
        <SCard>
          <h1>畑を登録</h1>
          <div className="item">
            <label htmlFor="fieldName">名前</label>
            <input type="text" id="fieldName" onChange={onChangeFieldName} value={fieldName} />
            <PrimaryInput placeHolder="畑の名前" />
          </div>
          <div className="item">
            <label htmlFor="vegetable">育てる野菜</label>
            <select id="vegetable" value={vegetable} onChange={onChangeVegetable}>
              <option value="">選択してください</option>
              {vegetableLists.map((vegetableList) => (
                <option key={vegetableList.id} value={vegetableList.id}>
                  {vegetableList.vegetable}
                </option>
              ))}
            </select>
          </div>
          <div className="item">
            <label htmlFor="waterTiming">水をやるタイミング</label>
            <select id="waterTiming" value={waterTiming} onChange={onChangeWaterTiming}>
              <option value="">選択してください</option>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="settingDay">設置日</label>
            <input type="text" id="settingDay" onChange={onChangeSettingDay} value={settingDay} />
          </div>
          <div className="item">
            <label htmlFor="fieldImage">畑の画像</label>
            <input id="fieldImage" type="file" accept="image/*" onChange={onChangeProcessImage} hidden />
            <label htmlFor="fieldImage">
              <img src={imageUrl} />
            </label>
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
  min-height: 95vh;

  main {
    width: 100%;
  }

  @media (min-width: ${Responsive.md}px) {
    flex-direction: row;
    justify-content: start;
    align-content: center;
  }
`;

const SCard = styled.section`
  @media (min-width: ${Responsive.lg}px) {

    width: 750px;
    max-width:750px;
    height: 680px;
    background-color: #fefefe;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 30px;
    padding: 25px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    h1{
      font-size: ${Font.text5xl};
      text-align:center;
      padding:5px;
      margin:30px 0;
      position:relative;

      ::after{
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: "";
        position:absolute;
        bottom:0;
        left:33.5%;
        width:250px;
        opacity:25%;
        height: 15px; /* 線幅 */
      }
    }

    .item{
      max-width:700px;
      width:100%;
    }
  }
`;
