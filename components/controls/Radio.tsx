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
import './Radio.css';

interface Props {
  checked: boolean;
  className?: string;
  onCheck: (value: string) => void;
  value: string;
}

export default class Radio extends React.PureComponent<Props> {
  handleClick = () => {
    this.props.onCheck(this.props.value);
  };

  render() {
    return (
      <a
        aria-checked={this.props.checked}
        className={classNames('display-inline-flex-center link-radio', this.props.className)}
        href="#"
        onClick={this.handleClick}
        role="radio">
        <i
          className={classNames('icon-radio', 'spacer-right', {
            'is-checked': this.props.checked
          })}
        />
        {this.props.children}
      </a>
    );
  }
}
