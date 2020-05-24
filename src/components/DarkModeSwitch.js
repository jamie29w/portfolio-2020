import React, { useContext } from 'react';
import Color from 'color';
import styled from '@emotion/styled';
import Switch from 'react-switch';

import { ThemeContext } from '../providers/ThemeProvider';

const DarkModeSwitch = () => {
  const {
    palette: { primary, success, type },
    spacing,
    toggleDarkMode,
  } = useContext(ThemeContext);

  // react-witch only takes hex colors
  const Primary = Color(primary);
  const Success = Color(success);

  return (
    <Label>
      <LabelText spacing={spacing}>Toggle dark mode:</LabelText>
      <Switch
        checked={type === 'dark'}
        checkedIcon={false}
        onChange={() => toggleDarkMode()}
        onColor={Success.hex()}
        offColor={Primary.lighten(0.5).hex()}
        uncheckedIcon={false}
      />
    </Label>
  );
};

export default DarkModeSwitch;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LabelText = styled.span`
  margin-right: ${({ spacing }) => spacing / 2}rem;
`;
