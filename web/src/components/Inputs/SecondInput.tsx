import { ChangeEvent, memo, VFC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import { SInput } from '../../constant/BaseCss';
import { IFormValues } from '../../types/form/form';

type Props = {
  label: Path<IFormValues>;
  inputType?: 'text' | 'email' | 'date' | 'file' | 'password' | 'number';
  register: UseFormRegister<IFormValues>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required: boolean;
};

export const SecondInput: VFC<Props> = memo((props) => {
  const { label, register, required, inputType, onChange, value } = props;
  return (
    <>
      {inputType !== 'file' ? (
        <>
          {inputType !== 'password' ? (
            <>
              <SInput
                type={inputType}
                id={label}
                {...register(label, { required, min: 6 })}
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
                defaultValue={value || ''}
                autoComplete="off"
              />
            </>
          )}
        </>
      ) : (
        <>
          <SInput
            type={inputType}
            id={label}
            {...register(label, { required })}
            onChange={onChange}
            defaultValue={value ?? ''}
            accept=".jpg,image/jpeg,image/png"
          />
        </>
      )}
    </>
  );
});
