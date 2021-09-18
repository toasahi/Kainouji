import { Color } from '../../constant/BaseCss';
import { memo, VFC } from 'react';
import styled from 'styled-components';
import { Vegetable } from '../../types/api/vegetable';

type Props = {
  selectId: string;
  labelText: string;
  onChange?: () => void;
  lists?: Array<Vegetable>;
};

export const PrimarySelect: VFC<Props> = memo((props) => {
  const { selectId, labelText, lists = [] } = props;
  return (
    <>
      <SLavel htmlFor={selectId}>{labelText}</SLavel>
      <SSelect id={selectId}>
        <option value="">選択してください</option>
        {lists.map((list) => (
          <option key={list.id} value={list.id}>
            {list.vegetable}
          </option>
        ))}
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
