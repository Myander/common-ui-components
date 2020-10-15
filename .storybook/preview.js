import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { darkTheme, lightTheme } from '../src/themes/themes';

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [lightTheme, darkTheme]));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
