module.exports = {
  env: {
    browser: true, // 브라우저 환경
    es2021: true,
    node: true, // Node.js 환경
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'compat', 'prettier'], // eslint-plugin-compat 추가
  rules: {
    'react/react-in-jsx-scope': 'off',
    'compat/compat': 'warn', // 지원하지 않는 ECMAScript, Web API에 대해 경고
  },
};
