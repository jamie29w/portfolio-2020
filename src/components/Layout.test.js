import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './Layout';
import { ThemeProvider } from '../styles';

describe('Layout', () => {
  const mockTitle = 'mockTitle for Layout';

  const MockChildren = () => {
    return (
      <>
        <h2>hey there!</h2>
        <p>mock body content, etc</p>
      </>
    );
  };

  it('renders correctly in light mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'light'}>
          <Layout title={mockTitle}>
            <MockChildren />
          </Layout>
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });

  it('renders correctly in dark mode', () => {
    const comp = renderer
      .create(
        <ThemeProvider value={'dark'}>
          <Layout title={mockTitle}>
            <MockChildren />
          </Layout>
        </ThemeProvider>
      )
      .toJSON();

    expect(comp).toMatchSnapshot();
  });
});
