import { memo, useState, VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Color, Responsive,Font } from '../../constant/BaseCss';
import { useLogin } from '../../hooks/useLogin';
import { IFormValues } from '../../types/form/form';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondInput } from '../Inputs/SecondInput';
import { Header } from '../layouts/Header';

export const Home: VFC = memo(() => {
  const [userForm, setUserForm] = useState(true);
  const onClickChangeForm = () => setUserForm(!userForm);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    login(data);
  };
  const { login, loading } = useLogin();
  return (
    <SSHome>
      {userForm ? (
        <>
          <main>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="item">
                  <label htmlFor="email">メールアドレス</label>
                  <SecondInput label="email" inputType="email" register={register} required />
                  {errors.email && <span>ユーザ名を入力してください</span>}
                </div>
                <div className="item">
                  <label htmlFor="password">パスワード</label>
                  <SecondInput label="password" inputType="password" register={register} required />
                  {errors.password && <span>パスワードを入力してください</span>}
                </div>
                <div className="buttonContainer">
                  <PrimaryButton children="ログイン" position="after" onClick={() => console.log()} />
                </div>
              </form>
              <section>
                <div className="item">
                  <button onClick={onClickChangeForm}>ユーザーを登録</button>
                </div>
                <div className="item">
                  <button>パスワードを忘れましたか？</button>
                </div>
              </section>
            </div>
          </main>
        </>
      ) : (
        <>
          <main>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="item">
                  <label htmlFor="email">メールアドレス</label>
                  <SecondInput label="email" inputType="email" register={register} required />
                  {errors.email && <span>メールアドレスを入力してください</span>}
                </div>
                <div className="item">
                  <label htmlFor="username">ユーザ名</label>
                  <SecondInput label="username" inputType="text" register={register} required />
                  {errors.username && <span>ユーザ名を入力してください</span>}
                </div>
                <div className="item">
                  <label htmlFor="password">パスワード</label>
                  <SecondInput label="password" inputType="password" register={register} required />
                  {errors.password && <span>パスワードを入力してください</span>}
                </div>
                <div className="buttonContainer">
                  <PrimaryButton children="登録" position="after" onClick={() => console.log()} />
                </div>
              </form>
              <section>
                <div className="item">
                  <button onClick={onClickChangeForm}>ログイン</button>
                </div>
                <div className="item">
                  <button>パスワードを忘れましたか？</button>
                </div>
              </section>
            </div>
          </main>
        </>
      )}
    </SSHome>
  );
});

const SHome = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 95vh;

  main {
    width: 100%;
    height: 80%;
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;
    }
  }
`;

const SSHome = styled.div`
  main {
    border: 1px solid #e8e6e6;

    span {
      color: #ed4956;
      font-size: ${Font.textSm};
      line-height: 2;
    }
  }
  @media (min-width: ${Responsive.md}) {
    main {
      margin: 0 auto;
      margin-top: 50px;
      width: 30%;
      background-color: #fefefe;
      padding: 60px 20px;

      label {
        line-height: 3;
      }
    }
  }
`;
