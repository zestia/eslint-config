module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'plugin:ember/recommended',
    '@zestia/eslint-config'
  ],
  env: {
    'browser': true
  },
  rules: {
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
    'ember/alias-model-in-controller': 'off',
    'ember/closure-actions': 'error',
    'ember/jquery-ember-run': 'error',
    'ember/new-module-imports': 'error',
    'ember/named-functions-in-promises': 'off',
    'ember/new-module-imports': 'error',
    'ember/no-attrs-in-components': 'error',
    'ember/no-attrs-snapshot': 'error',
    'ember/no-capital-letters-in-routes': 'error',
    'ember/no-duplicate-dependent-keys': 'error',
    'ember/no-empty-attrs': 'off',
    'ember/no-function-prototype-extensions': 'error',
    'ember/no-global-jquery': 'error',
    'ember/no-observers': 'error',
    'ember/no-old-shims': 'error',
    'ember/no-on-calls-in-components': 'error',
    'ember/no-side-effects': 'error',
    'ember/require-super-in-init': 'error',
    'ember/routes-segments-snake-case': 'off',
    'ember/use-brace-expansion': 'error',
    'ember/use-ember-get-and-set': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'error',
    'ember/order-in-models': ['error'],
    'ember/order-in-controllers': ['error'],
    'ember/order-in-routes': ['error'],

    // Temporary lenient rules, until we migrate to ember-eslint-plugin's defaults
    // 'ember/order-in-components': ['error']
    'ember/order-in-components': ['error', {
      order: [
        ['property', 'service'],
        'single-line-function',
        'multi-line-function',
        'observer',
        'lifecycle-hook',
        ['method', 'actions']
      ]
    }]
  },
  overrides: [
    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true
      }
    }
  ]
};
