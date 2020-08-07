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
import { shallow } from 'enzyme';
import * as React from 'react';
import DateFromNowHourPrecision, {
  DateFromNowHourPrecisionProps,
} from '../DateFromNowHourPrecision';

it('should render correctly', () => {
  expect(shallowRender()).toMatchSnapshot('standard');
  expect(shallowRender({ date: undefined }, true)).toMatchSnapshot(
    'overridden - no date no children'
  );
  expect(shallowRender({ date: new Date() })).toMatchSnapshot('overridden - less than an hour');
});

function shallowRender(overrides: Partial<DateFromNowHourPrecisionProps> = {}, noChildren = false) {
  const date = new Date('2020-02-20T20:20:20Z');
  return noChildren
    ? shallow(<DateFromNowHourPrecision date={date} {...overrides} />)
    : shallow(
        <DateFromNowHourPrecision date={date} {...overrides}>
          {(formatted) => <span>{formatted}</span>}
        </DateFromNowHourPrecision>
      );
}
