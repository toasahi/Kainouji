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

export { Font, Responsive, Color, FontWeight };
