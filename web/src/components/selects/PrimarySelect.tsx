import { memo, VFC } from 'react';
import styled from 'styled-components';
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

const SSelect = styled.select`
  outline: none;
  border-radius: 10px;
  border: solid 1px rgba(232, 230, 230, 0.95);
  padding: 10px;
  transition: all 0.25s ease 0s;
  width: 100%;

  &:focus {
    border: solid 1px #491818;
  }
`;
