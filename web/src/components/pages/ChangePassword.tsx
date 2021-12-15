import { memo, VFC } from 'react';
import { SecondInput } from '../Inputs/SecondInput';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import { SPasswordChange } from '../../constant/BaseCss';
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
    changePassword(data.email);
  };
  return (
    <SPasswordChange>
      <main>
        <div className="user-info-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="item">
              <label htmlFor="email">メール</label>
              <SecondInput label="email" inputType="email" register={register} required />
              {errors.email && <span>メールを入力してください</span>}
            </div>
            <div className="button-container">
              <PrimaryButton children="再設定メールを送信" position="after" onClick={() => console.log()} />
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
    </SPasswordChange>
  );
});
