module.exports = {
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'frontendisti'
  ],
  rules: {
    'frontendisti/lodash-import': 'error'
  }
}
