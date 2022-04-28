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

// ------------InputのStyle-----------------

const SInput = styled.input`
  background-color: #fefefe;
  border: solid 1px rgba(232, 230, 230, 0.95);
  outline: none;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.25s ease 0s;
  width: 100%;
  box-sizing: border-box;

  ::placeholder {
    color: ${Color.primary};
    opacity: 65%;
  }

  &:focus {
    border: solid 1px ${Color.tertiary};
  }

  @media (min-width: ${Responsive.sm}) {
    padding: 15px;
  }
`;

// ------------ButtonのStyle-----------------
const SButton = styled.button`
  background-color: #fefefe;
  text-align: left;
  width: 180px;
  padding: 10px;
  opacity: 90%;
  color: ${Color.tertiary};
  border: solid 1px ${Color.tertiary};
  border-radius: 40px;
  outline: none;
  cursor: pointer;
  position: relative;

  &:hover {
    transition: background-color ease 0.4s, color ease 0.4s;
    background-color: ${Color.tertiary};
    color: #fefefe;
    opacity: 100%;
  }
`;

const SButtonAfter = styled(SButton)`
  padding-left: 25px;

  &:after {
    content: '';
    width: 7px;
    height: 7px;
    border-top: solid 1px ${Color.tertiary};
    border-right: solid 1px ${Color.tertiary};
    position: absolute;
    right: 20px;
    top: 40%;
    transform: rotate(45deg);
  }

  &:hover::after {
    border-top: solid 1px #fefefe;
    border-right: solid 1px #fefefe;
  }
`;

const SButtonBefore = styled(SButton)`
  text-align: right;
  padding-right: 25px;

  &:before {
    content: '';
    width: 7px;
    height: 7px;
    border-bottom: solid 1px ${Color.tertiary};
    border-left: solid 1px ${Color.tertiary};
    position: absolute;
    left: 20px;
    top: 40%;
    transform: rotate(45deg);
  }

  &:hover::before {
    border-bottom: solid 1px #fefefe;
    border-left: solid 1px #fefefe;
  }
`;

// ------------SliderのStyle-----------------
const SRangeSlider = styled.div`
  h3 {
    color: #aaa;
    font-weight: 500;
  }
  h4 {
    color: #999;
    font-weight: 500;
    &:after {
      content: '%';
      padding-left: 1px;
    }
  }

  input[type='range'] {
    outline: 0;
    border: 0;
    border-radius: 500px;
    width: 400px;
    max-width: 100%;
    margin: 0 0 16px;
    transition: box-shadow 0.2s ease-in-out;
    // Chrome
    @media screen and (-webkit-min-device-pixel-ratio: 0) {
      & {
        overflow: hidden;
        height: 40px;
        -webkit-appearance: none;
        background-color: #ddd;
      }
      &::-webkit-slider-runnable-track {
        height: 40px;
        -webkit-appearance: none;
        color: #444;
        // margin-top: -1px;
        transition: box-shadow 0.2s ease-in-out;
      }
      &::-webkit-slider-thumb {
        width: 40px;
        -webkit-appearance: none;
        height: 40px;
        cursor: ew-resize;
        background: #fff;
        box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 40px #1597ff;
        border-radius: 50%;
        transition: box-shadow 0.2s ease-in-out;
        position: relative;
        // top: 1px;
      }
      &:active::-webkit-slider-thumb {
        background: #fff;
        box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 3px #1597ff;
      }
    }
    // Firefox
    &::-moz-range-progress {
      background-color: #43e5f7;
    }
    &::-moz-range-track {
      background-color: #9a905d;
    }
    // IE
    &::-ms-fill-lower {
      background-color: #43e5f7;
    }
    &::-ms-fill-upper {
      background-color: #9a905d;
    }
  }

  #h4-container {
    width: 400px;
    max-width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    #h4-subcontainer {
      width: 100%;
      position: relative;
      h4 {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        width: 40px;
        height: 40px;
        color: #fff !important;
        font-size: 12px;
        transform-origin: center -10px;
        transform: translateX(-50%);
        transition: margin-top 0.15s ease-in-out, opacity 0.15s ease-in-out;
        span {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #1597ff;
          border-radius: 0 50% 50% 50%;
          transform: rotate(45deg);
          z-index: -1;
        }
      }
    }
  }
  input:not(:active) + #h4-container h4 {
    opacity: 0;
    margin-top: -50px;
    pointer-events: none;
  }
`;

// ------------HeaderのStyle-----------------
const SHeader = styled.header`
  background-color: #fefefe;
  border-top: solid 2px #e8e6e6;
  width: 100%;
  height: 80px;
  position: sticky;
  bottom: 0;
  position: -webkit-sticky;
  /* position: fixed; */
  z-index: 999;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      cursor: pointer;
    }
  }

  .iconContainer {
    display: none;
  }

  svg {
    display: block;
    margin: 0 auto;
    padding: 10px;
  }

  a {
    font-size: ${Font.textBase};
    font-weight: ${FontWeight.fontExtralLight};
    transition: all 0.3s ease 0s;

    &:hover {
      color: ${Color.secondary};
    }
  }

  footer {
    display: none;
  }

  @media (min-width: ${Responsive.md}) {
    width: 25%;
    min-width: 230px;
    top: 0;
    border-top: none;
    border-right: solid 2px #e8e6e6;
    display: block;
    height: 100%;
    min-height: 100vh;

    .iconContainer {
      display: block;
      margin-top: 10px;
      cursor: pointer;
    }

    a {
      font-size: ${Font.textXl};
      height: 30px;
    }

    nav {
      margin-top: 40px;
      padding: 30px;
    }

    ul {
      display: block;
      margin-top: 65px;
      white-space: nowrap;
    }

    li {
      margin-top: 2.5rem;
      padding-right: 15px;
    }

    svg {
      display: inline;
      width: 20px;
      height: 20px;
      margin-right: 25px;
      padding: 0;
    }

    footer {
      display: block;
      position: absolute;
      bottom: 20px;
      small {
        font-size: ${Font.textSm};
        padding: 30px;
        opacity: 30%;
      }
    }
  }

  @media (min-width: ${Responsive.lg}) {
    width: 20%;

    nav {
      margin-top: 30px;
      margin-left: 13px;
      padding: 30px;
    }

    a {
      font-size: ${Font.text2xl};
    }

    svg {
      width: 26px;
      height: 26px;
      margin-right: 25px;
    }
  }
`;

