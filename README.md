# @zestia/eslint-config

This package provides linting rules for our JavaScript applications.

The rules are based on community standards, with a few extra ones specific to Zestia.

## Installation

```
npm install --save-dev @zestia/eslint-config
```

## Setup

1. Create the following file `.eslintrc.js`, chosing the appropritate contents depending on your project:

   **Vanilla JavaScript**

   ```javascript
   module.exports = {
     extends: '@zestia/eslint-config'
   };
   ```

   **Ember apps**

   ```javascript
   module.exports = {
     extends: '@zestia/eslint-config/ember-app'
   };
   ```

   **Ember addons**

   ```javascript
   module.exports = {
     extends: '@zestia/eslint-config/ember-addon'
   };
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
- `eslint-plugin-prettier` for a set of community lint rules around pretty code
- `eslint-config-prettier` for turning off eslint pretty-code rules that could conflict with prettier
- `eslint-plugin-ember` for ember-specific recommended lint rules
- `eslint-plugin-hbs` for linting handlebars in tagged templates within javascript files
- `eslint-plugin-node` primarily for linting ember-cli project files

## Related repos

- https://github.com/zestia/eslint-config
- https://github.com/zestia/stylelint-config
- https://github.com/zestia/ember-template-lint-plugin
- https://github.com/zestia/prettier-config
