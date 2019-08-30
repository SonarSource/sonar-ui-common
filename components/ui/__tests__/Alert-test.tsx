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

// TODO : https://github.com/styled-components/jest-styled-components#global-installation
import 'jest-styled-components';
import * as React from 'react';
import { renderWithTheme } from '../../../helpers/testUtils';
import { Alert, AlertProps } from '../Alert';

it('should render basic alert', () => {
  ['error', 'warning', 'success', 'info'].forEach(variant => {
    expect(render({ variant })).toMatchSnapshot();
  });
});

it('should render inline alert', () => {
  expect(render({ display: 'inline' })).toMatchSnapshot();
});

it('should render banner alert', () => {
  expect(render({ display: 'banner' })).toMatchSnapshot();
});

function render(props: Partial<AlertProps>) {
  return renderWithTheme(
    <Alert className="alert-test" id="error-message" variant="error" {...props}>
      This is an error!
    </Alert>
  );
}
