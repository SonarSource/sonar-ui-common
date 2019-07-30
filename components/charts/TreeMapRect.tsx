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
import { scaleLinear } from 'd3-scale';
import * as React from 'react';
import { Link } from 'react-router';
import { Location } from '../../helpers/urls';
import Tooltip, { Placement } from '../controls/Tooltip';
import LinkIcon from '../icons/LinkIcon';

const SIZE_SCALE = scaleLinear()
  .domain([3, 15])
  .range([11, 18])
  .clamp(true);

interface Props {
  fill: string;
  height: number;
  icon?: React.ReactNode;
  itemKey: string;
  label: string;
  link?: string | Location;
  onClick?: (item: string) => void;
  placement?: Placement;
  prefix: string;
  tooltip?: React.ReactNode;
  width: number;
  x: number;
  y: number;
}

export default class TreeMapRect extends React.PureComponent<Props> {
  handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  handleRectClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.itemKey);
    }
  };

  renderLink = () => {
    const { link, height, width } = this.props;
    const hasMinSize = width >= 24 && height >= 24 && (width >= 48 || height >= 50);
    if (!hasMinSize || link == null) {
      return null;
    }
    return (
      <Link className="treemap-link" onClick={this.handleLinkClick} to={link}>
        <LinkIcon />
      </Link>
    );
  };

  renderCell = () => {
    const cellStyles = {
      left: this.props.x,
      top: this.props.y,
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.fill,
      fontSize: SIZE_SCALE(this.props.width / this.props.label.length),
      lineHeight: `${this.props.height}px`,
      cursor: this.props.onClick != null ? 'pointer' : 'default'
    };
    const isTextVisible = this.props.width >= 40 && this.props.height >= 45;
    const isIconVisible = this.props.width >= 24 && this.props.height >= 26;

    return (
      <div
        className="treemap-cell"
        onClick={this.handleRectClick}
        role="treeitem"
        style={cellStyles}
        tabIndex={0}>
        <div className="treemap-inner" style={{ maxWidth: this.props.width }}>
          {isIconVisible && (
            <span className={classNames('treemap-icon', { 'spacer-right': isTextVisible })}>
              {this.props.icon}
            </span>
          )}
          {isTextVisible &&
            (this.props.prefix ? (
              <span className="treemap-text">
                {this.props.prefix}
                <br />
                {this.props.label.substr(this.props.prefix.length)}
              </span>
            ) : (
              <span className="treemap-text">{this.props.label}</span>
            ))}
        </div>
        {this.renderLink()}
      </div>
    );
  };

  render() {
    const { placement, tooltip } = this.props;
    return (
      <Tooltip overlay={tooltip || undefined} placement={placement || 'left'}>
        {this.renderCell()}
      </Tooltip>
    );
  }
}
