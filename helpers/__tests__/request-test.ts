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

import handleRequiredAuthentication from '../handleRequiredAuthentication';
import { checkStatus, parseError, requestTryAndRepeatUntil } from '../request';

jest.mock('../handleRequiredAuthentication', () => ({ default: jest.fn() }));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('parseError', () => {
  it('should parse error and return the message', () => {
    return expect(
      parseError({ json: jest.fn().mockResolvedValue({ errors: [{ msg: 'Error1' }] }) } as any)
    ).resolves.toBe('Error1');
  });

  it('should parse error and return concatenated messages', () => {
    return expect(
      parseError({
        json: jest.fn().mockResolvedValue({ errors: [{ msg: 'Error1' }, { msg: 'Error2' }] })
      } as any)
    ).resolves.toBe('Error1. Error2');
  });

  it('should parse error and return default message', () => {
    return expect(
      parseError({
        json: jest.fn().mockResolvedValue({})
      } as any)
    ).resolves.toBe('default_error_message');
  });

  it('should parse error and return default message', () => {
    return expect(
      parseError({
        json: jest.fn().mockRejectedValue(undefined)
      } as any)
    ).resolves.toBe('default_error_message');
  });
});

describe('requestTryAndRepeatUntil', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('should repeat call until stop condition is met', async () => {
    const apiCall = jest.fn().mockResolvedValue({ repeat: true });
    const stopRepeat = jest.fn().mockImplementation(({ repeat }) => !repeat);

    const promiseResult = requestTryAndRepeatUntil(
      apiCall,
      { max: -1, slowThreshold: -20 },
      stopRepeat
    );

    for (let i = 1; i < 5; i++) {
      jest.runAllTimers();
      expect(apiCall).toBeCalledTimes(i);
      await new Promise(setImmediate);
      expect(stopRepeat).toBeCalledTimes(i);
    }
    apiCall.mockResolvedValue({ repeat: false });
    jest.runAllTimers();
    expect(apiCall).toBeCalledTimes(5);
    await new Promise(setImmediate);
    expect(stopRepeat).toBeCalledTimes(5);

    return expect(promiseResult).resolves.toEqual({ repeat: false });
  });

  it('should repeat call as long as there is an error', async () => {
    const apiCall = jest.fn().mockRejectedValue({ status: 504 });
    const stopRepeat = jest.fn().mockReturnValue(true);
    const promiseResult = requestTryAndRepeatUntil(
      apiCall,
      { max: -1, slowThreshold: -20 },
      stopRepeat,
      [504]
    );

    for (let i = 1; i < 5; i++) {
      jest.runAllTimers();
      expect(apiCall).toBeCalledTimes(i);
      await new Promise(setImmediate);
    }
    apiCall.mockResolvedValue('Success');
    jest.runAllTimers();
    expect(apiCall).toBeCalledTimes(5);
    await new Promise(setImmediate);
    expect(stopRepeat).toBeCalledTimes(1);

    return expect(promiseResult).resolves.toBe('Success');
  });

  it('should stop after 3 calls', async () => {
    const apiCall = jest.fn().mockResolvedValue({});
    const stopRepeat = jest.fn().mockReturnValue(false);
    const promiseResult = requestTryAndRepeatUntil(
      apiCall,
      { max: 3, slowThreshold: 0 },
      stopRepeat
    );

    expect(promiseResult).rejects.toBe(undefined);

    for (let i = 1; i < 3; i++) {
      jest.runAllTimers();
      expect(apiCall).toBeCalledTimes(i);
      await new Promise(setImmediate);
    }
    apiCall.mockResolvedValue('Success');
    jest.runAllTimers();
    expect(apiCall).toBeCalledTimes(3);
  });

  it('should slow down after 2 calls', async () => {
    const apiCall = jest.fn().mockResolvedValue({});
    const stopRepeat = jest.fn().mockReturnValue(false);
    requestTryAndRepeatUntil(apiCall, { max: 5, slowThreshold: 3 }, stopRepeat);

    for (let i = 1; i < 3; i++) {
      jest.advanceTimersByTime(500);
      expect(apiCall).toBeCalledTimes(i);
      await new Promise(setImmediate);
    }

    jest.advanceTimersByTime(500);
    expect(apiCall).toBeCalledTimes(2);
    jest.advanceTimersByTime(2000);
    expect(apiCall).toBeCalledTimes(2);
    jest.advanceTimersByTime(500);
    expect(apiCall).toBeCalledTimes(3);
    await new Promise(setImmediate);

    jest.advanceTimersByTime(3000);
    expect(apiCall).toBeCalledTimes(4);
  });
});

describe('checkStatus', () => {
  it('should resolve with the response', () => {
    const response = mockResponse();
    return expect(checkStatus(response)).resolves.toBe(response);
  });

  it('should reject with the response', () => {
    const response = mockResponse({}, 500);
    return expect(checkStatus(response)).rejects.toEqual(response);
  });

  it('should handle required authentication', () => {
    return checkStatus(mockResponse({}, 401)).catch(() => {
      expect(handleRequiredAuthentication).toBeCalled();
    });
  });

  it('should reload the page when version is changing', async () => {
    const reload = jest.fn();
    delete window.location;
    (window as any).location = { reload };

    await checkStatus(mockResponse({ 'Sonar-Version': '6.7' }));
    expect(reload).not.toBeCalled();
    await checkStatus(mockResponse({ 'Sonar-Version': '6.7' }));
    expect(reload).not.toBeCalled();
    checkStatus(mockResponse({ 'Sonar-Version': '7.9' }));
    expect(reload).toBeCalled();
  });

  function mockResponse(headers: T.Dict<string> = {}, status = 200): any {
    return {
      headers: { get: (prop: string) => headers[prop] },
      status
    };
  }
});
