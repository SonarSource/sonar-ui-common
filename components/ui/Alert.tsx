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
import * as classNames from 'classnames';
import * as React from 'react';
import { translate } from '../../helpers/l10n';
import { Dict } from '../../types/types';
import AlertErrorIcon from '../icons/AlertErrorIcon';
import AlertSuccessIcon from '../icons/AlertSuccessIcon';
import AlertWarnIcon from '../icons/AlertWarnIcon';
import InfoIcon from '../icons/InfoIcon';
import { css, styled, Theme, ThemedProps, useTheme } from '../theme';
import DeferredSpinner from './DeferredSpinner';

type AlertDisplay = 'banner' | 'inline' | 'block';
type AlertVariant = 'error' | 'warning' | 'success' | 'info' | 'loading';

export interface AlertProps {
  display?: AlertDisplay;
  variant: AlertVariant;
}

interface AlertVariantInformation {
  icon: JSX.Element;
  color: string;
  borderColor: string;
  backGroundColor: string;
}

const StyledAlertIcon = styled.div<{ isBanner: boolean; variantInfo: AlertVariantInformation }>`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(${(props) => (props.isBanner ? 2 : 4)} * ${(props) => props.theme.sizes.gridSize});
  border-right: ${(props) => (!props.isBanner ? '1px solid' : 'none')};
  border-color: ${(props) => props.variantInfo.borderColor};
`;

const StyledAlertContent = styled.div`
  flex: 1 1 auto;
  overflow: auto;
  text-align: left;
  padding: ${(props) => props.theme.sizes.gridSize}
    calc(2 * ${(props) => props.theme.sizes.gridSize});
`;

const alertInnerIsBannerMixin = ({ theme }: ThemedProps) => css`
  min-width: ${theme.sizes.minPageWidth};
  max-width: ${theme.sizes.maxPageWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${theme.sizes.pagePadding};
  padding-right: ${theme.sizes.pagePadding};
  box-sizing: border-box;
`;

const StyledAlertInner = styled.div<{ isBanner: boolean }>`
  display: flex;
  align-items: stretch;
  ${(props) => (props.isBanner ? alertInnerIsBannerMixin : null)}
`;

const StyledAlert = styled.div<{ isInline: boolean; variantInfo: AlertVariantInformation }>`
  border: 1px solid;
  border-radius: 2px;
  margin-bottom: ${(props) => props.theme.sizes.gridSize};
  border-color: ${(props) => props.variantInfo.borderColor};
  background-color: ${(props) => props.variantInfo.backGroundColor};
  color: ${(props) => props.variantInfo.color};
  display: ${(props) => (props.isInline ? 'inline-block' : 'block')};

  :empty {
    display: none;
  }

  a,
  .button-link {
    border-color: ${(props) => props.theme.colors.darkBlue};
  }
`;

function getAlertVariantInfo({ colors }: Theme, variant: AlertVariant): AlertVariantInformation {
  const variantList: Dict<AlertVariantInformation> = {
    error: {
      icon: <AlertErrorIcon fill={colors.alertIconError} />,
      color: colors.alertTextError,
      borderColor: colors.alertBorderError,
      backGroundColor: colors.alertBackgroundError,
    },
    warning: {
      icon: <AlertWarnIcon fill={colors.alertIconWarning} />,
      color: colors.alertTextWarning,
      borderColor: colors.alertBorderWarning,
      backGroundColor: colors.alertBackgroundWarning,
    },
    success: {
      icon: <AlertSuccessIcon fill={colors.alertIconSuccess} />,
      color: colors.alertTextSuccess,
      borderColor: colors.alertBorderSuccess,
      backGroundColor: colors.alertBackgroundSuccess,
    },
    info: {
      icon: <InfoIcon fill={colors.alertIconInfo} />,
      color: colors.alertTextInfo,
      borderColor: colors.alertBorderInfo,
      backGroundColor: colors.alertBackgroundInfo,
    },
    loading: {
      icon: <DeferredSpinner timeout={0} />,
      color: colors.alertTextInfo,
      borderColor: colors.alertBorderInfo,
      backGroundColor: colors.alertBackgroundInfo,
    },
  };

  return variantList[variant];
}

export function Alert(props: AlertProps & React.HTMLAttributes<HTMLDivElement>) {
  const theme = useTheme();
  const { className, display, variant, ...domProps } = props;
  const isInline = display === 'inline';
  const isBanner = display === 'banner';
  const variantInfo = getAlertVariantInfo(theme, variant);

  return (
    <StyledAlert
      className={classNames('alert', className)}
      isInline={isInline}
      role="alert"
      variantInfo={variantInfo}
      {...domProps}>
      <StyledAlertInner isBanner={isBanner}>
        <StyledAlertIcon
          aria-label={translate('alert.tooltip', variant)}
          isBanner={isBanner}
          variantInfo={variantInfo}>
          {variantInfo.icon}
        </StyledAlertIcon>
        <StyledAlertContent className="alert-content">{props.children}</StyledAlertContent>
      </StyledAlertInner>
    </StyledAlert>
  );
}
