# @zestia/eslint-config

This package provides linting rules for JavaScript projects.

## Installation

```
npm install --save-dev @zestia/eslint-config
```

Add the following to `~/.npmrc` to pull @zestia scoped packages from Github instead of NPM.

```
@zestia:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GH_TOKEN>
```

## Setup

1. Create the following file `eslint.config.mjs`

   ```javascript
   import js from "@eslint/js";
   import zestia from "@zestia/eslint-config";

   export default [js.configs.recommended, zestia];
   ```

2. Add the following to `scripts` in `package.json`

   ```
   "lint:js": "eslint ."
   ```

## Running

```
npm run lint:js
```

## Related repos

- https://github.com/zestia/eslint-config
- https://github.com/zestia/stylelint-config
- https://github.com/zestia/template-lint-config
- https://github.com/zestia/prettier-config
