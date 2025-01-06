// Please note:
// - This file assumes you are already extending from js.configs.recommended
// - Do not include any stylistic rules, prettier handles that.

export default {
  rules: {
    // Prevent relative paths since they are hard to ../../../../../grok
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: [".*"],
            message: "Please use absolute paths",
          },
        ],
      },
    ],
    // var is block scoped, lets keep it that way
    "block-scoped-var": "error",
    // Prefer declarations over expressions, but allow arrow functions
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    // Deeply nested ifs are a smell, prefer early returns
    "max-depth": ["error", 2],
    // Deeply nested code should be refactored & flattened out
    "max-nested-callbacks": ["error", 4],
    // Disallow use of alert dialog boxes
    "no-alert": "error",
    // Disallow bitwise in general, if actually required you can ignore this rule
    "no-bitwise": "error",
    // Notify if console statements are left in by accident
    "no-console": "error",
    // Helps disambiguate certain regexes
    "no-div-regex": "error",
    // Use a single import statement
    "no-duplicate-imports": "error",
    // Enforce more accurate equality check
    "no-eq-null": "error",
    // Labels are not needed in this circumstance
    "no-extra-label": "error",
    // Avoid pollution global scope
    "no-implicit-globals": "error",
    // Prefer else if
    "no-lonely-if": "error",
    // Prevent creating functions in a loop
    "no-loop-func": "error",
    // Disallow chained assignment, difficult to read
    "no-multi-assign": "error",
    // Disallow return await, probably a misunderstanding
    "no-return-await": "error",
    // No need to use javascript:
    "no-script-url": "error",
    // Prevents unnecessary concat
    "no-useless-concat": "error",
    // Prefer let or const (block scoped variables) over function scoped
    "no-var": "error",
    // Warn about warning comments. Used to highlight TODO's etc in the codebase
    "no-warning-comments": "warn",
    // Prefer shorthand objects
    "object-shorthand": ["error", "always"],
    // Prefer { ... } over Object.assign
    "prefer-object-spread": "error",
    // Prefer [...args] over .apply(obj, args)
    "prefer-spread": "error",
    // Prefer template literals instead of string concatenation
    "prefer-template": "error",
    // Highlight functions flagged as async but which don't use await
    "require-await": "error",
    // vars are hoisted so lets keep it clear
    "vars-on-top": "error",
    // Enforce use of second parameter with parseInt/Float etc
    radix: "error",
    // Enforce use of strict directive
    strict: "error",
    // Prevent excessive code depth
    "max-depth": ["error", 2],
    // Enforces that setter methods have a corresponding getter
    "accessor-pairs": [
      "error",
      { setWithoutGet: true, enforceForClassMembers: true },
    ],
    // Ensure getters and setters sit next to each other
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    // Ensures callbacks in array methods return a value
    "array-callback-return": [
      "error",
      { allowImplicit: false, checkForEach: false },
    ],
    // Enforces curly braces for multi-line blocks
    curly: ["error", "multi-line"],
    // Requires the default case in switch statements to be last
    "default-case-last": "error",
    // Enforces dot notation for object properties
    "dot-location": ["error", "property"],
    // Enforces dot notation for accessing object properties
    "dot-notation": ["error", { allowKeywords: true }],
    // Requires '===' for equality comparisons
    eqeqeq: ["error", "always", { null: "ignore" }],
    // Disallows the use of Array constructors
    "no-array-constructor": "error",
    // Disallows the use of 'arguments.caller' and 'arguments.callee'
    "no-caller": "error",
    // Disallows the use of eval
    "no-eval": "error",
    // Disallows extending native objects
    "no-extend-native": "error",
    // Disallows unnecessary function bindings
    "no-extra-bind": "error",
    // Disallows floating decimal points
    "no-floating-decimal": "error",
    // Disallows implied eval expressions
    "no-implied-eval": "error",
    // Disallows the use of iterators
    "no-iterator": "error",
    // Disallows the use of labels in loops and switches
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    // Disallows lone blocks
    "no-lone-blocks": "error",
    // Disallows mixing spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": "error",
    // Disallows multiple spaces in expressions
    "no-multi-spaces": "error",
    // Disallows multiline strings
    "no-multi-str": "error",
    // Disallows the use of the 'new' keyword for certain objects
    "no-new": "error",
    // Disallows the use of 'new' with functions
    "no-new-func": "error",
    // Disallows the use of 'new' for object creation
    "no-new-object": "error",
    // Disallows the use of 'new' with symbols
    "no-new-symbol": "error",
    // Disallows the use of 'new' with wrappers
    "no-new-wrappers": "error",
    // Disallows octal escape sequences
    "no-octal-escape": "error",
    // Disallows the use of __proto__
    "no-proto": "error",
    // Disallows assignments in return statements unless in parentheses
    "no-return-assign": ["error", "except-parens"],
    // Disallows comparing a variable to itself
    "no-self-compare": "error",
    // Disallows sequences (using commas to combine expressions)
    "no-sequences": "error",
    // Disallows using curly braces inside string template literals
    "no-template-curly-in-string": "error",
    // Disallows throwing literals
    "no-throw-literal": "error",
    // Disallows unmodified loop conditions
    "no-unmodified-loop-condition": "error",
    // Disallows unnecessary ternary operators
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    // Disallows unused expressions
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    // Disallows using variables before they are defined
    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false },
    ],
    // Disallows unnecessary function calls
    "no-useless-call": "error",
    // Disallows unnecessary computed property names
    "no-useless-computed-key": "error",
    // Disallows unnecessary constructors
    "no-useless-constructor": "error",
    // Disallows unnecessary renaming of variables
    "no-useless-rename": "error",
    // Disallows unnecessary return statements
    "no-useless-return": "error",
    // Disallows the use of 'void' expressions
    "no-void": "error",
    // Enforces the use of a single variable declaration
    "one-var": ["error", { initialized: "never" }],
    // Prefers 'const' over 'let' where possible
    "prefer-const": ["error", { destructuring: "all" }],
    // Prefers promise rejection to have an error
    "prefer-promise-reject-errors": "error",
    // Prefers regex literals over the 'RegExp' constructor
    "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
    // Requires symbolic descriptions for symbols
    "symbol-description": "error",
    // Requires IIFE to be wrapped properly
    "wrap-iife": ["error", "any", { functionPrototypeMethods: true }],
    // Disallows Yoda conditions
    yoda: ["error", "never"],
  },
};
