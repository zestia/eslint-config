module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: ['ember', 'ember-data-sync-relationships' /* , 'hbs' */],
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
    // Enforce synchronous relationships
    'ember-data-sync-relationships/no-async-relationships': 'error',
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
    // Lints Handlebars embedded in JS
    // (Disabled due to resolution issue)
    // 'hbs/check-hbs-template-literals': 'error'
  }
};
