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
3. If you are working both on the lib and SonarQube or SonarCloud, you need to link it to ease your workflow :
   1. Build `sonar-ui-common` with : `yarn build`
   2. Then from inside the `build/dist` folder of `sonar-ui-common` do: `yarn link` (might require sudo access)
   3. Inside SQ/SC folder do: `yarn link sonar-ui-common`
   4. Now you current build of `sonar-ui-common` will be available locally in SQ/SC, if you change things in `sonar-ui-common` you'll need to rebuild it to see it in SQ/SC
4. Before pushing do a `yarn validate` to check that everything is allright

## Publish new version

1. If everything is green, QG and travis jobs
2. Bump versions in `package.json`
3. `yarn` to update the `yarn.lock` file if needed
4. Update the [changelog](./CHANGELOG.md) (leave the `Unreleased` part which will be filled for the next version)
5. `yarn package` to create the package to be published
6. `yarn publish ./build/dist/sonar-ui-common-x.y.z.tgz` to actually publish it to npm registry (you might want to check your .npmrc file to make sure you are not targeting repox)
