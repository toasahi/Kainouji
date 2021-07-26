import { memo, VFC } from 'react';
import styled from 'styled-components';
import { Color } from '../../constant/BaseCss';

type Props = {
  placeHolder?: string;
};

export const PrimaryInput: VFC<Props> = memo((props) => {
  const { placeHolder = '' } = props;
  return <SInput type="text" placeholder={placeHolder} />;
});

const SInput = styled.input`
  background-color: #fefefe;
  border: solid 1px rgba(232, 230, 230, 0.95);
  outline: none;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.25s ease 0s;
  width: 100%;

  ::placeholder {
    color: ${Color.primary};
    opacity: 65%;
  }

  &:focus {
    border: solid 1px #491818;
  }
`;
