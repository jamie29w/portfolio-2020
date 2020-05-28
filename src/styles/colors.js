import Color from 'color';

const primary_root = Color('#54D3F7');
const secondary_root = Color('#FFA591');

const primaryColor = Color(primary_root);
const secondaryColor = Color(secondary_root);

export const colors = {
  light: {
    primary: primaryColor.hex(),
    primaryHover: primaryColor.darken(0.5).hex(),
    secondary: secondaryColor.hex(),
    secondaryHover: primaryColor.darken(0.3).hex(),
    header: 'rgba(50, 50, 50, 0.87)',
    paragraph: 'rgba(75, 75, 75, 0.87)',
    divider: 'rgba(255, 255, 255, 0.12)',
    background: 'rgba(255, 255, 255, 1)',
  },
  dark: {
    primary: primaryColor.lighten(0.3).hex(),
    primaryHover: primaryColor.darken(0.2).hex(),
    secondary: secondaryColor.lighten(0.1).hex(),
    secondaryHover: secondaryColor.darken(0.2).hex(),
    header: 'rgba(225, 225, 225, 0.87)',
    paragraph: 'rgba(200, 200, 200, 0.87)',
    divider: 'rgba(255, 255, 255, 0.82)',
    background: 'rgba(50, 50, 50, 0.87)',
  },
};
