module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'airbnb-typescript/base',
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "max-len": ["error", 120],
    "no-console": "off",
    "import/prefer-default-export": "off",
    "no-empty-function": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/camelcase": "off",
  },
};
