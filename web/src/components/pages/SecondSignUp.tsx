import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Font, Responsive } from '../../constant/BaseCss';
import { useSingUp } from '../../hooks/useSingUp';
import { IFormValues } from '../../types/form/form';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondInput } from '../Inputs/SecondInput';

export const SecondSignUp = memo(() => {
  const { singUp, loading } = useSingUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    singUp(data);
  };

  return (
    <SSecondSignUp>
      <main>
        <div className="user-info-container">
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
            <div className="button-container">
              <PrimaryButton children="アカウントを作成" position="after" onClick={() => console.log()} />
            </div>
          </form>
          <nav>
            <ul className="account-nav">
              <li className="account-nav-item">
                <label>アカウントをお持ちですか？</label>
                <Link to="/">ログイン</Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </SSecondSignUp>
  );
});

const SSecondSignUp = styled.div`
    main {
      margin: 0 auto;
      border: 1px solid #e8e6e6;
      margin-top: 50px;
      width: 65%;
      background-color: #fefefe;
      padding: 30px 20px;
      border-radius: 10px;

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

          &:after {
            content: '';
            width: 0px;
            height: 0px;
            border: 0;
          }
        }
      }

      span {
        color: #ed4956;
        font-size: ${Font.textSm};
        line-height: 2;
      }

      .account-nav {
        display: flex;
        margin-top: 20px;
        padding: 10px 20px;
        justify-content: center;

        .account-nav-item {
          label{
            font-size:${Font.textSm};
          }
          a {
            margin-left: 10px;
            opacity: 50%;
            &:hover {
              opacity: 100%;
            }
          }
        }
      }
    }

    @media(min-width:${Responsive.sm}){
      main{
        width:30%;

        label{
          font-size:${Font.textBase};
        }
      }
    }
  }
`;
