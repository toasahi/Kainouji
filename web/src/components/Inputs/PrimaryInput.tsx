import { ChangeEvent, memo, VFC } from 'react';
import styled from 'styled-components';
import { Color } from '../../constant/BaseCss';

type Props = {
  placeHolder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  inputType: 'text' | 'email' | 'date' | 'file';
  inputId?: string;
  hidden ?: boolean;
};

export const PrimaryInput: VFC<Props> = memo((props) => {
  const { placeHolder = '', onChange, value='', inputType='text', inputId='',hidden=false } = props;
  return <SInput type={inputType} id={inputId} placeholder={placeHolder} onChange={onChange} value={value} hidden={hidden} />;
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
