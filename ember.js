module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember',
    'hbs'
  ],
  extends: [
    'plugin:ember/recommended',
    '@zestia/eslint-config'
  ],
  env: {
    browser: true
  },
  rules: {
    'hbs/check-hbs-template-literals': 'error',

    'no-restricted-imports': ['error', {
      paths: [{
        name: '@ember/object/computed',
        message: 'Please use ember-improved-cp/* instead'
      }, {
        name: '@ember/object',
        importNames: ['computed'],
        message: 'Please use ember-improved-cp instead'
      }, {
        name: 'jquery'
      }]
    }],

    // Best Practices

    'ember/alias-model-in-controller': 'off',
    'ember/closure-actions': 'error',
    'ember/named-functions-in-promises': 'off',
    'ember/new-module-imports': 'error',
    'ember/no-empty-attrs': 'off',
    'ember/no-function-prototype-extensions': 'error',
    'ember/no-global-jquery': 'error',
    'ember/no-jquery': 'error',
    'ember/no-observers': 'error',
    'ember/no-old-shims': 'error',
    'ember/no-on-calls-in-components': 'error',
    'ember/use-ember-get-and-set': 'off',

    // Possible Errors

    'ember/jquery-ember-run': 'error',
    'ember/no-attrs-in-components': 'error',
    'ember/no-attrs-snapshot': 'error',
    'ember/no-capital-letters-in-routes': 'error',
    'ember/no-duplicate-dependent-keys': 'error',
    'ember/no-side-effects': 'error',
    'ember/require-super-in-init': 'error',
    'ember/routes-segments-snake-case': 'error',

    // Ember Object

    'ember/avoid-leaking-state-in-ember-objects': 'error',

    // Stylistic Issues

    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
    'ember/use-brace-expansion': 'error'
  }
};
