import { memo, VFC } from 'react';
import { SecondInput } from '../Inputs/SecondInput';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import { SSecondLogin } from '../../constant/BaseCss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../types/form/form';
import { useChangePassword } from '../../hooks/useChangePassword';

export const ChangePassword: VFC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const { changePassword, loading } = useChangePassword();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    changePassword(data.password);
  };
  return (
    <SSecondLogin>
      <main>
        <div className="user-info-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="item">
              <label htmlFor="password">パスワード</label>
              <SecondInput label="password" inputType="password" register={register} required />
              {errors.password && <span>パスワードを入力してください</span>}
            </div>
            <div className="item">
              <label htmlFor="password">確認パスワード</label>
              <SecondInput label="password" inputType="password" register={register} required />
              {errors.password && <span>パスワードを入力してください</span>}
            </div>
            <div className="button-container">
              <PrimaryButton children="ログイン" position="after" onClick={() => console.log()} />
            </div>
          </form>
          <nav>
            <ul className="account-nav">
              <li className="account-nav-item">
                <Link to="/">ログイン</Link>
              </li>
              <li className="account-nav-item">
                <Link to="/signup">アカウント登録</Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </SSecondLogin>
  );
});
