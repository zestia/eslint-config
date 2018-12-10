# @zestia/eslint-config

#### General JavaScript

```javascript
// .eslintrc.js
module.exports = {
  extends: '@zestia/eslint-config'
};
```

#### Ember apps

```javascript
// .eslintrc.js
module.exports = {
  extends: '@zestia/eslint-config/ember-app'
};
```

#### Ember addons

```javascript
// .eslintrc.js
module.exports = {
  extends: '@zestia/eslint-config/ember-addon'
};
```

These configs include:

* `eslint:recommended` for minimal recommended defaults
* `eslint-config-standard` for a set of community lint rules around best practices and catching errors
* `plugin:prettier/recommended` for a set of community lint rules around pretty code
* `eslint-config-prettier` for turning off eslint pretty-code rules that could conflict with prettier
* `eslint-plugin-ember` for ember-specific recommended lint rules
* `eslint-plugin-hbs` for linting handlebars in tagged templates within javascript files
* `eslint-plugin-node` primarily for linting ember-cli project files

<hr>

Related repos:

* https://github.com/zestia/eslint-config
* https://github.com/zestia/stylelint-config
* https://github.com/zestia/ember-template-lint-plugin
* https://github.com/zestia/prettier-config