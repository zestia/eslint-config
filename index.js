module.exports = {
  plugins: [
    // Runs prettier as an eslint rule
    'prettier'
  ],
  extends: [
    // Always extend eslint's recommended ruleset
    'eslint:recommended',
    // Extend community Standard ruleset
    'standard',
    // Turn off eslint rules that could conflict with prettier
    'plugin:prettier/recommended'
  ],
  rules: {
    // var is block scoped, lets keep it that way
    'block-scoped-var': 'error',
    // Deeply nested ifs are a big smell
    'max-depth': ['error', 2],
    // Deeply nested code should be refactored & flattened out
    'max-nested-callbacks': ['error', 4],
    // Prevent hard to read code
    'max-statements-per-line': ['error', { max: 2 }],
    // Enforce a consistent comment styles
    'multiline-comment-style': ['error', 'separate-lines'],
    // Disallow use of alert dialog boxes
    'no-alert': 'error',
    // Disallow bitwise in general, if actually requried you can ignore this rule
    'no-bitwise': 'error',
    // Make sure variable name doesn't clash with argument name
    'no-catch-shadow': 'error',
    // Notify if console statements are left in by accident
    'no-console': 'error',
    // Helps disambiguate certain regexes
    'no-div-regex': 'error',
    // Use a single import statement
    'no-duplicate-imports': 'error',
    // Enforce more accurate equality check
    'no-eq-null': 'error',
    // Labels are not needed in this circumstance
    'no-extra-label': 'error',
    // Avoid polution global scope
    'no-implicit-globals': 'error',
    // Prefer else if
    'no-lonely-if': 'error',
    // Prevent creating functions in a loop
    'no-loop-func': 'error',
    // Make sure require calls are separate from other logic
    'no-mixed-requires': 'error',
    // Disallow chained assignment, difficult to read
    'no-multi-assign': 'error',
    // No need to use javascript:
    'no-script-url': 'error',
    // Prevent unused labels from being left behind
    'no-unused-labels': 'error',
    // Prevents unnecessary concat
    'no-useless-concat': 'error',
    // Prefer let or const (block scoped variables) over function scoped
    'no-var': 'error',
    // Warn about warning comments. Used to highlight TODO's etc in the codebase
    'no-warning-comments': 'warn',
    // Prefer shorthand objects
    'object-shorthand': ['error', 'always'],
    // Enforce whitespace between if/block statements (not dealt with by Prettier)
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' }
    ],
    // Prefer { ... } over Object.assign
    'prefer-object-spread': 'error',
    // Prefer [...args] over .apply(obj, args)
    'prefer-spread': 'error',
    // Prefer template literals instead of string concatenation
    'prefer-template': 'error',
    // Prevent subtle race conditions
    'require-atomic-updates': 'error',
    // Highlight functions flagged as async but which don't use await
    'require-await': 'error',
    // Highlight functions flagged with an asterisk but which don't use yield
    'require-yield': 'error',
    // vars are hoisted so lets keep it clear
    'vars-on-top': 'error',
    // Enforce use of second parameter with parseInt/Float etc
    radix: 'error',
    // Enforce use of strict directive
    strict: 'error'
  }
};
