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
import { ThemeConsumer } from '../../theme';
import AdvancedTimeline from '../AdvancedTimeline';

// Replace scaleTime with scaleUtc to avoid timezone-dependent snapshots
jest.mock('d3-scale', () => {
  const { scaleUtc, ...others } = jest.requireActual('d3-scale');

  return {
    ...others,
    scaleTime: scaleUtc,
  };
});

jest.mock('lodash', () => {
  const lodash = jest.requireActual('lodash');
  return { ...lodash, throttle: (f) => f };
});

it('should render correctly', () => {
  expect(shallowRender()).toMatchSnapshot();
});

it('should render leak correctly', () => {
  const wrapper = shallowRender({ leakPeriodDate: new Date('2019-10-02') });

  const leakNode = wrapper.find(ThemeConsumer).dive().find('.leak-chart-rect');
  expect(leakNode.exists()).toBe(true);
  expect(leakNode.getElement().props.width).toBe(15);
});

it('should render old leak correctly', () => {
  const wrapper = shallowRender({ leakPeriodDate: new Date('2014-10-02') });

  const leakNode = wrapper.find(ThemeConsumer).dive().find('.leak-chart-rect');
  expect(leakNode.exists()).toBe(true);
  expect(leakNode.getElement().props.width).toBe(30);
});

it('should find date to display based on mouse location', () => {
  const wrapper = shallowRender();

  wrapper.instance().updateTooltipPos(0);
  expect(wrapper.state().selectedDateIdx).toBeUndefined();

  wrapper.instance().handleMouseEnter();
  wrapper.instance().updateTooltipPos(10);
  expect(wrapper.state().selectedDateIdx).toBe(1);
});

function shallowRender(props?: Partial<AdvancedTimeline['props']>) {
  return shallow<AdvancedTimeline>(
    <AdvancedTimeline
      height={100}
      maxYTicksCount={10}
      metricType="TEST_METRIC"
      series={[
        {
          name: 'test-1',
          type: 'test-type-1',
          data: [
            {
              x: new Date('2019-10-01'),
              y: 1,
            },
            {
              x: new Date('2019-10-02'),
              y: 2,
            },
          ],
        },
        {
          name: 'test-2',
          type: 'test-type-2',
          data: [
            {
              x: new Date('2019-10-03'),
              y: 3,
            },
          ],
        },
      ]}
      width={100}
      zoomSpeed={1}
      {...props}
    />
  );
}
