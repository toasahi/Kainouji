import styled from 'styled-components';

const Font = {
  textSm: '12px',
  textBase: '16px',
  textLg: '18px',
  textXl: '20px',
  text2xl: '25px',
  text3xl: '30px',
  text4xl: '36px',
  text5xl: '48px',
  text6xl: '60px',
} as const;

const Color = {
  primary: '#141517',
  secondary: '#9FC730',
  tertiary: '#491818',
};

const Responsive = {
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1399.98px',
} as const;

const FontWeight = {
  fontThin: 100,
  fontExtralLight: 200,
  fontLight: 300,
  fontNormal: 400,
  fontMedium: 500,
  fontSemiBold: 600,
  fontBold: 700,
};

const BaseContainer = styled.div`
  display: flex;
  -webkit-display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;
  }

  @media (min-width: ${Responsive.md}) {
    main {
      width: 80%;
    }

    flex-direction: row;
    justify-content: start;
    align-content: center;
  }
`;

const Card = styled.section`
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

  @media (min-width: ${Responsive.md}) {
    width: 85%;
    height: 680px;
    background-color: #fefefe;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 30px;
    padding: 25px;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    .container {
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (min-width: ${Responsive.lg}) {
    width: 700px;

    h1 {
      font-size: ${Font.text5xl};
      padding: 5px;
      margin: 30px 0;
    }
  }
`;

//PageのWrapper
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

const SLookField = styled(BaseContainer)`
  main {
    section {
      text-align: center;
    }

    h1 {
      font-size: ${Font.text3xl};
      padding: 5px;
      margin-top: 20px;
      margin-bottom: 30px;
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
  }
  @media (min-width: ${Responsive.md}) {
    main {
      h1 {
        font-size: ${Font.text5xl};
        padding: 5px;
        margin-top: 78px;
        margin-bottom: 30px;

        ::after {
          left: 38%;
          width: 24%;
          opacity: 25%;
          height: 15px; /* 線幅 */
        }
      }
    }
  }
`;

const SContainer = styled.div`
  padding: 10px;
  .filedContent {
    display: flex;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 90px;
      object-fit: cover;
    }

    div {
      padding: 5px;
      text-align: left;
      line-height: 2;
      p {
        white-space: nowrap;
      }
    }
  }

  @media (min-width: ${Responsive.sm}) {
    .filedContent {
      div {
        line-height: 2;
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    margin-left: 10px;

    .filedContent {
      display: block;
      background-color: #fefefe;
      margin-bottom: 30px;
      height: 250px;
      width: 100%;
      border-radius: 12px;
      --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

      div {
        padding: 10px;

        p {
          font-size: ${Font.textSm};
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.01);
      }

      img {
        border-radius: 12px 12px 0 0;
        height: 160px;
      }
    }

    a {
      width: 30%;
    }
  }

  @media (min-width: ${Responsive.lg}) {
    .filedContent {
      div {
        h2 {
          font-size: ${Font.textXl};
        }
      }
    }
  }

  @media (min-width: ${Responsive.xl}) {
    padding: 30px;

    .filedContent {
      width: 300px;

      div {
        padding: 10px 15px;
      }
    }
  }
`;

const SRegisterField = styled(BaseContainer)`
  main{
    span {
      color: #ed4956;
        font-size: ${Font.textSm};
        line-height: 2;
    }
      
    select {
      color: ${Color.primary};
      outline: none;
      border-radius: 10px;
      border: solid 1px rgba(232, 230, 230, 0.95);
      padding: 13px;
      transition: all 0.25s ease 0s;
      width: 100%;
      
      &:focus {
        border: solid 1px #491818;
      }
    }
  }
`;

const SRegisterFieldCard = styled(Card)`
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
    section {
      display: flex;
      justify-content: space-between;

      .item {
        width: 45%;
      }
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
    margin-top: 25px;
    padding: 25px;

    .item {
      width: 100%;
    }
  }
`;


