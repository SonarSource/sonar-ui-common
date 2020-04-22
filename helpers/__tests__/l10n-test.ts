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
// require a "parent object" for spying
import { requestMessages, resetBundle, translate, translateWithParameters } from '../l10n';
import { getJSON } from '../request';

jest.mock('../request', () => ({
  getJSON: jest.fn(),
}));

const MSG = 'my_message';

afterEach(() => {
  resetBundle({});
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('#translate', () => {
  it('should translate simple message', () => {
    resetBundle({ my_key: MSG });
    expect(translate('my_key')).toBe(MSG);
  });

  it('should translate message with composite key', () => {
    resetBundle({ 'my.composite.message': MSG });
    expect(translate('my', 'composite', 'message')).toBe(MSG);
    expect(translate('my.composite', 'message')).toBe(MSG);
    expect(translate('my', 'composite.message')).toBe(MSG);
    expect(translate('my.composite.message')).toBe(MSG);
  });

  it('should not translate message but return its key', () => {
    expect(translate('random')).toBe('random');
    expect(translate('random', 'key')).toBe('random.key');
    expect(translate('composite.random', 'key')).toBe('composite.random.key');
  });

  it('should use pre-existing global bundle', () => {
    (window as any).SonarMessages = { test: MSG };
    expect(translate('test')).toBe(MSG);
  });
});

describe('#translateWithParameters', () => {
  it('should translate message with one parameter in the beginning', () => {
    resetBundle({ x_apples: '{0} apples' });
    expect(translateWithParameters('x_apples', 5)).toBe('5 apples');
  });

  it('should translate message with one parameter in the middle', () => {
    resetBundle({ x_apples: 'I have {0} apples' });
    expect(translateWithParameters('x_apples', 5)).toBe('I have 5 apples');
  });

  it('should translate message with one parameter in the end', () => {
    resetBundle({ x_apples: 'Apples: {0}' });
    expect(translateWithParameters('x_apples', 5)).toBe('Apples: 5');
  });

  it('should translate message with several parameters', () => {
    resetBundle({ x_apples: '{0}: I have {2} apples in my {1} baskets - {3}' });
    expect(translateWithParameters('x_apples', 1, 2, 3, 4)).toBe(
      '1: I have 3 apples in my 2 baskets - 4'
    );
  });

  it('should not translate message but return its key', () => {
    expect(translateWithParameters('random', 5)).toBe('random.5');
    expect(translateWithParameters('random', 1, 2, 3)).toBe('random.1.2.3');
    expect(translateWithParameters('composite.random', 1, 2)).toBe('composite.random.1.2');
  });
});

describe('requestMessages', () => {
  it('should handle 304', () => {
    (getJSON as jest.Mock).mockRejectedValue({ status: 304 });

    resetBundle({ foo: 'bar' });

    return requestMessages().then(() => {
      expect((window as any).SonarMessages).toEqual({});
    });
  });

  it('should forward unexpected errors', () => {
    (getJSON as jest.Mock).mockRejectedValue({ status: 401 });

    return requestMessages()
      .then(() => {
        fail('should throw');
      })
      .catch((error: any) => expect(error.message).toBe('Unexpected status code: 401'));
  });
});
