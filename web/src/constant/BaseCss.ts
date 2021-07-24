const Font = {
  textSm: '12px',
  textBase: '16px',
  textLg: '18px',
  textXl: '20px',
  text2xl: '26px',
  text3xl: '30px',
  text4xl: '36px',
  text5xl: '48px',
  text6xl: '60px',
} as const;

const Color = {
  primary: '#141517',
  secondary : '#9FC730'
};

const Responsive = {
  sm: 575.98,
  md: 767.98,
  lg: 991.98,
  xl: 1199.98,
  xxl: 1399.98,
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

export { Font, Responsive, Color, FontWeight };
