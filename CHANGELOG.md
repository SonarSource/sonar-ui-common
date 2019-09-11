# sonar-ui-common changelog

## Unreleased

## 0.0.28

- SC-937 Add new loading variant for Alert messages
- SONAR-12372 Add back prevent default in Radio click

## 0.0.27

- Add `lazyLoadComponent`, a new lazy loading component based on React.lazy, Suspense and ErrorBoundaries. It has a better handling of component typings than our old `lazyLoad` component.
- SONAR-12443 Fix Lodash Vulnerability

## 0.0.26

- Expose defaultFilterOptions from react-select

## 0.0.25

- Fix jest-styled-component import

## 0.0.24

- Fix tooltip theme issue

## 0.0.23

- SONAR-12372 Fix Radio preventing a Modal from closing using the Esc key
- Fix bug introduced by Alert migration to styled-component

## 0.0.22

- Fix positioning logic in ScreenPositionFixer
- SONAR-12380 A Tooltip should be flipped if too close to the viewport's edge
- SONAR-12414 Add new ClickEventBoundary component, to support catching click events and preventing their bubbling up the component tree
- Add styled-components
- Move lodash as peer-dependency/dev-dependency
- Migrate Alert component to styled-components

## 0.0.21

- Export new request methods: get, getText, parseText
- Update the icon for ClipboardIconButton

## 0.0.20

- SONAR-12322 Project Mark/Unmark as favorite button is not refreshing properly when switching of project
- SONAR-11742 UI glitch with H2 DB footer warning on Edge

## 0.0.19

- SONAR-12199 Update ClipboardButton, add ClipboardIconButton
- SONAR-12245 Fix requestTryAndRepeatUntil for new error format

## 0.0.18

- SONAR-12245 fix l10n error handling
- Fix tooltips on disabled buttons

## 0.0.17

- SONAR-11714 Remove .badge from Select list CSS
- Update required versions for Node.js (>=10.15.3) and yarn (>=1.15.2)

## 0.0.16

- SONAR-12245 Fix throwGlobalError and checkStatus

## 0.0.15

- SONAR-11714 Update badge styles
- Make some types for charts private

## Before...

Migration of common elements for [SonarQube](https://www.sonarqube.org) and [SonarCloud](http://sonarcloud.io).