const SGraph = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;

    section {
      margin: 0 auto;
      margin-top: 45px;
      width: 100%;

      .graph {
        margin-bottom: 10px;
      }

      select,
      button {
        color: ${Color.primary};
        background-color: #fefefe;
        outline: none;
        border-radius: 25px;
        border: solid 1px rgba(232, 230, 230, 0.95);
        padding: 10px 15px;
        transition: all 0.25s ease 0s;
        width: 100px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.01);
        }
      }

      .dataContainer {
        display: flex;
        justify-content: space-around;
      }

      .today {
        margin-top: 30px;
        margin-right: 10px;
        text-align: right;
      }
    }

    button {
      position: relative;

      svg {
        position: absolute;
        top: 30%;
        left: 10%;
      }
    }

    h1 {
      font-size: ${Font.text3xl};
      text-align: center;
      position: relative;
      font-weight: ${FontWeight.fontSemiBold};
      margin-top: 30px;

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        opacity: 25%;
        height: 10px;
        width: 40%;
        left: 29%;
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    flex-direction: row;
    justify-content: start;
    align-content: center;

    main {
      width: 80%;
      section {
        margin-top: 100px;
      }

      .graph {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
      }

      .dataContainer {
        width: 350px;
        display: flex;
        justify-content: space-around;
      }

      h1 {
        font-size: ${Font.text5xl};
        padding: 5px;
        margin: 30px 0;
        margin-top: 75px;
        margin-bottom: 30px;

        ::after {
          left: 30%;
          width: 40%;
          height: 15px; /* 線幅 */
        }
      }

      section {
        width: 900px;
      }
    }
  }
`;

const SWeather = styled(BaseContainer)`
  main {
    h1 {
      font-size: ${Font.text3xl};
      color: ${Color.tertiary};
      text-align: center;
      padding: 5px;
      margin-top: 20px;
      margin-bottom: 30px;
      position: relative;
      font-weight: ${FontWeight.fontSemiBold};
    }

    .keyframe2 {
      margin-top: 300px;
      animation-name: anim_h;
    }

    @keyframes anim_h {
      0% {
        transform: translate(0px, 0);
      }
      100% {
        transform: translate(80px, 0);
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    main {
      h1 {
        text-align: center;

        font-size: ${Font.text5xl};
        padding: 5px;
        margin-top: 78px;
      }
    }
  }
`;
const SConfirm = styled(BaseContainer)``;

const SConfirmCard = styled(Card)`
  .item {
    margin-top: 15px;

    label {
      line-height: 2;
    }
  }

  .buttonContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    button {
      width: 35%;
    }
  }

  @media (min-width: ${Responsive.md}) {
    section {
      display: flex;
      justify-content: space-between;

      .item {
        width: 45%;
      }
    }
  }

  @media (min-width: ${Responsive.lg}) {
    .item {
      margin-top: 20px;

      label {
        line-height: 3;
      }
      width: 100%;
    }

    .buttonContainer {
      margin-top: 35px;
    }
  }
`;

const SUser = styled(BaseContainer)``;

const SUserCard = styled(Card)`
  h1 {
    ::after {
      left: 25%;
      width: 50%;
    }
  }

  .userContainer {
    margin-left: 20px;
    margin-top: 20px;
    line-height: 2;
    h2 {
      font-size: ${Font.text2xl};
      font-weight: ${FontWeight.fontSemiBold};
    }
    .userImage {
      .iconImage {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        object-fit: cover;
      }
    }
  }

  @media (min-width: ${Responsive.md}) {
    height: 400px;
    padding: 15px;

    h1 {
      font-size: ${Font.text3xl};

      ::after {
        left: 30%;
        width: 40%;
      }
    }
    .container {
      .userContainer {
        display: flex;
        margin-top: 60px;
        margin-left: 45px;
        padding: 10px;
        display: flex;

        .userInfo {
          padding: 0 10px;
          margin-left: 25px;
          line-height: 2;
          h2 {
            font-size: ${Font.text3xl};
            font-weight: ${FontWeight.fontSemiBold};
          }
        }
      }
    }
  }

  @media (min-width: ${Responsive.lg}) {
    height: 400px;
    margin-top: 25px;
    padding: 25px;

    h1 {
      font-size: ${Font.text5xl};
      padding: 5px;
      margin: 30px 0;

      ::after {
        left: 27%;
        width: 280px;
      }
    }
  }
`;

const SPage404 = styled(BaseContainer)``;

export {
  Font,
  Responsive,
  Color,
  FontWeight,
  BaseContainer,
  Card,
  SSecondSignUp,
  SWeather,
  SSecondLogin,
  SLookField,
  SContainer,
  SRegisterField,
  SRegisterFieldCard,
  SConfirm,
  SConfirmCard,
  SGraph,
  SPage404,
  SUser,
  SUserCard,
};
