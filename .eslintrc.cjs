module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    lint: 'eslint .',
    'lint:fix': 'eslint --fix',
    format: "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
  }
};
