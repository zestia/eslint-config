module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
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
    'ember/no-jquery': 'error',
    'ember/no-test-and-then': 'error',
    'ember/no-test-import-export': 'error',
    'ember/no-unnecessary-index-route': 'error',
    'ember/no-unnecessary-service-injection-argument': 'error',
    'ember/order-in-components': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-routes': 'error',
    'ember/route-path-style': 'error',
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
    }]
  }
};
