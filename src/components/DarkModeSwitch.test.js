import React from 'react';
import renderer from 'react-test-renderer';

import DarkModeSwitch from '.';

describe('DarkModeSwitch', () => {
  it('renders correctly', () => {
    const comp = renderer.create(<DarkModeSwitch />).toJSON();

    expect(comp).toMatchSnapshot();
  });
});
