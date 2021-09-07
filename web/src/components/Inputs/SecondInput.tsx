import { ChangeEvent, memo, VFC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { Color, Responsive } from '../../constant/BaseCss';
import { IFormValues } from '../../types/form/form';

type Props = {
  label: Path<IFormValues>;
  inputType?: 'text' | 'email' | 'date' | 'file' | 'password';
  register: UseFormRegister<IFormValues>;
  placeHolder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required: boolean;
};

export const SecondInput: VFC<Props> = memo((props) => {
  const { label, register, required, inputType, placeHolder, onChange, value } = props;
  return (
    <>
      {inputType !== 'file' ? (
        <>
          <SInput
            type={inputType}
            id={label}
            {...register(label, { required })}
            onChange={onChange}
            defaultValue={value || ''}
          />
        </>
      ) : (
        <>
          <SInput
            type={inputType}
            id={label}
            {...register(label, { required })}
            onChange={onChange}
            defaultValue={value ?? ''}
            accept='.jpg,image/jpeg,image/png'
          />
        </>
      )}
    </>
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
