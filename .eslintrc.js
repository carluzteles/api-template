module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off'
  }
}
