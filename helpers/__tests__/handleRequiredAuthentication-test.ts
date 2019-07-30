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
import getHistory from '../getHistory';
import handleRequiredAuthentication from '../handleRequiredAuthentication';

jest.mock('../getHistory', () => ({
  default: jest.fn()
}));

it('should not render for anonymous user', () => {
  const replace = jest.fn();
  (getHistory as jest.Mock<any>).mockReturnValue({ replace });
  handleRequiredAuthentication();
  expect(replace).toBeCalledWith(expect.objectContaining({ pathname: '/sessions/new' }));
});
