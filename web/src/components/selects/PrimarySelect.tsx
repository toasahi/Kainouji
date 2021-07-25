import { memo, VFC } from 'react';
import { Vegetable } from '../../types/api/vegetable';

type WaterTiming = {
  water: number;
  title: string;
  onChangeWaterTiming: () => void;
};

type VegetableName = {
  id: number;
  title: string;
  onChangeVegetable: () => void;
};

type Props = {
  lists: VegetableName | WaterTiming | null;
};

export const PrimarySelect: VFC<Props> = memo((props) => {
  const { lists } = props;
  return (
    <>
      <label htmlFor="">育てる野菜</label>
      <select id="">
        <option value="">選択してください</option>
      </select>
    </>
  );
});
