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
import * as React from 'react';
import { IconProps, ThemedIcon } from './Icon';

export default function CodeSmellIcon({ className, fill, size }: IconProps) {
  return (
    <ThemedIcon className={className} size={size}>
      {({ theme }) => (
        <path
          d="M8 1a7.05 7.05 0 107.05 7.05A7 7 0 008 1zm-.72 8.9l-1.46 2.52a.3.3 0 01-.26.14.44.44 0 01-.15-.05A5.28 5.28 0 012.8 8a.29.29 0 01.29-.29H6a.28.28 0 01.29.29 1.74 1.74 0 00.89 1.51.31.31 0 01.1.39zm-.12-3.44A.25.25 0 017 6.5a.29.29 0 01-.26-.14L5.31 3.84a.33.33 0 010-.14.31.31 0 01.16-.26 5.28 5.28 0 015.22 0 .29.29 0 01.1.4l-1.5 2.52A.29.29 0 019 6.5a.33.33 0 01-.14 0 1.79 1.79 0 00-1.7-.04zm3.53 6.05a.3.3 0 01-.4-.1L8.83 9.89a.29.29 0 01.1-.41A1.76 1.76 0 009.8 8a.28.28 0 01.29-.29H13a.32.32 0 01.31.29 5.27 5.27 0 01-2.62 4.51z"
          style={{ fill: fill || theme.colors.baseFontColor }}
        />
      )}
    </ThemedIcon>
  );
}
