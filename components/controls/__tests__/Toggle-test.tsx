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

import { mount } from 'enzyme';
import * as React from 'react';
import { click } from '../../../helpers/testUtils';
import Toggle from '../Toggle';

it('should render correctly', () => {
  const wrapper = mountRender();
  expect(wrapper).toMatchSnapshot();
});

it('should call onChange if NOT disabled', () => {
  const onChange = jest.fn();
  const wrapper = mountRender({ disabled: false, onChange });
  click(wrapper.find('button'));
  expect(onChange).toBeCalledWith(false);
});

it('should NOT call onChange if disabled', () => {
  const onChange = jest.fn();
  const wrapper = mountRender({ disabled: true, onChange });
  click(wrapper.find('button'));
  expect(onChange).not.toHaveBeenCalled();
});

function mountRender(props?: Partial<Toggle['props']>) {
  return mount(
    <Toggle disabled={true} name="toggle-name" onChange={jest.fn()} value={true} {...props} />
  );
}
