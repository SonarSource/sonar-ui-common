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
import { differenceInHours } from 'date-fns';
import * as React from 'react';
import { DateSource } from 'react-intl';
import { translate } from '../../helpers/l10n';
import Tooltip from '../controls/Tooltip';
import DateFromNow from './DateFromNow';
import DateTimeFormatter from './DateTimeFormatter';

export interface DateFromNowHourPrecisionProps {
  children?: (formattedDate: string) => React.ReactNode;
  date?: DateSource;
}

export default function DateFromNowHourPrecision(props: DateFromNowHourPrecisionProps) {
  const { children = (f: string) => f, date } = props;

  /*
   * Cast returns as ReactElement to bypass typescript issue with functional components
   * returning anything else (like a string, in our case...)
   * (https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544)
   */
  if (!date) {
    return children(translate('never')) as React.ReactElement;
  }

  if (differenceInHours(Date.now(), date) < 1) {
    return children(translate('less_than_1_hour_ago')) as React.ReactElement;
  }

  return (
    <Tooltip overlay={<DateTimeFormatter date={date} />}>
      <span>
        <DateFromNow date={date}>{children}</DateFromNow>
      </span>
    </Tooltip>
  );
}
