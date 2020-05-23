export const theme = {
  colors: {
    primary: '#24b47e;',
    accentLight: '#05d5ff',
    accentMid: '#3297d3;',
    background: '#fff',
    bodyText: '#525f7f',
  },
  spacing: 1,
};

export default function createTheme() {
  return { palette: createPalette('light'), spacing: 1 };
}

const common = {
  black: 'rgba(0, 0, 0, 1.0)',
  white: 'rgba(255, 255, 255, 1.0)',
};

const light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    primary: common.white,
    secondary: 'rgba(0, 0, 0, 0.87)',
  },
};

const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: common.white,
  },
};

const types = { light, dark };

function createPalette(type) {
  const primary = {
      light: '#CE7870',
      dark: '#CE7870',
    },
    secondary = {
      light: '#BECBCF',
      dark: '#BECBCF',
    },
    tertiary = {
      light: '#ECBCB0',
      dark: '#ECBCB0',
    },
    success = {
      light: '#6E7D75',
      dark: '#6E7D75',
    },
    warning = {
      light: '#EBA966',
      dark: '#EBA966',
    };

  const paletteOutput = {
    common,
    type,
    primary: primary[type],
    secondary: secondary[type],
    tertiary: tertiary[type],
    warning: warning[type],
    success: success[type],
    ...types[type],
  };

  return paletteOutput;
}
