import Color from 'color';

export const primary_root = Color('#36B7FC');
export const secondary_root = Color('#FF9F2C');

export const primaryColor = Color(primary_root);
export const secondaryColor = Color(secondary_root);

export const colors = {
  light: {
    primary: primaryColor,
    primaryHover: primaryColor.lighten(0.3),
    secondary: secondaryColor,
    secondaryHover: primaryColor.lighten(0.3),
    header: 'rgba(35, 35, 35, 0.87)',
    paragraph: 'rgba(75, 75, 75, 0.87)',
    background: 'rgba(255, 255, 255, 1)',
    boxShadowColor: 'rgba(0, 0, 0, 0.25)',
    divider: 'rgba(255, 255, 255, 0.12)',
    gradient1HomePage: 'rgba(255, 255, 255, 1)',
    gradient2HomePage: primaryColor.lighten(0.43),
    navFooterBackground: 'rgba(255, 255, 255, 1)',
  },
  dark: {
    primary: primaryColor.lighten(0.3).fade(0.13),
    primaryHover: primaryColor.lighten(0.6).fade(0.13),
    secondary: secondaryColor.lighten(0.1).fade(0.13),
    secondaryHover: secondaryColor.lighten(0.4).fade(0.13),
    header: 'rgba(225, 225, 225, 0.87)',
    paragraph: 'rgba(200, 200, 200, 0.87)',
    background: 'rgba(0, 0, 0, 0.87)',

    boxShadowColor: 'rgba(255, 255, 255, 0.35)',
    divider: 'rgba(255, 255, 255, 0.82)',
    gradient1HomePage: 'rgba(33, 33, 33, 1)',
    gradient2HomePage: 'rgba(0, 0, 0, 0.87)',
    navFooterBackground: 'rgba( 4, 4, 4, 1)',
  },
};
