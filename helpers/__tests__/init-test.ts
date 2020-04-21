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
/* eslint-disable no-console */
import Initializer, {
  DEFAULT_LOCALE,
  DEFAULT_MESSAGES,
  getLocale,
  getMessages,
  getUrlContext,
} from '../init';

const originalConsoleWarn = console.warn;
console.warn = jest.fn();

beforeEach(() => {
  (console.warn as jest.Mock).mockClear();
});

afterAll(() => {
  Initializer.setLocale('en').setMessages({}).setUrlContext('');
  console.warn = originalConsoleWarn;
});

it('should throw when trying to get a value without initializing first', () => {
  // @ts-ignore: initialize everything to undefined, not possible by respecting types
  Initializer.setLocale(undefined).setMessages(undefined).setUrlContext(undefined);

  expect(getLocale()).toBe(DEFAULT_LOCALE);
  expect(console.warn).toHaveBeenLastCalledWith(
    expect.stringContaining('L10n locale is not initialized')
  );

  expect(getMessages()).toBe(DEFAULT_MESSAGES);
  expect(console.warn).toHaveBeenLastCalledWith(
    expect.stringContaining('L10n messages are not initialized')
  );

  expect(getUrlContext).toThrowErrorMatchingInlineSnapshot(
    `"sonar-ui-common init: web context needs to be initialized by Initializer.setUrlContext before being used"`
  );
});

it('should return the locale, messages and context', () => {
  const locale = 'ru';
  const messages = { any: 'Any' };
  const urlContext = '/context';
  Initializer.setLocale(locale).setMessages(messages).setUrlContext(urlContext);

  expect(getLocale()).toBe(locale);
  expect(getMessages()).toBe(messages);
  expect(getUrlContext()).toBe(urlContext);

  expect(console.warn).not.toBeCalled();
});