// ------------ModalのStyle-----------------
const SOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const SModal = styled.div`
  background-color: #f9f9f9;
  border-radius: 25px;
  z-index: 2;
  width: 75%;
  padding: 2em;

  header {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    h1 {
      font-size: ${Font.text3xl};
      font-weight: ${FontWeight.fontBold};
      text-align: center;
      margin-bottom: 15px;
    }

    .svgContainer {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 5px;
      transition: all 0.3s ease 0s;

      &:hover {
        background-color: ${Color.secondary};
      }
    }
  }

  .container {
    margin-top: 10px;
    h2 {
      font-size: ${Font.textLg};
    }
    .waterContainer {
      margin-top: 20px;
      label {
        line-height: 2;
        opacity: 70%;
      }
    }

    .buttonContainer {
      margin-top: 45px;
    }
  }

  @media (min-width: ${Responsive.md}) {
    width: 30%;
    .buttonContainer {
      margin-top: 45px;
    }
  }
`;

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: space-between;
  justify-content: space-between;
  min-height: 100vh;

  main {
    width: 100%;
  }

  h1 {
    display: none;
  }

  @media (min-width: ${Responsive.md}) {
    main {
      width: 80%;
    }

    h1 {
      display: block;
    }

    flex-direction: row;
    justify-content: start;
    align-content: center;
  }
`;

// ------------CardのStyle-----------------
const Card = styled.section`
  margin: 0 auto;
  width: 85%;

  h1 {
    font-size: ${Font.text3xl};
    text-align: center;
    padding: 5px;
    margin: 20px 0;
    position: relative;
    font-weight: ${FontWeight.fontMedium};

    ::after {
      background-color: ${Color.secondary}; /* 線色 */
      border-radius: 5px; /* 線幅の半分 */
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 40%;
      opacity: 25%;
      height: 15px; /* 線幅 */
    }
  }

  @media (min-width: ${Responsive.md}) {
    width: 85%;
    height: 680px;
    background-color: #fefefe;
    margin: 25px auto 0;
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

//------------PageのStyle-----------------
const SLogin = styled.div`
  main {
    margin: 50px auto 0;
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
        margin: 30px auto 0;
        text-align: center;
        padding-left: 0;

        &:after {
          content: '';
          width: 0;
          height: 0;
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

const SPasswordChange = styled.div`
  main {
    margin: 50px auto 0;
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
        margin: 30px auto 0;
        text-align: center;
        padding-left: 0;

        &:after {
          content: '';
          width: 0;
          height: 0;
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

const SSignUp = styled.div`
  main {
    border: 1px solid #e8e6e6;
    margin: 50px auto 0;
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
        margin: 30px auto 0;

        &:after {
          content: '';
          width: 0;
          height: 0;
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
        label {
          font-size: ${Font.textSm};
        }

        a {
          display: block;
          margin-left: 10px;
          opacity: 50%;

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

      label {
        font-size: ${Font.textBase};
      }
      .account-nav {
        .account-nav-item {
          a {
            display: inline;
          }
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
      font-weight: ${FontWeight.fontMedium};

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 30%;
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
  main {
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
      font-weight: ${FontWeight.fontMedium};
      margin-top: 30px;

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        opacity: 25%;
        height: 10px;
        width: 35%;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }

  @media (min-width: ${Responsive.sm}) {
    main {
      h1 {
        font-size: ${Font.text4xl};
        padding: 5px;
        margin: 75px 0 30px;
      }

      .graph {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
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
        margin: 75px 0 30px;

        ::after {
          left: 50%;
          transform: translate(-50%, 0);
          width: 30%;
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
      font-weight: ${FontWeight.fontMedium};
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
      left: 50%;
      transform: translate(-50%, 0);
      width: 50%;
    }
  }

  .userContainer {
    margin-left: 20px;
    margin-top: 20px;
    line-height: 2;
    h2 {
      font-size: ${Font.text2xl};
      font-weight: ${FontWeight.fontMedium};
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
        left: 50%;
        transform: translate(-50%, 0);
        width: 40%;
      }
    }
    .container {
      .userContainer {
        display: flex;
        margin-top: 60px;
        margin-left: 45px;
        padding: 10px;

        .userInfo {
          padding: 0 10px;
          margin-left: 25px;
          line-height: 2;
          h2 {
            font-size: ${Font.text3xl};
            font-weight: ${FontWeight.fontMedium};
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
        left: 50%;
        transform: translate(-50%, 0);
        width: 280px;
      }
    }
  }
`;

const SPage404 = styled(BaseContainer)``;

export {
  Color,
  SInput,
  SButtonAfter,
  SButtonBefore,
  SRangeSlider,
  SOverlay,
  SModal,
  SHeader,
  BaseContainer,
  SSignUp,
  SWeather,
  SLogin,
  SPasswordChange,
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
