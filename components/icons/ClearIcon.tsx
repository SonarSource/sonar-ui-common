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
import * as React from 'react';
import Icon, { IconProps } from './Icon';

export interface ClearIconProps extends IconProps {
  thin?: boolean;
}

export default function ClearIcon({ fill = 'currentColor', thin, ...iconProps }: ClearIconProps) {
  return (
    <Icon {...iconProps}>
      {thin ? (
        <path
          d="M14 3.209l-1.209-1.209-4.791 4.791-4.791-4.791-1.209 1.209 4.791 4.791-4.791 4.791 1.209 1.209 4.791-4.791 4.791 4.791 1.209-1.209-4.791-4.791z"
          style={{ fill }}
        />
      ) : (
        <path
          d="M14 4.242L11.758 2l-3.76 3.76L4.242 2 2 4.242l3.756 3.756L2 11.758 4.242 14l3.756-3.76 3.76 3.76L14 11.758l-3.76-3.76L14 4.242z"
          style={{ fill }}
        />
      )}
    </Icon>
  );
}
