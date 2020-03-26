/*
 * Sonar UI Common
 * Copyright (C) 2019-2020 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { css, ThemeContext as EmotionThemeContext } from '@emotion/core';
import emotionStyled, { CreateStyled } from '@emotion/styled';
import {
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps,
  useTheme as emotionUseTheme,
  withTheme
} from 'emotion-theming';
import * as React from 'react';
// mockedTheme is in fact the default theme
// eslint-disable-next-line jest/no-mocks-import
import { mockedTheme } from './__mocks__/mockedTheme';

export interface Theme {
  colors: T.Dict<string>;
  sizes: T.Dict<string>;
  rawSizes: T.Dict<number>;
  fonts: T.Dict<string>;
  zIndexes: T.Dict<string>;
  others: T.Dict<string>;
}

export interface ThemedProps {
  theme: Theme;
}

const ThemeContext = EmotionThemeContext as React.Context<Theme>;

// Hack : override the default value of the context used for theme by emotion
// As we can't pass a default value when it is constructed
// This allows outside tests to get the mocked theme value without specifiying a theme provider
if (process.env.NODE_ENV === 'test') {
  (ThemeContext as any)['_currentValue'] = mockedTheme;
  (ThemeContext as any)['_currentValue2'] = mockedTheme;
}

export const styled = emotionStyled as CreateStyled<Theme>;
export const ThemeConsumer = ThemeContext.Consumer;
export const ThemeProvider = EmotionThemeProvider as React.ProviderExoticComponent<
  ThemeProviderProps<Theme>
>;
export const useTheme = emotionUseTheme as () => Theme;

export { css, withTheme };
export default ThemeContext;
