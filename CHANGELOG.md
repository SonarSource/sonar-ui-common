# sonar-ui-common changelog

## Unreleased

- SONAR-13530 Prevent default when button is disabled
- Add right-bottom popup placement
- Allow to pass a ref to a Popup
- Add PortalPopup component: allow to create a Popup outside it's overflow:hidden parent
- Add animated Arrow icon
- Add Cog icon
- Add AutoEllipsis component: allow to automatically add the .text-ellipsis class based on the text size

## 1.0.11

- Allow custom aria attributs in Rating component
- SONAR-13553 Do not allow multiple clicks on 'Load more' link in ListFooter
- ListFooter "Load more" and "Reload" links are now buttons

## 1.0.10

- Add POST JSON body request support

## 1.0.9

- Allow to pass arial attributes prop to icons

## 1.0.8

- Make HttpStatus enum follow enum guidelines

## 1.0.7

- Add HttpStatus enum

## 1.0.6

- SONAR-13391 Fix Activity Chart

## 1.0.5

- SONAR-13479 Add a Chevrons icon

## 1.0.4

- SONAR-12920 Deprecate the no footer CSS class
- Don't show a gray background on icon buttons

## 1.0.3

- SC-737 Improve disabled select option style

## 1.0.2

- Remove the mocked theme from the bundled package, `SetupTestEnvironment.js` files need to be updated in projects that use SUC (see the readme).

## 1.0.1

- Add new 'setReactDomContainer' init function

## 1.0.0

- Update version of Typescript, Eslint and Prettier

#### Breaking changes

- Drop legacy lazyLoad function
- SC-1951 Add sonar-ui-common initialization function for l10n messages and url context
  - Drop all the network and caching functions from `helpers/l10n.ts`

## 0.0.58

- SONAR-12256 Improve percentage formatting with trailing zeros
- SONAR-13310 Add intl Components

## 0.0.57

- Fix for update-center's component that was failing in the context of gatsby

## 0.0.56

- Add update-center's component used in documentation
- Update licence header

## 0.0.55

- Remove alert's tooltip in favor of an aria-label
- SONAR-13155 Upgrade dependencies

## 0.0.54

- SC-1814 Add Radio styles to RadioCard

## 0.0.53

- Fixing unmount issue with click outside handler component.
- SONAR-12060 Fix titles in modal for long words
- SC-1733 Fix mouse event issues on disabled buttons, transform disabled property into disabled class

## 0.0.52

- Introduce primary button styles

## 0.0.51

- SONAR-13049 Radio icons don't work well with flex
- SONAR-12909 Make radio buttons disableable

## 0.0.50

- SONAR-12632 Prevent activity graph labels from overlapping
- SONAR-12965 Add icon for 'new security hotspots'

## 0.0.49

- SONAR-12860 Add boolean and numberic type for RadioToggle and fix size glitch.
- SC-1258 Add 'copy to clipboard' feature to ActionsDropdownItem
- SC-1258 Add new popup positioning TopLeft
- SONAR-12452 Allow scrolling calls to be chained

## 0.0.48

- Add icon to ClipboardButton
- Update buttons padding

## 0.0.46

- SONAR-12633 Add new EscKeydownHandler component
- Deprecate using strings in keydown()

## 0.0.45

- Bump to typescript@3.7.4
- Bump to prettier@1.19.1
- Update query helper for array parsing

## 0.0.44

- BoxedTabs : add support for external css class
- ConfirmModal: prevent click events from bubbling to the parent component

## 0.0.43

- Allow icon buttons to have an ARIA label
- Set a 'Clear' label on the SearchBox clear icon button
- Allow Level component to have an ARIA label
- SONAR-12882 Add ARIA labels to Toggle button component

## 0.0.42

- SONAR-12637 Allow ActionsDropdown to be positioned like any other dropdown

## 0.0.41

- SONAR-12717 Add a helper to hide footer
- Fix BoxedTabs: make active tab unclickable

## 0.0.40

- SC-1402 Fix lazyLoadComponent error handling
- SC-1402 requestTryAndRepeatUntil now returns the error response after the max number of tries
- SC-1402 Replace usage of lazyLoad by lazyLoadComponent in Select
- SONAR-12679 Introduce new BranchIcon
- SONAR-12633 New BackIcon

## 0.0.39

- SC-1379 In requests, allow to bypass the checkstatus redirection to login page when getting a 401 error

## 0.0.38

- SC-1379 Validation inputs accepts a react node description

## 0.0.37

- Bump to typescript@3.6.4
- Fix BoxedTabs alignment
- SONAR-12684 Fix glitched spinner in SearchBox
- Don't fix BoxedTabs height
- SONAR-12636 Add a disabled state to the toggle component

## 0.0.36

- Make BoxedTabs labels accept JSX Elements

## 0.0.35

- SC-1242 Invert code smell icon
- SONAR-12610 Modal should not always display scrollbar
- SC-1059 Fix styling of disabled options in Select

## 0.0.34

- SC-1242 Add back currentColor as default fill value for issue type icons

## 0.0.33

- SONAR-11601 Prevent DonutChart from exporting d3 stuff

## 0.0.32

- Fix BoxedTabs style
- Update some color usage
  - SONAR-12539 Update leak color of timeline
  - SONAR-12541 Rewrite GlobalMessages to @emotion and clean colors and css
  - SONAR-11601 More colorblind friendly coverage indicators
- SC-1242 Update issue types icons

## 0.0.31

- Add BoxedTabs component
- Update red colors usage
  - SONAR-12503 E rating
  - SONAR-12506 Error Alerts borders

## 0.0.30

- SONAR-12414 Prevent click event from bubbling outside of popup
- SONAR-12256 Add utility for consistent rounding in project overview

## 0.0.29

- Fix button-link transitions
- Provide an enum with keycodes, to simplify handling keyboard events.
- SC-1098 Switch to @emotion instead of styled-components

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
