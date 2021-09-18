import { memo, VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Responsive, Font } from '../../constant/BaseCss';
import { useLogin } from '../../hooks/useLogin';
import { IFormValues } from '../../types/form/form';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondInput } from '../Inputs/SecondInput';

export const Login: VFC = memo(() => {
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
    <SSecondLogin>
      <>
        <main>
          <div className="user-info-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="item">
                <label htmlFor="email">メールアドレス</label>
                <SecondInput label="email" inputType="email" register={register} required />
                {errors.email && <span>メールアドレスを入力してください</span>}
              </div>
              <div className="item">
                <label htmlFor="password">パスワード</label>
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
                  <Link to="/signup">アカウント作成</Link>
                </li>
                <li className="account-nav-item">
                  <Link to="">パスワードを忘れましたか？</Link>
                </li>
              </ul>
            </nav>
          </div>
        </main>
      </>
    </SSecondLogin>
  );
});

const SSecondLogin = styled.div`
  main {
    margin: 0 auto;
    margin-top: 50px;
    width: 65%;
    background-color: #fefefe;
    padding: 30px 20px;
    border-radius: 10px;
    border: 1px solid #e8e6e6;

    span {
      color: #ed4956;
      font-size: ${Font.textSm};
      line-height: 2;
    }

    .user-info-container {
      margin-top: 30px;
    }

    label {
      line-height: 3;
      opacity: 75%;
    }

    .button-container {
      text-align: center;
      button {
        margin: 0 auto;
        margin-top: 30px;
        text-align: center;
        padding-left: 0;

        &:after {
          content: '';
          width: 0px;
          height: 0px;
          border: 0;
        }
      }
    }

    .account-nav {
      margin-top: 20px;
      padding: 10px 20px;

      .account-nav-item {
        a {
          opacity: 50%;
          padding-top: 10px;
          &:hover {
            opacity: 100%;
          }
        }
      }
    }
  }

  @media (min-width: ${Responsive.sm}) {
    main {
      width: 30%;
      .account-nav-item {
        a {
          font-size: ${Font.textBase};
        }
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    .account-nav {
      display: flex;
      justify-content: space-around;
    }
  }
`;
