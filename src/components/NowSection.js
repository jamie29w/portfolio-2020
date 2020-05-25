import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { ThemeContext } from '../providers/ThemeProvider';

const NowListSection = ({ section: { title, details } }) => {
  const {
    palette: { tertiary },
    spacing,
  } = useContext(ThemeContext);

  return (
    <>
      <h3>{title}</h3>
      <StyledUl bordercolor={tertiary} spacing={spacing}>
        {details.map(detailItem => (
          <li key={detailItem}>{detailItem}</li>
        ))}
      </StyledUl>
    </>
  );
};

export default NowListSection;

const StyledUl = styled.ul`
  &:not(:last-of-type) {
    border-bottom: ${({ bordercolor }) => `2px solid ${bordercolor}`};
    padding-bottom: ${({ spacing }) => spacing}rem;
  }
`;
