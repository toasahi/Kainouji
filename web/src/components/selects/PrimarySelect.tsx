import { Color } from '../../constant/BaseCss';
import { memo, VFC } from 'react';
import styled from 'styled-components';
// import { Vegetable } from '../../types/api/vegetable';

// type WaterTiming = {
//   water: number;
//   title: string;
//   onChangeWaterTiming: () => void;
// };

// type VegetableName = {
//   id: number;
//   title: string;
//   onChangeVegetable: () => void;
// };

// type Props = {
//   lists: VegetableName | WaterTiming | null;
// };

type Props = {
  selectId: string;
  labelText: string;
};

export const PrimarySelect: VFC<Props> = memo((props) => {
  const { selectId, labelText } = props;
  return (
    <>
      <label htmlFor={selectId}>{labelText}</label>
      <SSelect id={selectId}>
        <option value="">選択してください</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
        <option value="30">30%</option>
      </SSelect>
    </>
  );
});

const SLavel = styled.label`
  color: ${Color.primary};
`;

const SSelect = styled.select`
  color: ${Color.primary};
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
