module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]
      ]
    }
  },
  env: {
    browser: true
  },
  rules: {
    // Require that expect is always used
    // https://github.com/platinumazure/eslint-plugin-qunit/issues/382#issuecomment-1614400526
    'qunit/require-expect': ['error', 'always'],
    // Prefer shorthand injection
    'ember/no-unnecessary-service-injection-argument': 'error',
    // Enforce community based order of methods in components
    'ember/order-in-components': 'error',
    // Enforce community based order of methods in controllers
    'ember/order-in-controllers': 'error',
    // Enforce community based order of methods in models
    'ember/order-in-models': 'error',
    // Enforce community based order of methods in routes
    'ember/order-in-routes': 'error'
  },
  overrides: [
    {
      files: ['**/*.js'],
      plugins: ['ember'],
      extends: ['@zestia/eslint-config', 'plugin:ember/recommended'],
      rules: {}
    },
    {
      files: ['**/*.gjs'],
      parser: 'ember-eslint-parser',
      plugins: ['ember'],
      extends: [
        '@zestia/eslint-config',
        'plugin:ember/recommended',
        'plugin:ember/recommended-gjs'
      ]
    },
    {
      files: ['tests/**/*.{js,ts,gjs,gts}'],
      rules: {
        // override / enable optional rules
        'ember/no-replace-test-comments': 'error'
      }
    }
  ]
};
