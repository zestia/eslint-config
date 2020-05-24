module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['ember', 'hbs'],
  extends: [
    // Extend the base config
    '@zestia/eslint-config',
    // Extend Ember community recommended ruleset
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    // Prefer shorthand injection
    'ember/no-unnecessary-service-injection-argument': 'error',
    // Enforce community based order of methods in components
    'ember/order-in-components': 'error',
    // Enforce community based order of methods in controllers
    'ember/order-in-controllers': 'error',
    // Enforce community based order of methods in models
    'ember/order-in-models': 'error',
    // Enforce community based order of methods in routes
    'ember/order-in-routes': 'error',
    // Lints Handlebars embedded in JS
    'hbs/check-hbs-template-literals': 'error'
  }
};
