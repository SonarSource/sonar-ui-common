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
import DeferredSpinner from '../ui/DeferredSpinner';
import { formatMeasure } from '../../helpers/measures';
import { translate, translateWithParameters } from '../../helpers/l10n';

export interface Props {
  count: number;
  className?: string;
  loading?: boolean;
  loadMore?: () => void;
  needReload?: boolean;
  reload?: () => void;
  ready?: boolean;
  total?: number;
}

export default function ListFooter({ ready = true, ...props }: Props) {
  const handleLoadMore = (event: React.SyntheticEvent<HTMLElement>) => {
    event.preventDefault();
    event.currentTarget.blur();
    if (props.loadMore) {
      props.loadMore();
    }
  };

  const handleReload = (event: React.SyntheticEvent<HTMLElement>) => {
    event.preventDefault();
    event.currentTarget.blur();
    if (props.reload) {
      props.reload();
    }
  };

  const hasMore = props.total && props.total > props.count;

  const loadMoreLink = (
    <a className="spacer-left" href="#" onClick={handleLoadMore}>
      {translate('show_more')}
    </a>
  );

  const reloadLink = (
    <a className="spacer-left" href="#" onClick={handleReload}>
      {translate('reload')}
    </a>
  );

  const className = classNames(
    'spacer-top note text-center',
    { 'new-loading': !ready },
    props.className
  );

  let link;

  if (props.needReload && props.reload) {
    link = reloadLink;
  } else if (hasMore && props.loadMore) {
    link = loadMoreLink;
  }

  return (
    <footer className={className}>
      {translateWithParameters(
        'x_of_y_shown',
        formatMeasure(props.count, 'INT', null),
        formatMeasure(props.total, 'INT', null)
      )}
      {link}
      {props.loading && <DeferredSpinner className="text-bottom spacer-left position-absolute" />}
    </footer>
  );
}
