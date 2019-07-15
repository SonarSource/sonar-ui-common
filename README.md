# Sonar-ui-common

Library containing all common components, helpers and types for both SonarQube and SonarCloud.

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

## Contribute

1. Checkout the project
2. `npm install` or `npm ci` inside it
3. If you are working both on the lib and SonarQube or SonarCloud, you need to link it to ease your workflow :
   3.1 build `sonar-ui-common` with : `npm run build`
   3.2 then from inside the `build/dist` folder of `sonar-ui-common` do: `yarn link` (might require sudo access)
   3.3 inside SQ/SC folder do: `yarn link sonar-ui-common`
   3.4 now you current build of `sonar-ui-common` will be available locally in SQ/SC, if you change things in `sonar-ui-common` you'll need to rebuild it to see it in SQ/SC
4. Before pushing do a `npm run validate` to check that everything is allright

## Publish new version

1. If everything is green, QG and travis jobs
2. Bump versions in `package.json`
3. `npm install` to update the `package-lock.json` file
4. `npm run package` to create the package to be published
5. `npm publish ./build/dist/sonar-ui-common-x.y.z.tgz` to actually publish it to npm (you might want to check your .npmrc file to make sure you are not targeting repox)
