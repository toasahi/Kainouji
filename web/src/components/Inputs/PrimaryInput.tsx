import { ChangeEvent, memo, VFC } from 'react';

import { SInput } from '../../constant/BaseCss';

type InputProps = Omit<JSX.IntrinsicElements['input'], 'ref'>;
type Props = InputProps & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  inputId?: string;
  readonly?: boolean;
};

export const PrimaryInput: VFC<Props> = memo((props) => {
  const { onChange, value = '', inputId = '', ...inputProps } = props;
  return <SInput {...inputProps} accept="image/jpeg,image/png" id={inputId} onChange={onChange} value={value} />;
});
