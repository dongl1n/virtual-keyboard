module.exports = {
  "env": {
    "browser": true,
    "node": true,
  },
  "extends": "eslint:all",
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": false,
  },
  "rules": {
    "comma-dangle": "off",
    "indent": ["error", 2],
    "no-cond-assign": ["error", "always"],
    "one-var": "off",
    "init-declarations": "off",
    "no-console": "off",
    "no-inline-comments": "off",
    "no-magic-numbers": "off",
    "sort-keys": "off",
    "array-element-newline": "off",
    "no-ternary": "off",
    "multiline-ternary": "off",
    "no-plusplus": "off",
    "function-call-argument-newline": ["error", "consistent"],
    "id-length": [
      "error",
      {
        "exceptions": ["i", "j"],
      },
    ],
    "no-return-assign": "off",
    "one-var-declaration-per-line": "off",
    "prefer-template": "off",
    "max-lines": [
      "error",

      {
        "max": 700,
      },
    ],

    "no-alert": "off",
    "no-loop-func": "off",

  },

};

