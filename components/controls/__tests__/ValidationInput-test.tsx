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
import { shallow } from 'enzyme';
import * as React from 'react';
import ValidationInput from '../ValidationInput';

it('should render', () => {
  expect(
    shallow(
      <ValidationInput
        description="My description"
        error={undefined}
        help="Help message"
        id="field-id"
        isInvalid={false}
        isValid={false}
        label="Field label"
        required={true}>
        <div />
      </ValidationInput>
    )
  ).toMatchSnapshot();
});

it('should render with error', () => {
  expect(
    shallow(
      <ValidationInput
        description={<div>My description</div>}
        error="Field error message"
        id="field-id"
        isInvalid={true}
        isValid={false}
        label="Field label">
        <div />
      </ValidationInput>
    )
  ).toMatchSnapshot();
});

it('should render when valid', () => {
  expect(
    shallow(
      <ValidationInput
        description="My description"
        error={undefined}
        id="field-id"
        isInvalid={false}
        isValid={true}
        label="Field label"
        required={true}>
        <div />
      </ValidationInput>
    )
  ).toMatchSnapshot();
});
