export default function createTheme(type = 'light') {
  return { palette: createPalette(type), spacing: 1 };
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
      dark: 'rgba(186, 100, 92, 1)',
      light: 'rgba(156, 70, 62, 1)',
    },
    secondary = {
      dark: 'rgba(140, 143, 157, 1)',
      light: 'rgba(105, 118, 122, 1)',
    },
    tertiary = {
      dark: 'rgba(215, 168, 156, 1)',
      light: 'rgba(185, 138, 126, 1)',
    },
    success = {
      dark: 'rgba(90, 105, 97, 1)',
      light: 'rgba(60, 75, 67, 1)',
    },
    warning = {
      dark: 'rgba(215, 149, 82, 1)',
      light: 'rgba(185, 119, 52, 1)',
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
