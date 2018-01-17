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
    // Zestia Ember-Specific

    'indent': ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: [
        // Friendlier Mixin indentation
        "CallExpression[callee.property.name=/extend|create/] > ObjectExpression"
      ]
    }],

    'no-restricted-imports': ['error', {
      paths: [{
        name: '@ember/object/computed',
        message: 'Please use ember-improved-cp/* instead'
      }, {
        name: '@ember/object',
        importNames: ['computed'],
        message: 'Please use ember-improved-cp instead'
      }]
    }],

    // Ember Plugin

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
    'ember/no-global-jquery': 'off',
    'ember/no-observers': 'error',
    'ember/no-old-shims': 'error',
    'ember/no-on-calls-in-components': 'error',
    'ember/no-side-effects': 'error',
    'ember/require-super-in-init': 'error',
    'ember/routes-segments-snake-case': 'off',
    'ember/use-brace-expansion': 'error',
    'ember/use-ember-get-and-set': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'error',
    'ember/order-in-components': ['error', {
      order: [
        'property',
        'service',
        'single-line-function',
        'multi-line-function',
        'observer',
        'lifecycle-hook',
        'method',
        'actions'
      ]
    }],
    'ember/order-in-models': ['error', {
      order: [
        'attribute',
        'relationship',
        'single-line-function',
        'multi-line-function'
      ]
    }],
    'ember/order-in-routes': ['error', {
      order: [
        'inherited-property',
        'property',
        'service',
        'single-line-function',
        'multi-line-function',
        'model',
        'lifecycle-hook',
        'method',
        'actions'
      ]
    }],
    'ember/order-in-controllers': ['error', {
      order: [
        'query-params',
        'inherited-property',
        'property',
        'service',
        'single-line-function',
        'multi-line-function',
        'observer',
        'method',
        'actions'
      ]
    }]
  },

  // Standard Ember-app overrides

  overrides: [{ // node files
    files: [
      'testem.js',
      'ember-cli-build.js',
      'config/**/*.js'
    ],
    parserOptions: {
      sourceType: 'script',
      ecmaVersion: 2015
    },
    env: {
      browser: false,
      node: true
    }
  }, { // test files
    files: ['tests/**/*.js'],
    excludedFiles: ['tests/dummy/**/*.js'],
    env: {
      embertest: true
    },
    globals: {
      waitForAnimation: true,
      upload: true,
      rootElement: true
    },
    rules: {
      'max-len': ['error', {
        code: 100,
        tabWidth: 2,
        ignoreComments: true
      }]
    }
  }]
};
