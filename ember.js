module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['ember', 'hbs'],
  extends: ['@zestia/eslint-config', 'plugin:ember/recommended'],
  env: {
    browser: true
  },
  rules: {
    'ember/no-get': 'error',
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
    'hbs/check-hbs-template-literals': 'error'
    // 'ember/use-ember-get-and-set': 'error'
  }
};
