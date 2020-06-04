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

  test.each([['light'], ['dark']])(
    'renders correctly in %s mode',
    themeValue => {
      const comp = renderer
        .create(
          <ThemeProvider value={themeValue}>
            <Layout title={mockTitle}>
              <MockChildren />
            </Layout>
          </ThemeProvider>
        )
        .toJSON();

      expect(comp).toMatchSnapshot();
    }
  );
});
