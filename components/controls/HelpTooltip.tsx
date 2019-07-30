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
import * as classNames from 'classnames';
import * as React from 'react';
import HelpIcon from '../icons/HelpIcon';
import ThemeContext from '../ThemeContext';
import './HelpTooltip.css';
import Tooltip, { Placement } from './Tooltip';

interface Props {
  className?: string;
  children?: React.ReactNode;
  onShow?: () => void;
  overlay: React.ReactNode;
  placement?: Placement;
  tagName?: string;
}

export default function HelpTooltip(props: Props) {
  const { tagName = 'div' } = props;

  return React.createElement(
    tagName,
    { className: classNames('help-tooltip', props.className) },
    <Tooltip
      mouseLeaveDelay={0.25}
      onShow={props.onShow}
      overlay={props.overlay}
      placement={props.placement}>
      <span className="display-inline-flex-center">
        {props.children || (
          <ThemeContext.Consumer>
            {({ theme }) => <HelpIcon fill={theme.colors.gray71} size={12} />}
          </ThemeContext.Consumer>
        )}
      </span>
    </Tooltip>
  );
}
