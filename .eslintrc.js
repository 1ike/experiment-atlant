module.exports = {
  plugins: ['react', '@typescript-eslint', 'react-hooks', "react-native"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-native/all",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript"
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    "/.eslintrc.js",
    "/babel.config.js"
  ],
  parserOptions: {
    "project": "./tsconfig.json",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        "variables": false
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "ignoredNodes": [
          "TSTypeParameterInstantiation"
        ]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "warn",
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        "": 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // "react-native/no-unused-styles": 2,
    // "react-native/split-platform-components": 2,
    // "react-native/no-inline-styles": 2,
    // "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 0,
    // "react-native/no-single-element-style-arrays": 2,
    "react-native/sort-styles": 0,
    "no-console": [
      "warn",
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ]
  }
};
