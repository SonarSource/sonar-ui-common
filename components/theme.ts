/*
 * Sonar UI Common
 * Copyright (C) 2019-2019 SonarSource SA
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
import styled, {
  BaseThemedCssFunction,
  css,
  ThemeConsumer,
  ThemeContext,
  ThemedBaseStyledInterface,
  ThemeProvider,
  ThemeProviderComponent
} from 'styled-components';
import { mockedTheme } from './__mocks__/mockedTheme';

export interface Theme {
  colors: T.Dict<string>;
  sizes: T.Dict<string>;
  rawSizes: T.Dict<number>;
  fonts: T.Dict<string>;
  zIndexes: T.Dict<string>;
  others: T.Dict<string>;
}

// Hack : override the default value of the context used for theme by styled-component
// As we can't pass a default value when it is constructed
// This allows outside tests to get the mocked theme value without specifiying a theme provider
if (process.env.NODE_ENV === 'test') {
  (ThemeContext as any)['_currentValue'] = mockedTheme;
  (ThemeContext as any)['_currentValue2'] = mockedTheme;
}

const typedStyled = styled as ThemedBaseStyledInterface<Theme>;
const typedCss = css as BaseThemedCssFunction<Theme>;
const typedContext = ThemeContext as React.Context<Theme>;
const typedProvider = ThemeProvider as ThemeProviderComponent<Theme>;
const typedConsumer = ThemeConsumer as React.Consumer<Theme>;

export {
  typedProvider as ThemeProvider,
  typedConsumer as ThemeConsumer,
  typedStyled as styled,
  typedCss as css
};
export default typedContext;
