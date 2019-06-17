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
   3.1 inside `sonar-ui-common` folder do: `npm link` (might require sudo access)
   3.2 inside SQ/SC folder do: `npm link sonar-ui-common`
   3.3 now all you changes inside `sonar-ui-common` will be available locally in SQ/SC
4. Before pushing do a `npm run validate` to check that everything is allright

## Publish new version

1. If everything is green, QG and travis jobs
2. Update versions in `package.json` and `sonar-project.properties`
3. `npm install` to update `package-lock.json`
4. `npm pack` to create the published package
5. `npm publish ./build/sonar-ui-common-x.y.z.tgz`
