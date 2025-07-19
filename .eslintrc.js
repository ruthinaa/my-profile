module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react'],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
} 