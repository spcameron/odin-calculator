// eslint.config.cjs
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["node_modules", "dist", "build"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node }, // proper envs without hand-rolling
    },
    rules: {
      "no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-undef": "error",
      "no-redeclare": "error",
      "no-shadow": ["error", { builtinGlobals: false, hoist: "functions" }],
      "no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true },
      ],
      eqeqeq: ["error", "smart"],
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      curly: ["error", "multi-line"],
      "prefer-const": ["warn", { destructuring: "all" }],
      "no-var": "error",
      "prefer-rest-params": "warn",
      "prefer-spread": "warn",
    },
  },
];
