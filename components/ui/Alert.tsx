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
import * as classNames from 'classnames';
import AlertErrorIcon from '../icons/AlertErrorIcon';
import AlertWarnIcon from '../icons/AlertWarnIcon';
import AlertSuccessIcon from '../icons/AlertSuccessIcon';
import InfoIcon from '../icons/InfoIcon';
import ThemeContext from '../ThemeContext';
import Tooltip from '../controls/Tooltip';
import { translate } from '../../helpers/l10n';
import './Alert.css';

type AlertDisplay = 'banner' | 'block' | 'inline';
type AlertVariant = 'error' | 'warning' | 'success' | 'info';

export interface AlertProps {
  display?: AlertDisplay;
  variant: AlertVariant;
}

export function Alert(props: AlertProps & React.HTMLAttributes<HTMLDivElement>) {
  const { className, display, variant, ...domProps } = props;
  return (
    <div
      className={classNames('alert', `alert-${variant}`, className, {
        'is-inline': display === 'inline'
      })}
      role="alert"
      {...domProps}>
      <div className={classNames('alert-inner', { 'is-banner': display === 'banner' })}>
        <Tooltip overlay={translate('alert.tooltip', variant)}>
          <ThemeContext.Consumer>
            {({ theme }) => (
              <div className={classNames('alert-icon', { 'is-banner': display === 'banner' })}>
                {variant === 'error' && <AlertErrorIcon fill={theme.colors.alertIconError} />}
                {variant === 'warning' && <AlertWarnIcon fill={theme.colors.alertIconWarning} />}
                {variant === 'success' && <AlertSuccessIcon fill={theme.colors.alertIconSuccess} />}
                {variant === 'info' && <InfoIcon fill={theme.colors.alertIconInfo} />}
              </div>
            )}
          </ThemeContext.Consumer>
        </Tooltip>
        <div className="alert-content">{props.children}</div>
      </div>
    </div>
  );
}
