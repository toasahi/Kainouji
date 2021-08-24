import { memo, VFC } from 'react';
import { Color, Font, FontWeight, Responsive } from '../../constant/BaseCss';
import { Header } from '../layouts/Header';
import styled from 'styled-components';
import { SecondInput } from '../Inputs/SecondInput';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues } from '../../types/form/form';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { useSingUp } from '../../hooks/useSingUp';

export const SignUp: VFC = memo(() => {
  const {singUp,loading} = useSingUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
    singUp(data);
  };

  return (
    <SSignUp>
      <Header />
      <main>
        <SCard>
          <div className="container">
            <h1>ユーザー登録</h1>
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
            <Link to='/login'>ログイン</Link>
          </div>
        </SCard>
      </main>
    </SSignUp>
  );
});

const SSignUp = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;

    span {
      color: #ed4956;
      font-size: ${Font.textSm};
      line-height: 2;
    }
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

const SCard = styled.section`
  margin: 0 auto;
  width: 85%;

  h1 {
    font-size: ${Font.text3xl};
    text-align: center;
    padding: 5px;
    margin: 20px 0;
    position: relative;
    font-weight: ${FontWeight.fontSemiBold};

    ::after {
      background-color: ${Color.secondary}; /* 線色 */
      border-radius: 5px; /* 線幅の半分 */
      content: '';
      position: absolute;
      bottom: 0;
      left: 30%;
      width: 40%;
      opacity: 25%;
      height: 15px; /* 線幅 */
    }
  }

  .buttonContainer {
    text-align: center;
    margin-top: 10px;
  }

  .item {
    margin-top: 15px;

    label {
      line-height: 2;
    }
  }

  @media (min-width: ${Responsive.md}) {
    width: 85%;
    height: 680px;
    padding: 15px;
    background-color: #fefefe;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 30px;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    h1 {
      font-size: ${Font.text3xl};
      text-align: center;
      padding: 5px;
      margin: 20px 0;
      position: relative;
      font-weight: ${FontWeight.fontSemiBold};

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        left: 30%;
        width: 40%;
        opacity: 25%;
        height: 15px; /* 線幅 */
      }
    }

    section {
      display: flex;
      justify-content: space-between;

      .item {
        width: 45%;
      }
    }

    .container {
      width: 80%;
      margin: 0 auto;
    }

    .item {
      margin-top: 20px;

      label {
        line-height: 3;
      }
    }

    .buttonContainer {
      text-align: center;
      margin-top: 25px;
    }
  }

  @media (min-width: ${Responsive.lg}) {
    width: 700px;
    height: 680px;
    margin-top: 25px;
    padding: 25px;

    h1 {
      font-size: ${Font.text5xl};
      padding: 5px;
      margin: 30px 0;

      ::after {
        border-radius: 5px; /* 線幅の半分 */
        bottom: 0;
        left: 22%;
        width: 320px;
        height: 15px; /* 線幅 */
      }
    }

    .item {
      width: 100%;
    }
  }
`;
