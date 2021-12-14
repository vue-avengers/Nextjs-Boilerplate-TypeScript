module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': [
    'prettier --write --config .prettierrc.json {src,e2e,docs}/**/*.{ts,tsx}',
  ],
};
