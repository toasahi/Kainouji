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
      position: relative;

      ::after {
        background-color: ${Color.secondary}; /* 線色 */
        border-radius: 5px; /* 線幅の半分 */
        content: '';
        position: absolute;
        bottom: 0;
        opacity: 25%;
        height: 15px; /* 線幅 */
      }
    }
  }
`;

export { Font, Responsive, Color, FontWeight, BaseContainer,Card };
