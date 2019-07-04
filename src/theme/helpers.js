import breakpoints from './breakpoints';

export const onSmallOnly = (styles = '') => `
  @media screen and (max-width: ${breakpoints[0]}) {
    ${styles}
  }
`;

export const onMedium = (styles = '') => `
  @media screen and (min-width: ${breakpoints[1]}) {
    ${styles}
  }
`;
