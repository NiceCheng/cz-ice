module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: false,
    node: false
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
  },
  globals: {}
}
