# @zestia/eslint-config

This package provides linting rules for JavaScript.

The rules are based on community standards, with a few extra ones specific to Zestia.

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

1. Create the following file `.eslintrc.js`, choosing the appropriate ruleset depending on your project:

   **Vanilla JavaScript**

   ```javascript
   module.exports = { extends: '@zestia/eslint-config' };
   ```

   **Ember apps**

   ```javascript
   module.exports = { extends: '@zestia/eslint-config/ember-app' };
   ```

   **Ember addons**

   ```javascript
   module.exports = { extends: '@zestia/eslint-config/ember-addon' };
   ```

2. Add the following to `scripts` in `package.json`

   ```
   "lint:js": "eslint ."
   ```

## Running

```
npm run lint:js
```

## Notes

- `eslint:recommended` for minimal recommended defaults
- `eslint-config-standard` for a set of community lint rules around best practices and catching errors
- `eslint-config-prettier` for turning off eslint rules that conflict with prettier
- `eslint-plugin-ember` for ember-specific recommended lint rules
- `eslint-plugin-n` for linting ember-cli project files (node)
- `eslint-plugin-qunit` for linting tests
- `eslint-plugin-no-relative-import-paths` for preferring absolute paths
- `ember-eslint-parser` for linting gjs files

## Related repos

- https://github.com/zestia/eslint-config
- https://github.com/zestia/stylelint-config
- https://github.com/zestia/template-lint-config
- https://github.com/zestia/prettier-config
