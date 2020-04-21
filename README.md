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

To use the library, it should first be initialized by these methods:

```Ts
import Initializer from 'sonar-ui-common/helpers/init';

Initializer
  .setUrlContext('/sonarqube')  // [required] Provide the web context
  .setMessages({})              // [optional] Provide your l10n bundle, retrieved anyway you want (from ws call, localstorage, json file...)
  .setLocale('en');             // [optional] Provide the language of your l10n bundle
```

The urlContext MUST be set before using the library or it will throw an Error.
The l10n data can be set asynchronously, i.e. `messages` and `locale` can stay `undefined` if they need to be updated later.
The default messages contain only a default error message, and the default locale is 'en'.

## Styled-components

While developing styled components, you should seriously consider adding one of those extension to your IDE : https://github.com/Microsoft/typescript-styled-plugin#usage

It will provide syntax highlighting, quick-fix and intellisense.

## What to improve

- [ ] Add a global index file
- [ ] Expose sonar-ui-common from sonar-web to reduce bundle size from extensions, currently it's duplicated in every extensions. Also it should help with theming and allows us to remove most of the call to ThemeProvider. Our current way of using ThemeProvider everywhere is mostly due to the fact that every extension is loading a different ThemeProvider component (it means that this ThemeProvider is duplicated for each extension).
- [ ] Better management of theming (currently all extensions needs to reference the theme file from sonar-web in their build)
- [ ] CSS of component based on theme (we currently rely on the fact that all usage of sonar-ui-common also compile CSS of components with the correct CSS custom properties setup)
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

### Automated way

It's possible to use the release script. There is one requirements though: globally install [npmrc](https://www.npmjs.com/package/npmrc) (`npm install -g npmrc`) to manage your `.npmrc` profiles. You will also need two profiles defined (check the package readme to know how to set them up): 
* One named `npm` that should target npm registry and that contain your npm auth token
* And one named `default` that targets repox

If you meet those requirements you just need to call `yarn release 0.0.x` and the script will automatically:
* stash your current changes
* update the `package.json` and `CHANGELOG.md` files
* package the module
* create a release commit and tag it
* switch your npmrc file to target npm and publish the package (you will still need to manually enter the new version and your two factor auth token when prompted by yarn)
* push the commit and the tag
* pop the stashed changes


### Manual way

1. If everything is green, QG and travis jobs
2. Bump versions in `package.json`
3. `yarn` to update the `yarn.lock` file if needed
4. Update the [changelog](./CHANGELOG.md) (leave the `Unreleased` part which will be filled for the next version)
5. Push and tag the release commit
6. `yarn package` to create the package to be published
7. `yarn publish ./build/dist/sonar-ui-common-x.y.z.tgz` to actually publish it to npm registry (you might want to check your .npmrc file to make sure you are not targeting repox)
