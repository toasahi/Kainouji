const Font = {
  textSm: 16,
  textBase: 16,
  textLg: 18,
  textXl: 20,
  text2xl: 26,
  text3xl: 30,
  text4xl: 36,
  text5xl: 48,
  text6xl: 60,
} as const;

const Color = {
  primary: '#141517',
};

const Responsive = {
  sm: 575.98,
  md: 767.98,
  lg: 991.98,
  xl: 1199.98,
  xxl: 1399.98,
} as const;

export { Font, Responsive };
