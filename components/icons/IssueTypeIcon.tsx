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
import IssueIcon from './IssueIcon';

export interface Props {
  className?: string;
  query: string;
  size?: number;
}

export default function IssueTypeIcon({ className, query, size }: Props) {
  let type: T.IssueType;

  switch (query.toLowerCase()) {
    case 'bug':
    case 'bugs':
    case 'new_bugs':
      type = 'BUG';
      break;
    case 'vulnerability':
    case 'vulnerabilities':
    case 'new_vulnerabilities':
      type = 'VULNERABILITY';
      break;
    case 'code_smell':
    case 'code_smells':
    case 'new_code_smells':
      type = 'CODE_SMELL';
      break;
    case 'security_hotspot':
    case 'security_hotspots':
      type = 'SECURITY_HOTSPOT';
      break;
    default:
      return null;
  }

  const icon = <IssueIcon size={size} type={type} />;
  return className ? <span className={className}>{icon}</span> : icon;
}
