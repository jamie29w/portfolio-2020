import Color from 'color';

export default function createTheme(type = 'light') {
  return { palette: createPalette(type), spacing: 1 };
}

const common = {
  black: 'rgba(0, 0, 0, 1.0)',
  white: 'rgba(255, 255, 255, 1.0)',
};

const light = {
  text: {
    header: 'rgba(50, 50, 50, 0.87)',
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
    header: 'rgba(225, 225, 225, 0.87)',
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
  const primary_root = Color('#54D3F7');
  const secondary_root = Color('#54D3F7');
  const tertiary_root = Color('#FFA591');

  const primary = {
      dark: primary_root.lighten(0.3).hex(),
      light: primary_root.hex(),
    },
    secondary = {
      dark: secondary_root.lighten(0.3).hex(),
      light: secondary_root.hex(),
    },
    tertiary = {
      dark: tertiary_root.lighten(0.1).hex(),
      light: tertiary_root.hex(),
    },
    success = {
      dark: secondary_root.lighten(0.3).hex(),
      light: secondary_root.hex(),
    },
    warning = {
      dark: tertiary_root.lighten(0.1).hex(),
      light: tertiary_root.hex(),
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
