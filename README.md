# @zestia/eslint-config

This package provides linting rules for JavaScript.

The rules are based on community standards, with a few extra ones specific to Zestia.

## Installation

```
npm install --save-dev @zestia/eslint-config
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
- `eslint-plugin-prettier` adds prettier as an eslint rule
- `eslint-config-prettier` for turning off eslint rules that could conflict with prettier
- `eslint-plugin-ember` for ember-specific recommended lint rules
- `eslint-plugin-hbs` for linting handlebars in tagged templates within javascript files
- `eslint-plugin-n` for linting ember-cli project files (node)
- `eslint-plugin-qunit` for linting tests
- `eslint-plugin-ember-data-sync-relationships` to enforce synchronous relationships
- `eslint-plugin-no-relative-import-paths` for preferring absolute paths

## Related repos

- https://github.com/zestia/eslint-config
- https://github.com/zestia/stylelint-config
- https://github.com/zestia/template-lint-config
- https://github.com/zestia/prettier-config
