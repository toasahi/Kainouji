import axios from 'axios';
import { ChangeEvent, memo, useCallback, useEffect, useState, VFC } from 'react';
import styled from 'styled-components';
import { Responsive } from '../../constant/BaseCss';
import { useGetVegitables } from '../../hooks/useGetVegitables';
import { Vegetable } from '../../types/api/vegetable';
import { Header } from '../layouts/Header';
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
      <section className="">
        <h1>畑を登録</h1>
        <div>
          <label htmlFor="fieldName">名前</label>
          <input type="text" id="fieldName" onChange={onChangeFieldName} value={fieldName} />
        </div>
        <div>
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
        <div>
          <label htmlFor="waterTiming">水をやるタイミング</label>
          <select id="waterTiming" value={waterTiming} onChange={onChangeWaterTiming}>
            <option value="">選択してください</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
          </select>
        </div>
        <div>
          <label htmlFor="settingDay">設置日</label>
          <input type="text" id="settingDay" onChange={onChangeSettingDay} value={settingDay} />
        </div>
        <div>
          <label htmlFor="fieldImage">畑の画像</label>
          <input id="fieldImage" type="file" accept="image/*" onChange={onChangeProcessImage} hidden />
          <label htmlFor="fieldImage">
            <img src={imageUrl} />
          </label>
        </div>
      </section>
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
    height: 80%;
  }

  @media (min-width: ${Responsive.md}px) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;
    }
  }
`;
