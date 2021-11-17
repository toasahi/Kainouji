import { memo, VFC } from 'react';
import { SButtonAfter, SButtonBefore } from '../../constant/BaseCss';

type Props = {
  children: string;
  onClick: () => void;
  position: 'before' | 'after';
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, position } = props;
  return (
    <>
      {position === 'after' ? (
        <SButtonAfter onClick={onClick}>{children}</SButtonAfter>
      ) : (
        <SButtonBefore onClick={onClick}>{children}</SButtonBefore>
      )}
    </>
  );
});
