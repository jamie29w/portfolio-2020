import Color from 'color';

export const primary_root = Color('#36B7FC');
export const secondary_root = Color('#FF9F2C');

export const primaryColor = Color(primary_root);
export const secondaryColor = Color(secondary_root);

export const colors = {
  light: {
    primary: primaryColor.hex(),
    primaryHover: primaryColor.darken(0.5).hex(),
    secondary: secondaryColor.hex(),
    secondaryHover: primaryColor.darken(0.3).hex(),
    header: 'rgba(35, 35, 35, 0.87)',
    paragraph: 'rgba(75, 75, 75, 0.87)',
    background: 'rgba(255, 255, 255, 1)',
    boxShadowColor: 'rgba(0, 0, 0, 0.25)',
    divider: 'rgba(255, 255, 255, 0.12)',
    gradient2HomePage: primaryColor.lighten(0.43).hex(),
    gradient2Layout: 'rgba(255, 255, 255, 1)',
    navFooterBackground: 'rgba(255, 255, 255, 1)',
  },
  dark: {
    primary: primaryColor.lighten(0.3).hex(),
    primaryHover: primaryColor.darken(0.2).hex(),
    secondary: secondaryColor.lighten(0.1).hex(),
    secondaryHover: secondaryColor.darken(0.2).hex(),
    header: 'rgba(225, 225, 225, 0.87)',
    paragraph: 'rgba(200, 200, 200, 0.87)',
    background: 'rgba(33, 33, 33, 1)', // opaque similar to rgba(0, 0, 0, 0.87)
    boxShadowColor: 'rgba(255, 255, 255, 0.35)',
    divider: 'rgba(255, 255, 255, 0.82)',
    gradient2HomePage: 'rgba(0, 0, 0, 0.87)',
    gradient2Layout: 'rgba(0, 0, 0, 0.87)',
    navFooterBackground: 'rgba( 4, 4, 4, 1)',
  },
};
