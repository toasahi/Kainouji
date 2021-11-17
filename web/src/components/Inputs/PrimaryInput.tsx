import { ChangeEvent, memo, VFC } from 'react';
import styled from 'styled-components';
import { Color, Responsive } from '../../constant/BaseCss';

type InputProps = Omit<JSX.IntrinsicElements['input'],"ref">;

type Props = InputProps & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  inputId?: string;
  readonly?: boolean;
};

export const PrimaryInput: VFC<Props> = memo((props) => {
  const { onChange, value = '', inputId = '', ...inputProps } = props;
  return (
    <SInput {...inputProps} accept="image/jpeg,image/png" id={inputId} onChange={onChange} value={value}/>
  );
});

const SInput = styled.input`
  background-color: #fefefe;
  border: solid 1px rgba(232, 230, 230, 0.95);
  outline: none;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.25s ease 0s;
  width: 100%;
  box-sizing: border-box;

  ::placeholder {
    color: ${Color.primary};
    opacity: 65%;
  }

  &:focus {
    border: solid 1px ${Color.tertiary};
  }

  @media (min-width: ${Responsive.sm}) {
    padding: 15px;
  }
`;
