# Sonar-ui-common

Library containing all common components, helpers and types for both SonarQube and SonarCloud.

It is available on the npm registry: https://www.npmjs.com/package/sonar-ui-common

## How to use

There is no index file so you have to import components with their path like this :

```Ts
import BugIcon from 'sonar-ui-common/components/icons/BugIcon';
```

Ambients types are available in the `types.d.ts`, to benefit from them in your project you include it in your `tsconfig.json` file, example:

```json
{
  "compilerOptions": {
    /*...*/
  },
  "include": ["./src/main/js/**/*", "node_modules/sonar-ui-common/types.d.ts"]
}
```

## Styled-components

While developing styled components, you should seriously consider adding one of those extension to your IDE : https://github.com/Microsoft/typescript-styled-plugin#usage

It will provide syntax highlighting, quick-fix and intellisense.

## What to improve

- [ ] CSS of component based on theme (we currently rely on the fact that all usage of sonar-ui-common also compile CSS of components with the correct CSS custom properties setup)
- [ ] Better management of theming (currently all extensions needs to reference the theme file from sonar-web in their build)
- [ ] Embbed translations in the lib (currently we rely on the fact that the translation bundle will be made available by sonar-web, the lib can't be started in standalone mode, there would be not translations)
- [ ] Add a global index file
- [ ] Expose sonar-ui-common from sonar-web to reduce bundle size from extensions, currently it's duplicated in every extensions
- [ ] Add release button in burgr
- [ ] Display failing jobs in burgr

## Contribute

1. Checkout the project
2. `yarn` inside it
3. Before pushing do a `yarn validate` to check that everything is allright

### Using `yarn link`
To make it easier when developping both on the lib and SonarQube or SonarCloud (or an extension), you can use the `yarn link` feature.
To set it up:

  1. Build `sonar-ui-common` with : `yarn build`
  2. Then from inside the `build/dist` folder of `sonar-ui-common` do: `yarn link` (might require sudo access)
  3. Inside SQ/SC folder do: `yarn link sonar-ui-common`
  4. Now you current build of `sonar-ui-common` will be available locally in SQ/SC, if you change things in `sonar-ui-common` you'll need to rebuild it to see it in SQ/SC

It's also possible to link directly from the sources but you won't be able to build SQ/SC with `gradle` and you are not as close to the reality, so you might get more suprises when using the packaged version of `sonar-ui-common`.

There is also a few gotcha's that you can encounter when linking: 
* Running the `sonar-web` unit tests might not work as expected:
  * It might see duplicated versions of react for various reasons
  * Testing a component with `mount` that has a `sonar-ui-common` component that is implemented with hooks [can fail](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react)
* Same when runing `sonar-web` typescript checking

### Validating that everything work with `sonar-web`
A good practice before publishing the package is to make sure everything work well with built version of SQ/SC using gradle. The best way to do that is to : 

1. Run `yarn package` in `sonar-ui-common`
2. Run `yarn add /path/to/the/generated/package/file.zip`
3. Build with gradle from SQ/SC root folder: `./gradlew build -x test -x obfucsate`

## Publish new version

1. If everything is green, QG and travis jobs
2. Bump versions in `package.json`
3. `yarn` to update the `yarn.lock` file if needed
4. Update the [changelog](./CHANGELOG.md) (leave the `Unreleased` part which will be filled for the next version)
5. Push and tag the release commit
6. `yarn package` to create the package to be published
7. `yarn publish ./build/dist/sonar-ui-common-x.y.z.tgz` to actually publish it to npm registry (you might want to check your .npmrc file to make sure you are not targeting repox)
