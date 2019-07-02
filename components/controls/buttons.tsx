/*
 * SonarQube
 * Copyright (C) 2009-2019 SonarSource SA
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
import { IconProps } from '../icons/Icon';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import ClearIcon, { ClearIconProps } from '../icons/ClearIcon';
import DeleteIcon from '../icons/DeleteIcon';
import EditIcon from '../icons/EditIcon';
import ThemeContext from '../ThemeContext';
import Tooltip from './Tooltip';
import './buttons.css';

type AllowedButtonAttributes = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'disabled' | 'id' | 'style' | 'title'
>;

interface ButtonProps extends AllowedButtonAttributes {
  autoFocus?: boolean;
  children?: React.ReactNode;
  innerRef?: (node: HTMLElement | null) => void;
  name?: string;
  onClick?: () => void;
  preventDefault?: boolean;
  stopPropagation?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export class Button extends React.PureComponent<ButtonProps> {
  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick, preventDefault = true, stopPropagation = false } = this.props;

    event.currentTarget.blur();
    if (preventDefault) {
      event.preventDefault();
    }
    if (stopPropagation) {
      event.stopPropagation();
    }
    if (onClick) {
      onClick();
    }
  };

  render() {
    const {
      className,
      innerRef,
      onClick,
      preventDefault,
      stopPropagation,
      type = 'button',
      ...props
    } = this.props;
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        {...props}
        className={classNames('button', className)}
        disabled={this.props.disabled}
        id={this.props.id}
        onClick={this.handleClick}
        ref={this.props.innerRef}
        type={type}
      />
    );
  }
}

export function ButtonLink({ className, ...props }: ButtonProps) {
  return <Button {...props} className={classNames('button-link', className)} />;
}

export function SubmitButton(props: T.Omit<ButtonProps, 'type'>) {
  // do not prevent default to actually submit a form
  return <Button {...props} preventDefault={false} type="submit" />;
}

export function ResetButtonLink(props: T.Omit<ButtonProps, 'type'>) {
  return <ButtonLink {...props} type="reset" />;
}

interface ButtonIconProps extends ButtonProps {
  className?: string;
  color?: string;
  onClick?: () => void;
  tooltip?: string;
}

export function ButtonIcon(props: ButtonIconProps) {
  const { className, color, tooltip, ...other } = props;
  const buttonComponent = (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Button
          className={classNames(className, 'button-icon')}
          stopPropagation={true}
          style={{ color: color || theme.colors.darkBlue }}
          {...other}
        />
      )}
    </ThemeContext.Consumer>
  );
  if (tooltip) {
    return (
      <Tooltip mouseEnterDelay={0.4} overlay={tooltip}>
        {buttonComponent}
      </Tooltip>
    );
  }
  return buttonComponent;
}

interface ClearButtonProps extends ButtonIconProps {
  className?: string;
  iconProps?: ClearIconProps;
  onClick?: () => void;
}

export function ClearButton({ color, iconProps = {}, ...props }: ClearButtonProps) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ButtonIcon color={color || theme.colors.gray60} {...props}>
          <ClearIcon {...iconProps} />
        </ButtonIcon>
      )}
    </ThemeContext.Consumer>
  );
}

interface ActionButtonProps extends ButtonIconProps {
  className?: string;
  iconProps?: IconProps;
  onClick?: () => void;
}

export function DeleteButton({ iconProps = {}, ...props }: ActionButtonProps) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ButtonIcon color={theme.colors.red} {...props}>
          <DeleteIcon {...iconProps} />
        </ButtonIcon>
      )}
    </ThemeContext.Consumer>
  );
}

export function EditButton({ iconProps = {}, ...props }: ActionButtonProps) {
  return (
    <ButtonIcon {...props}>
      <EditIcon {...iconProps} />
    </ButtonIcon>
  );
}

export function ListButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button className={classNames('button-list', className)} {...props}>
      {children}
      <ChevronRightIcon />
    </Button>
  );
}
